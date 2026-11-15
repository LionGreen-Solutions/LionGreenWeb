import assert from "node:assert/strict";
import { test } from "node:test";
import { submitAccountDeletionRequest } from "../src/lib/account-deletion-request.ts";

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { "Content-Type": "application/json" },
});

test("sends the identifier and accepts an explicit server acknowledgement", async (t) => {
  const fetch = t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(url, "/api/account-deletion.php");
    assert.equal(options.method, "POST");
    assert.deepEqual(JSON.parse(options.body), { identifier: "test@example.invalid" });
    assert.ok(options.signal instanceof AbortSignal);
    return json({ success: true });
  });
  await submitAccountDeletionRequest("  test@example.invalid  ");
  assert.equal(fetch.mock.callCount(), 1);
});

for (const [name, response] of [
  ["server failure with HTTP 200", () => json({ success: false })],
  ["missing acknowledgement", () => json({})],
  ["string instead of boolean", () => json({ success: "true" })],
  ["null response", () => json(null)],
  ["HTTP error despite a success body", () => json({ success: true }, 500)],
  ["SPA fallback with HTTP 200", () => new Response("<html>Company homepage</html>", { headers: { "Content-Type": "text/html" } })],
  ["malformed JSON", () => new Response("{", { headers: { "Content-Type": "application/json" } })],
]) {
  test(`does not confirm submission for ${name}`, async (t) => {
    t.mock.method(globalThis, "fetch", async () => response());
    await assert.rejects(submitAccountDeletionRequest("test@example.invalid"));
  });
}

test("network errors do not confirm submission", async (t) => {
  t.mock.method(globalThis, "fetch", async () => { throw new TypeError("Network unavailable"); });
  await assert.rejects(submitAccountDeletionRequest("test@example.invalid"));
});

test("a stalled request is aborted after 15 seconds", async (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  t.mock.method(globalThis, "fetch", (_url, { signal }) => new Promise((_resolve, reject) => {
    signal.addEventListener("abort", () => reject(signal.reason), { once: true });
  }));
  const rejected = assert.rejects(submitAccountDeletionRequest("test@example.invalid"), { name: "AbortError" });
  t.mock.timers.tick(15_000);
  await rejected;
});

test("empty and oversized identifiers never reach the server", async (t) => {
  const fetch = t.mock.method(globalThis, "fetch", async () => json({ success: true }));
  await assert.rejects(submitAccountDeletionRequest(" "));
  await assert.rejects(submitAccountDeletionRequest("x".repeat(255)));
  assert.equal(fetch.mock.callCount(), 0);
});
