
import { useState, type FormEvent } from "react";

type RequestState = "idle" | "loading" | "success" | "error";

export default function AccountDeletion() {
  const [identifier, setIdentifier] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [state, setState] = useState<RequestState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!confirmed) {
      setMessage("Please confirm your deletion request.");
      setState("error");
      return;
    }

    setState("loading");
    setMessage("");

    try {
      // This endpoint must be implemented by your backend.
      const response = await fetch(
        "/api/account-deletion-requests",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            identifier: identifier.trim(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Request submission failed");
      }

      setState("success");
      setMessage(
        "Your request has been received. Follow the instructions provided to verify your identity."
      );
      setIdentifier("");
      setConfirmed(false);
    } catch {
      setState("error");
      setMessage(
        "We could not submit your request. Please try again or contact our support team."
      );
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="bg-green-50 px-5 py-16 text-center sm:py-20">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-green-700">
          Lion Green Solution
        </p>

        <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
          Delete Your Account
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
          You can request the deletion of your account and
          associated personal data. You do not need to
          reinstall our mobile application to submit a request.
        </p>
      </section>

      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 p-6 shadow-sm sm:p-9">
          <h2 className="text-2xl font-semibold text-gray-900">
            Submit a deletion request
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Enter the email address or phone number registered
            to your account. We will need to verify your
            identity before processing the request.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="account-identifier"
                className="mb-2 block text-sm font-medium"
              >
                Registered email or phone number
              </label>

              <input
                id="account-identifier"
                type="text"
                autoComplete="username"
                required
                maxLength={254}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Enter your registered email or phone"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <label className="flex items-start gap-3 rounded-lg bg-gray-50 p-4 text-sm leading-6">
              <input
                type="checkbox"
                required
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-1 accent-green-700"
              />
              <span>
                I confirm that I want to request account deletion
                and understand that this may permanently remove
                my account and associated data.
              </span>
            </label>

            {message && (
              <p
                role="status"
                aria-live="polite"
                className={`rounded-lg p-4 text-sm ${
                  state === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={state === "loading"}
              className="w-full rounded-lg bg-green-700 px-5 py-3.5 font-semibold text-white hover:bg-green-800 disabled:opacity-60"
            >
              {state === "loading"
                ? "Submitting..."
                : "Request Account Deletion"}
            </button>
          </form>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-900">
              What happens next?
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              We will verify the request, process the deletion
              of eligible account data, and communicate the
              outcome. Any data retained for legal or other
              permitted reasons, and its retention period,
              will be explained in our privacy policy.
            </p>

            <a
              href="/privacy-policy"
              className="mt-3 inline-block text-sm font-medium text-green-700 hover:underline"
            >
              Read our Privacy Policy
            </a>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-gray-500">
          Lion Green Solution · Account and privacy requests
        </p>
      </section>
    </main>
  );
}
