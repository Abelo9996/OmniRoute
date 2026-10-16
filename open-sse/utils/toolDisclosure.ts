/**
 * Progressive tool disclosure (opt-in, off by default).
 *
 * Agent clients with many MCP servers attach every tool schema to every request. When the
 * operator enables `settings.toolDisclosure`, this keeps the `maxTools` client tools most
 * relevant to the current user turn (Okapi BM25 over tool name, description and parameter
 * names) and drops the rest before the provider tool cap runs, so a cap keeps the useful
 * tools instead of whatever came first in the array.
 *
 * Never dropped: tools the conversation already called, a forced `tool_choice` tool,
 * `alwaysInclude`, `ToolSearch` (Claude Code's deferred-schema tool), unnamed hosted tools
 * and anything the caller pins (`isPinnedTool`). Kept tools stay in their original order.
 *
 * Prompt-cache caveat: providers cache the tools block as part of the prompt prefix, so a
 * tool subset that changes between turns misses that cache. Measure before enabling.
 */

type Body = Record<string, unknown>;
type ToolRecord = Record<string, unknown>;

export interface ToolDisclosureConfig {
  enabled: boolean;
  /** Relevance-selected tools to keep (pinned tools come on top of this budget). */
  maxTools: number;
  /** Tool names never dropped. */
  alwaysInclude: string[];
}

export interface ToolDisclosureOptions {
  /** Client (pre-translation) body: a second source for the query and history pins. */
  rawBody?: unknown;
  /** Prefix a translator adds to tool names (e.g. the Claude OAuth prefix); stripped to compare. */
  toolNamePrefix?: string;
  /** Extra caller-owned pins (e.g. the router's own fallback tools). */
  isPinnedTool?: (tool: unknown) => boolean;
}

export interface ToolDisclosureStats {
  before: number;
  after: number;
  dropped: string[];
}

export const DEFAULT_TOOL_DISCLOSURE_MAX_TOOLS = 20;
export const TOOL_DISCLOSURE_MAX_TOOLS_LIMIT = 500;
const ALWAYS_PINNED = ["ToolSearch"];

/** Read `settings.toolDisclosure`; returns null unless explicitly enabled. */
export function resolveToolDisclosureConfig(
  settings: Record<string, unknown> | null | undefined
): ToolDisclosureConfig | null {
  const raw = settings?.toolDisclosure;
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const record = raw as Record<string, unknown>;
  if (record.enabled !== true) return null;
  const numeric = Number(record.maxTools);
  const maxTools =
    Number.isFinite(numeric) && numeric >= 1
      ? Math.min(TOOL_DISCLOSURE_MAX_TOOLS_LIMIT, Math.floor(numeric))
      : DEFAULT_TOOL_DISCLOSURE_MAX_TOOLS;
  const alwaysInclude = Array.isArray(record.alwaysInclude)
    ? record.alwaysInclude.filter((n): n is string => typeof n === "string" && n.length > 0)
    : [];
  return { enabled: true, maxTools, alwaysInclude };
}

// ── BM25 ───────────────────────────────────────────────────────────────────

const K1 = 1.5;
const B = 0.75;

const STOP_WORDS = new Set(
  (
    "a an the is it in on at to for of and or but with from by as this that can will be are " +
    "was were has have had do does did not no if its your my get set use via please now me"
  ).split(" ")
);

