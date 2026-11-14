
import { useState, type FormEvent } from "react";
import { ACCOUNT_DELETION_COPY } from "@/content/laza/account-deletion-content";

type RequestState = "idle" | "loading" | "success" | "error";

export default function AccountDeletion() {
  const deletion = ACCOUNT_DELETION_COPY.en;
  const [identifier, setIdentifier] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [state, setState] = useState<RequestState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const accountIdentifier = identifier.trim();

    if (!accountIdentifier) {
      setState("error");
      setMessage("Please enter your registered email or phone number.");
      return;
    }

    if (!confirmed) {
      setState("error");
      setMessage("Please confirm your deletion request.");
      return;
    }

    setState("loading");
    setMessage("");

    try {
      const response = await fetch(
        "/api/account-deletion.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: accountIdentifier,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Request submission failed");
      }

      setState("success");
      setMessage(
        `Your request has been submitted. Please follow the identity verification instructions provided by our support team. ${deletion.completion}`
      );

      setIdentifier("");
      setConfirmed(false);
    } catch {
      setState("error");
      setMessage(
        "We could not submit your request. Please try again later or contact our support team."
      );
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-green-50 px-5 py-16 text-center sm:py-20">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-green-700">
          LionGreenSolutions
        </p>

        <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
          Delete Your LAZA Account
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
          You have the right to request the deletion of your
          LAZA account and associated personal data. You can
          submit a deletion request directly from this page
          without reinstalling or accessing the mobile application.
        </p>
      </section>

      {/* Main Content */}
      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 p-6 shadow-sm sm:p-9">

          <h2 className="text-2xl font-semibold text-gray-900">
            Submit an Account Deletion Request
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Enter the email address or phone number associated
            with your LAZA account. We will verify your identity
            before processing your request.
          </p>

          <p className="mt-3 text-sm font-medium leading-6 text-gray-700">
            {deletion.completion}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">

            <div>
              <label
                htmlFor="account-identifier"
                className="mb-2 block text-sm font-medium"
              >
                Registered Email or Phone Number
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
                I confirm that I am requesting the deletion
                of my LAZA account and understand that this
                action may permanently remove my account and
                associated personal data.
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
              className="w-full rounded-lg bg-green-700 px-5 py-3.5 font-semibold text-white hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state === "loading"
                ? "Submitting Request..."
                : "Request Account Deletion"}
            </button>

          </form>

          {/* What happens next */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-900">
              {deletion.processTitle}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {deletion.process}
            </p>
          </div>

          {/* Data Information */}
          <div className="mt-6 rounded-lg bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              {deletion.retentionTitle}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {deletion.retention}
            </p>
          </div>

          {/* Legal Links */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-900">
              Legal Information
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href="/laza-privacy-policy"
                className="font-medium text-green-700 hover:underline"
              >
                Read LAZA Privacy Policy →
              </a>

              <a
                href="/laza-terms"
                className="font-medium text-green-700 hover:underline"
              >
                Read LAZA Terms & Conditions →
              </a>
            </div>
          </div>

        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-gray-500">
          LionGreenSolutions · LAZA Account and Privacy Requests
        </p>

      </section>
    </main>
  );
}
