/**
 * SSE Leaderboard Stream — /api/gamification/stream
 *
 * Pushes live leaderboard updates to connected clients via Server-Sent Events.
 * Supports all leaderboard scopes (global, weekly, monthly, tokens_shared, contributions).
 */

import { NextRequest } from "next/server";
import { type LeaderboardScope, getTopN } from "@/lib/gamification/leaderboard";
import { CORS_HEADERS } from "@/shared/utils/cors";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

const VALID_SCOPES: ReadonlySet<string> = new Set([
  "global",
  "weekly",
  "monthly",
  "tokens_shared",
  "contributions",
]);

/**
 * GET /api/gamification/stream — SSE leaderboard updates
 *
 * Query params:
 *   scope — one of: global, weekly, monthly, tokens_shared, contributions (default: global)
 */
export async function GET(request: NextRequest) {
  const authErr = await requireManagementAuth(request);
  if (authErr) return authErr;

  const url = new URL(request.url);
  const rawScope = url.searchParams.get("scope") || "global";
  const scope: LeaderboardScope = VALID_SCOPES.has(rawScope)
    ? (rawScope as LeaderboardScope)
    : "global";

  let cleanup = () => {};

  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      let closed = false;

      // A half-open peer never fires "abort", so every exit path (abort,
      // cancel, failed enqueue) funnels through here to stop the timers.
      cleanup = () => {
        if (closed) return;
        closed = true;
        clearInterval(heartbeat);
        clearInterval(updater);
        request.signal.removeEventListener("abort", cleanup);
        try {
          controller.close();
        } catch {
          /* already closed or cancelled */
        }
      };

      const safeEnqueue = (chunk: Uint8Array) => {
        if (closed) return;
        try {
          controller.enqueue(chunk);
        } catch {
          cleanup();
        }
      };

      const sendUpdate = async () => {
        try {
          const entries = await getTopN(scope, 50);
          const data = JSON.stringify({ type: "leaderboard", scope, entries });
          safeEnqueue(encoder.encode(`data: ${data}\n\n`));
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          safeEnqueue(encoder.encode(`event: error\ndata: ${JSON.stringify({ error: msg })}\n\n`));
        }
      };

      // Heartbeat every 15s
      const heartbeat = setInterval(() => {
        safeEnqueue(encoder.encode(`: heartbeat ${Date.now()}\n\n`));
      }, 15_000);

      // Update every 5s
      const updater = setInterval(sendUpdate, 5_000);

      // A client that disconnects while auth is still being checked arrives
      // here already aborted, and "abort" will never fire again.
      if (request.signal.aborted) {
        cleanup();
        return;
      }
      request.signal.addEventListener("abort", cleanup);

      // Send initial state
      sendUpdate();
    },
    cancel() {
      cleanup();
    },
  });

  return new Response(stream, {
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