function tokenize(text: string): string[] {
  if (!text) return [];
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

interface IndexedDoc {
  tf: Map<string, number>;
  length: number;
}

interface ToolIndex {
  docs: IndexedDoc[];
  df: Map<string, number>;
  avgLength: number;
}

function readToolName(tool: unknown): string | null {
  if (!tool || typeof tool !== "object") return null;
  const record = tool as ToolRecord;
  if (typeof record.name === "string" && record.name) return record.name;
  const fn = record.function as ToolRecord | undefined;
  return typeof fn?.name === "string" && fn.name ? fn.name : null;
}

function toolDocText(tool: unknown): string {
  const record = (tool ?? {}) as ToolRecord;
  const fn = (record.function ?? {}) as ToolRecord;
  const name = readToolName(tool) ?? "";
  const description = String(record.description ?? fn.description ?? "");
  const schema = (record.input_schema ?? record.parameters ?? fn.parameters ?? {}) as ToolRecord;
  const properties = schema?.properties;
  const params =
    properties && typeof properties === "object" ? Object.keys(properties as object) : [];
  // Name parts weigh triple: "mcp__github__create_pull_request" → github create pull request.
  const nameText = name.replace(/_+/g, " ");
  return [nameText, nameText, nameText, description, ...params].join(" ");
}

function buildIndex(tools: unknown[]): ToolIndex {
  const docs = tools.map((tool) => {
    const tokens = tokenize(toolDocText(tool));
    const tf = new Map<string, number>();
    for (const token of tokens) tf.set(token, (tf.get(token) ?? 0) + 1);
    return { tf, length: tokens.length };
  });
  const df = new Map<string, number>();
  for (const doc of docs) {
    for (const term of doc.tf.keys()) df.set(term, (df.get(term) ?? 0) + 1);
  }
  const avgLength = docs.length ? docs.reduce((sum, d) => sum + d.length, 0) / docs.length : 1;
  return { docs, df, avgLength: avgLength || 1 };
}

function scoreDocs(index: ToolIndex, queryTokens: string[]): number[] {
  const n = index.docs.length;
  const scores = new Array<number>(n).fill(0);
  for (const term of new Set(queryTokens)) {
    const docFreq = index.df.get(term) ?? 0;
    if (docFreq === 0) continue;
    const idf = Math.log((n - docFreq + 0.5) / (docFreq + 0.5) + 1);
    index.docs.forEach((doc, i) => {
      const tf = doc.tf.get(term) ?? 0;
      if (tf === 0) return;
      const norm = tf + K1 * (1 - B + (B * doc.length) / index.avgLength);
      scores[i] += (idf * (tf * (K1 + 1))) / norm;
    });
  }
  return scores;
}

// Index cache keyed by the ordered tool set. Agent sessions resend the same catalog every
// turn, so the index is built once per catalog. Bounded LRU — never an unbounded Map.
const INDEX_CACHE_MAX = 64;
const indexCache = new Map<string, ToolIndex>();

function toolSetKey(tools: unknown[]): string {
  return tools
    .map((tool) => {
      const record = (tool ?? {}) as ToolRecord;
      const fn = (record.function ?? {}) as ToolRecord;
      const description = String(record.description ?? fn.description ?? "");
      return `${readToolName(tool)}\u0001${description.length}`;
    })
    .join("\u0000");
}

function getIndex(tools: unknown[]): ToolIndex {
  const key = toolSetKey(tools);
  const cached = indexCache.get(key);
  if (cached) {
    indexCache.delete(key);
    indexCache.set(key, cached);
    return cached;
  }
  const index = buildIndex(tools);
  indexCache.set(key, index);
  if (indexCache.size > INDEX_CACHE_MAX) {
    const oldest = indexCache.keys().next().value;
    if (oldest !== undefined) indexCache.delete(oldest);
  }
  return index;
}

/** Test-only reset for the module-level index cache. */
export function _resetToolDisclosureIndexCache(): void {
  indexCache.clear();
}

// ── Query + pins from the conversation ────────────────────────────────────────

function conversationItems(body: unknown): unknown[] {
  if (!body || typeof body !== "object") return [];
  const record = body as Body;
  if (Array.isArray(record.messages)) return record.messages;
  if (Array.isArray(record.input)) return record.input;
  return [];
}

function textOf(content: unknown): string {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content
    .map((part) => {
      if (!part || typeof part !== "object") return "";
      const p = part as ToolRecord;
      return (p.type === "text" || p.type === "input_text") && typeof p.text === "string"
        ? p.text
        : "";
    })
    .join(" ");
}

// The last user turn that carries text states the task; tool-result-only user turns
// (Claude tool loops) are skipped so the selection does not reshuffle mid-loop.
function lastUserText(body: unknown): string {
  const items = conversationItems(body);
  for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i] as ToolRecord | null;
    if (!item || item.role !== "user") continue;
    const text = textOf(item.content);
    if (text.trim()) return text;
  }
  return "";
}

