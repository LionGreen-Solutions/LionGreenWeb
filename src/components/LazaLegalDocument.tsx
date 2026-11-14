import { Link, useSearchParams } from "react-router-dom";
import { ArrowUp, FileText, Lock, Mail, MapPin, Settings, ShieldCheck, User } from "lucide-react";
import { LEGAL_COPY, LEGAL_SECTIONS } from "@/content/laza/legal-content";
import { LEGAL_URLS, PRIVACY_EMAIL, privacyEmailUrl } from "@/content/laza/legal-contact";
import { PRIVACY_COPY, PRIVACY_SECTIONS } from "@/content/laza/privacy-content";
import { RETENTION_COPY } from "@/content/laza/retention-content";
import type { Language } from "@/content/laza/types";

const icons = {
  "person-outline": User,
  "location-outline": MapPin,
  "shield-checkmark-outline": ShieldCheck,
  "lock-closed-outline": Lock,
  "options-outline": Settings,
};

const labels = {
  en: { contents: "On this page", language: "Language", deletion: "Request account deletion", home: "LionGreenSolutions website", top: "Back to top" },
  am: { contents: "በዚህ ገጽ", language: "ቋንቋ", deletion: "የመለያ ስረዛ ጥያቄ", home: "የLionGreenSolutions ድረ ገጽ", top: "ወደ ላይ ተመለስ" },
};

export default function LazaLegalDocument({ document }: { document: "terms" | "privacy" }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const language: Language = searchParams.get("lang") === "am" ? "am" : "en";
  const terms = LEGAL_COPY[language];
  const privacy = PRIVACY_COPY[language];
  const retention = RETENTION_COPY[language];
  const ui = labels[language];
  const isPrivacy = document === "privacy";
  const copy = isPrivacy ? privacy : terms;
  const sections = isPrivacy ? PRIVACY_SECTIONS[language] : LEGAL_SECTIONS[language];
  const HeroIcon = isPrivacy ? ShieldCheck : FileText;
  const legalPath = (name: keyof typeof LEGAL_URLS) => `${new URL(LEGAL_URLS[name]).pathname}?lang=${language}`;

  const selectLanguage = (next: Language) => {
    const params = new URLSearchParams(searchParams);
    params.set("lang", next);
    setSearchParams(params, { replace: true });
  };

  return (
    <main id="top" lang={language} className="min-h-screen bg-white text-gray-800">
      <section className="bg-gradient-to-br from-green-50 to-white px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Link to="/" className="text-sm font-bold tracking-wide text-green-700 hover:underline">
            {terms.company}
          </Link>
          <div className="mx-auto mb-5 mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
            <HeroIcon size={34} aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            {terms.brand} {copy.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl break-words text-base leading-8 text-gray-600">
            {copy.introduction}
          </p>
          <p className="mt-4 text-sm leading-6 text-gray-600">{privacy.updated}</p>
          <div role="group" aria-label={ui.language} className="mt-7 inline-flex gap-1 rounded-xl border border-green-200 bg-white p-1">
            {(["en", "am"] as const).map((option) => (
              <button
                key={option}
                type="button"
                lang={option}
                aria-pressed={language === option}
                onClick={() => selectLanguage(option)}
                className={`min-h-11 rounded-lg px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 ${language === option ? "bg-green-700 text-white" : "text-green-800 hover:bg-green-50"}`}
              >
                {option === "en" ? "English" : "አማርኛ"}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 sm:pb-16">
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[250px_1fr] lg:gap-12">
          <aside className="rounded-2xl border border-gray-200 bg-gray-50 p-5 lg:sticky lg:top-8">
            <h2 className="mb-4 text-sm font-bold text-gray-900">{ui.contents}</h2>
            <nav aria-label={ui.contents} className="space-y-1">
              {sections.map((section, index) => (
                <a key={section.title} href={`#section-${index}`} className="flex items-start gap-2 rounded-lg px-3 py-2 text-sm leading-6 text-gray-600 hover:bg-green-50 hover:text-green-800">
                  <span aria-hidden="true" className="text-gray-400">{String(index + 1).padStart(2, "0")}</span>
                  <span>{section.title}</span>
                </a>
              ))}
              {isPrivacy && <a href="#retention" className="block rounded-lg px-3 py-2 text-sm leading-6 text-gray-600 hover:bg-green-50 hover:text-green-800">{retention.title}</a>}
            </nav>
          </aside>

          <article className="min-w-0">
            {sections.map((section, index) => {
              const Icon = icons[section.icon];
              return (
                <section key={section.title} id={`section-${index}`} className="scroll-mt-8 border-b border-gray-100 py-7 first:pt-0">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700"><Icon size={21} aria-hidden="true" /></span>
                    <h2 className="text-xl font-bold leading-snug text-gray-900 sm:text-2xl">{section.title}</h2>
                  </div>
                  <p className="break-words text-base leading-8 text-gray-600">{section.body}</p>
                </section>
              );
            })}

            {isPrivacy && (
              <section id="retention" className="scroll-mt-8 py-8">
                <h2 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl">{retention.title}</h2>
                <table className="w-full table-fixed border-collapse text-left text-sm leading-6">
                  <caption className="sr-only">{retention.title}</caption>
                  <thead className="bg-green-50 text-green-900">
                    <tr>
                      <th scope="col" className="w-1/2 border border-gray-200 p-3 sm:p-4">{retention.data}</th>
                      <th scope="col" className="border border-gray-200 p-3 sm:p-4">{retention.duration}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {retention.rows.map(([data, duration]) => (
                      <tr key={data}>
                        <th scope="row" className="break-words border border-gray-200 p-3 align-top font-medium text-gray-800 sm:p-4">{data}</th>
                        <td className="break-words border border-gray-200 p-3 align-top text-gray-600 sm:p-4">{duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}

            <div className="mt-8 rounded-2xl bg-green-50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900">{terms.support}</h2>
              <a href={privacyEmailUrl(isPrivacy ? "LAZA privacy request" : "LAZA support request")} className="mt-4 inline-flex max-w-full items-center gap-2 font-semibold text-green-800 hover:underline">
                <Mail size={18} className="shrink-0" aria-hidden="true" />
                <span className="break-all">{PRIVACY_EMAIL}</span>
              </a>
            </div>

            <nav aria-label={language === "en" ? "Related legal pages" : "ተዛማጅ ገጾች"} className="mt-8 flex flex-wrap gap-5 border-t border-gray-200 pt-6 text-sm">
              <Link to={legalPath(isPrivacy ? "terms" : "privacy")} className="font-medium text-green-700 hover:underline">{isPrivacy ? terms.title : privacy.title}</Link>
              <Link to={legalPath("delete-account")} className="font-medium text-green-700 hover:underline">{ui.deletion}</Link>
              <Link to="/" className="font-medium text-green-700 hover:underline">{ui.home}</Link>
            </nav>
          </article>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-gray-50 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} {terms.company}</p>
          <a href="#top" className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:underline">{ui.top}<ArrowUp size={16} aria-hidden="true" /></a>
        </div>
      </footer>
    </main>
  );
}
