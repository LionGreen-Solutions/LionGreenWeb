/** A server acknowledgement confirms submission, not mailbox delivery or deletion. */
export async function submitAccountDeletionRequest(identifier: string): Promise<void> {
  const accountIdentifier = identifier.trim();
  if (!accountIdentifier || accountIdentifier.length > 254) {
    throw new Error("Enter your registered email or phone number.");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  try {
    const response = await fetch("/api/account-deletion.php", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ identifier: accountIdentifier }),
      signal: controller.signal,
    });
    if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
      throw new Error("Request submission was not confirmed.");
    }
    const result: unknown = await response.json();
    if (!result || typeof result !== "object" || !("success" in result) || result.success !== true) {
      throw new Error("Request submission was not confirmed.");
    }
  } finally {
    clearTimeout(timeout);
  }
}