function collectHistoryToolNames(body: unknown, into: Set<string>): void {
  for (const raw of conversationItems(body)) {
    if (!raw || typeof raw !== "object") continue;
    const item = raw as ToolRecord;
    if (item.type === "function_call" && typeof item.name === "string") into.add(item.name);
    if (Array.isArray(item.tool_calls)) {
      for (const call of item.tool_calls as ToolRecord[]) {
        const fn = call?.function as ToolRecord | undefined;
        const name = fn?.name ?? call?.name;
        if (typeof name === "string") into.add(name);
      }
    }
    if (Array.isArray(item.content)) {
      for (const block of item.content as ToolRecord[]) {
        if (block?.type === "tool_use" && typeof block.name === "string") into.add(block.name);
      }
    }
  }
  const choice = (body as Body | null)?.tool_choice;
  if (choice && typeof choice === "object") {
    const record = choice as ToolRecord;
    const fn = record.function as ToolRecord | undefined;
    const forced = fn?.name ?? record.name;
    if (typeof forced === "string") into.add(forced);
  }
}

// ── Selection ────────────────────────────────────────────────────────────────

function withAnchorMoved(original: unknown[], kept: unknown[]): unknown[] {
  let anchor: unknown;
  for (const tool of original) {
    const value = (tool as ToolRecord | null)?.cache_control;
    if (value !== undefined) anchor = value;
  }
  if (anchor === undefined || kept.length === 0) return kept;
  return kept.map((tool, i) => {
    const record = tool as ToolRecord;
    const isLast = i === kept.length - 1;
    if (isLast) return { ...record, cache_control: anchor };
    if (record.cache_control === undefined) return tool;
    const { cache_control: _dropped, ...rest } = record;
    return rest;
  });
}

/**
 * Apply relevance-based tool disclosure to an upstream body. Returns the body by reference
 * (and `stats: null`) when disabled or when nothing needs dropping.
 */
export function applyToolDisclosure(
  body: Body,
  config: ToolDisclosureConfig | null | undefined,
  options: ToolDisclosureOptions = {}
): { body: Body; stats: ToolDisclosureStats | null } {
  const tools = body.tools;
  if (!config?.enabled || !Array.isArray(tools) || tools.length <= config.maxTools) {
    return { body, stats: null };
  }
  const prefix = options.toolNamePrefix ?? "";
  const normalize = (name: string) =>
    prefix && name.startsWith(prefix) ? name.slice(prefix.length) : name;

  const pinnedNames = new Set<string>([...ALWAYS_PINNED, ...config.alwaysInclude]);
  collectHistoryToolNames(body, pinnedNames);
  collectHistoryToolNames(options.rawBody, pinnedNames);
  const pinned = new Set<string>([...pinnedNames].map(normalize));

  const keep = new Array<boolean>(tools.length).fill(false);
  const candidates: number[] = [];
  tools.forEach((tool, i) => {
    const name = readToolName(tool);
    if (name === null || pinned.has(normalize(name)) || options.isPinnedTool?.(tool)) {
      keep[i] = true;
    } else {
      candidates.push(i);
    }
  });

  const pinnedCount = tools.length - candidates.length;
  const budget = Math.max(0, config.maxTools - pinnedCount);
  if (budget >= candidates.length) return { body, stats: null };

  const query = lastUserText(body) || lastUserText(options.rawBody);
  const scores = scoreDocs(getIndex(tools), tokenize(query));
  // Highest score first; ties keep declaration order (stable sort).
  const ranked = [...candidates].sort((a, b) => scores[b] - scores[a]);
  for (const i of ranked.slice(0, budget)) keep[i] = true;

  const kept = tools.filter((_, i) => keep[i]);
  const dropped = tools
    .filter((_, i) => !keep[i])
    .map((tool) => readToolName(tool))
    .filter((name): name is string => name !== null);
  return {
    body: { ...body, tools: withAnchorMoved(tools, kept) },
    stats: { before: tools.length, after: kept.length, dropped },
  };
}
