import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import {
  applyThinkingBudget,
  DEFAULT_THINKING_CONFIG,
  setThinkingBudgetConfig,
  ThinkingMode,
} from "../../open-sse/services/thinkingBudget.ts";
import { translateRequest } from "../../open-sse/translator/index.ts";
import { DefaultExecutor } from "../../open-sse/executors/default.ts";

afterEach(() => setThinkingBudgetConfig(DEFAULT_THINKING_CONFIG));

function request(complex = false): Record<string, unknown> {
  return {
    model: "agnes-2.5-flash",
    messages: Array.from({ length: complex ? 201 : 1 }, () => ({
      role: "user",
      content: "say pong",
    })),
    tools: Array.from({ length: complex ? 70 : 0 }, (_, i) => ({
      type: "function",
      function: { name: `tool_${i}`, parameters: { type: "object", properties: {} } },
    })),
  };
}

for (const effort of ["none", "minimal", "low", "medium", "high", "xhigh", "max"]) {
  test(`adaptive preserves explicit ${effort} despite configured high and complex input`, () => {
    const body = { ...request(true), reasoning_effort: effort };
    const before = structuredClone(body);
    const result = applyThinkingBudget(body, { mode: ThinkingMode.ADAPTIVE, effortLevel: "high" });
    assert.equal(result.reasoning_effort, effort);
    assert.deepEqual(body, before, "client request must not be mutated");
  });
}

test("adaptive preserves a nested Responses effort without adding a conflicting top-level effort", () => {
  const body = { ...request(true), reasoning: { effort: "low", summary: "auto" } };
  const result = applyThinkingBudget(body, { mode: ThinkingMode.ADAPTIVE, effortLevel: "high" });
  assert.deepEqual(result.reasoning, body.reasoning);
  assert.equal(result.reasoning_effort, undefined);
});

test("adaptive preserves explicit high for long content even with configured max", () => {
  const body = {
    ...request(),
    messages: [{ role: "user", content: "x".repeat(2001) }],
    reasoning_effort: "high",
  };
  assert.equal(
    applyThinkingBudget(body, { mode: ThinkingMode.ADAPTIVE, effortLevel: "max" }).reasoning_effort,
    "high"
  );
});

test("adaptive without explicit effort still scales and preserves configured max behavior", () => {
  const body = { ...request(true), reasoning: {} };
  for (const effortLevel of ["high", "max"]) {
    assert.equal(
      applyThinkingBudget(body, { mode: ThinkingMode.ADAPTIVE, effortLevel }).reasoning_effort,
      "xhigh"
    );
  }
  assert.equal(
    applyThinkingBudget(
      { ...request(), reasoning: {} },
      {
        mode: ThinkingMode.ADAPTIVE,
        effortLevel: "max",
      }
    ).reasoning_effort,
    "xhigh"
  );
});

test("explicit effort does not override strip, custom or passthrough mode policy", () => {
  const body = { ...request(), reasoning_effort: "low" };
  assert.equal(applyThinkingBudget(body, { mode: ThinkingMode.AUTO }).reasoning_effort, undefined);
  assert.equal(
    applyThinkingBudget(body, { mode: ThinkingMode.CUSTOM, customBudget: 131072 }).reasoning_effort,
    "xhigh"
  );
  assert.equal(
    applyThinkingBudget(body, { mode: ThinkingMode.PASSTHROUGH }).reasoning_effort,
    "low"
  );
});

for (const explicit of [true, false]) {
  test(`translator to executor sends ${explicit ? "explicit high" : "automatic max"} to Agnes`, async (t) => {
    setThinkingBudgetConfig({ mode: ThinkingMode.ADAPTIVE, effortLevel: "high" });
    const body = {
      ...request(true),
      ...(explicit ? { reasoning_effort: "high" } : { reasoning: {} }),
    };
    let outbound: Record<string, unknown> | undefined;
    t.mock.method(globalThis, "fetch", async (_url: unknown, init?: RequestInit) => {
      outbound = JSON.parse(String(init?.body)) as Record<string, unknown>;
      return new Response(JSON.stringify({ choices: [], usage: {} }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    });
    const translated = translateRequest(
      "openai",
      "openai",
      "agnes-2.5-flash",
      body,
      false,
      null,
      "agnes"
    );
    const result = await new DefaultExecutor("agnes").execute({
      model: "agnes-2.5-flash",
      body: translated,
      stream: false,
      credentials: { apiKey: "test-only-16662" },
    });
    assert.equal(result.response.status, 200);
    assert.ok(outbound, "the executor must dispatch through the mocked transport");
    assert.equal(outbound.reasoning_effort, explicit ? "high" : "max");
    assert.equal(outbound.model, "agnes-2.5-flash");
  });
}
