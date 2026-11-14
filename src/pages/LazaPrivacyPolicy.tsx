
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  User,
  MapPin,
  Database,
  Clock,
  Camera,
  Globe,
  Lock,
  ChevronRight,
  Trash2,
  Mail,
  ArrowUp,
} from "lucide-react";

const sections = [
  { id: "who-we-are", title: "Who Handles Your Information" },
  { id: "account-vehicle", title: "Account and Vehicle Information" },
  { id: "photos-support", title: "Photos, Support and Local Information" },
  { id: "why-process", title: "Why We Process Information" },
  { id: "location", title: "Precise Location and Background Collection" },
  { id: "permissions", title: "Camera, Bluetooth and Notifications" },
  { id: "cloud-storage", title: "Company Access and Cloud Storage" },
  { id: "external-services", title: "Maps and Other External Services" },
  { id: "retention", title: "How Long Trip and Battery History Stays" },
  { id: "device-copies", title: "Other Records and Device Copies" },
  { id: "security", title: "Security and International Processing" },
  { id: "rights", title: "Your Choices and Privacy Rights" },
  { id: "deletion", title: "Requesting Account and Data Deletion" },
  { id: "age-changes", title: "Age Eligibility and Policy Changes" },
];

const retentionPeriods = [
  {
    period: "7 Days",
    description:
      "Stored battery measurements, battery QR/scan/connection events and raw GPS points from personal trips you start are eligible for automatic deletion seven days after their observation time.",
  },
  {
    period: "30 Days",
    description:
      "Range-analysis records are retained for 30 days after the end of the measured period.",
  },
  {
    period: "90 Days",
    description:
      "Daily distance records cover the current day and the previous 89 days in the recorded local time zone. Completed trip summaries are eligible for deletion 90 days after their last observed update. They remain longer while linked to other retained records or the latest vehicle status. Active trips are preserved.",
  },
  {
    period: "24 Hours",
    description:
      "Server upload receipts and intermediate trip snapshots are eligible for deletion 24 hours after receipt. These are separate from pending uploads on your phone. Cleanup normally runs every five minutes; outages or a backlog can delay deletion.",
  },
];

export default function LazaPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
            <ShieldCheck size={34} />
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Lion Green Solution
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            LAZA Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Your privacy matters to us. Learn how LAZA collects, uses,
            stores and protects your personal information when you use
            our mobile application and related services.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-800">
              LAZA Mobile Application
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600">
              Lion Green Solution
            </span>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[270px_1fr]">

          {/* Table of Contents */}
          <aside className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-5 lg:sticky lg:top-24">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              On This Page
            </h2>

            <nav className="space-y-1">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-start gap-2 rounded-lg px-3 py-2 text-sm leading-5 text-gray-600 transition hover:bg-green-50 hover:text-green-800"
                >
                  <span className="text-xs text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{section.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Policy */}
          <article className="min-w-0">

            <div className="mb-8 rounded-xl border border-green-100 bg-green-50/70 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 shrink-0 text-green-700" size={22} />
                <div>
                  <h2 className="font-semibold text-gray-900">
                    Your Privacy, Your Choice
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    This policy explains what information LAZA handles,
                    why it is needed, how long it is retained and how
                    you can exercise your privacy rights.
                  </p>
                </div>
              </div>
            </div>

            <PolicySection id="who-we-are" title="Who Handles Your Information" icon={<User size={21} />}>
              <p>
                Lion Green Solution operates LAZA and is responsible for
                the personal information described in this policy.
              </p>
              <p>
                Contact: <a className="font-medium text-green-700 hover:underline" href="mailto:Lionhub21@gmail.com">Lionhub21@gmail.com</a>
                <br />
                Company website: <a className="font-medium text-green-700 hover:underline" href="https://www.liongreensolution.com/" target="_blank" rel="noreferrer">www.liongreensolution.com</a>
              </p>
              <p>
                This policy covers the LAZA mobile app, its supporting
                cloud services, related administrator access and support
                communications. It explains what we collect, why we use
                it, who receives it, how long it stays and your choices.
                Independent external services have their own privacy notices.
              </p>
            </PolicySection>

            <PolicySection id="account-vehicle" title="Account and Vehicle Information" icon={<User size={21} />}>
              <p>
                We use your full name, phone number, city or area, account
                identifier and sign-in information to create, authenticate
                and secure your account. Email is used for accounts that
                sign in or recover access by email. We record the terms
                version accepted during customer onboarding.
              </p>
              <p>
                Vehicle identifiers, ownership records, purchase and
                warranty information help us link your vehicle and provide
                vehicle services.
              </p>
              <p>
                Battery identifiers and supported readings, including
                charge level, voltage, current, temperature, faults and
                timestamps, support battery history, warnings, diagnostics
                and range estimates.
              </p>
            </PolicySection>

            <PolicySection id="photos-support" title="Photos, Support and Local Information" icon={<Camera size={21} />}>
              <p>
                You can optionally choose a profile photo after signing in.
                The selected photo is uploaded to private Supabase storage
                linked to your account and displayed in Profile. It is not
                publicly listed or shown to other customers. You can
                replace or remove it from Profile.
              </p>
              <p>
                Administrator-uploaded product images are visible to
                spare-parts catalogue users.
              </p>
              <p>
                Support receives the information you choose to send, such
                as your contact details, question and attachments.
              </p>
              <p>
                Your phone stores sign-in sessions, preferences and cached
                or pending trip and battery records. Service providers also
                receive network information needed to handle requests,
                such as your IP address.
              </p>
            </PolicySection>

            <PolicySection id="why-process" title="Why We Process Information" icon={<ShieldCheck size={21} />}>
              <p>
                We use the information to provide requested account and
                vehicle features, display maps and trips, calculate
                distance and range estimates, deliver supported warnings,
                respond to support requests and protect service reliability.
              </p>
              <p>
                Permissions and any consent required for optional or new
                uses are handled separately.
              </p>
            </PolicySection>

            <PolicySection id="location" title="Precise Location and Background Collection" icon={<MapPin size={21} />}>
              <p>
                With location permission, LAZA uses precise location for
                maps, route planning and trip distance. During a personal
                trip you start, it records location points, times,
                distance and available battery readings.
              </p>
              <p>
                With the necessary background permission, this can
                continue when the screen is locked or another app is open.
                You can pause or end that personal trip from Home.
              </p>
              <p>
                For a linked registered vehicle, location and distance
                collection can start automatically after you enable vehicle
                tracking and its battery BMS connects.
              </p>
              <p>
                Foreground permission permits collection while the app is
                visible; background permission permits it to continue while
                the app is not in use. Phone and operating-system
                restrictions can interrupt collection.
              </p>
              <p>
                Ending a personal trip does not stop this separate vehicle
                collection. Vehicle collection stops after a 45-second BMS
                disconnection or when location access is revoked.
              </p>
              <p>
                Turning off location permission in your phone settings
                stops access to new location information. It does not
                automatically delete records already collected.
              </p>
              <p>
                Collected records may be saved on your phone while offline
                and uploaded to our cloud services when connectivity
                returns. Location, distance and battery information
                support trip history, vehicle administration and range
                analysis. Authorized company administrators can access
                these records as described below.
              </p>
            </PolicySection>

            <PolicySection id="permissions" title="Camera, Bluetooth and Notifications" icon={<Camera size={21} />}>
              <p>
                Camera permission lets you scan a battery QR code.
                Bluetooth access connects to compatible batteries.
                Battery warning notifications are generated on your device.
              </p>
              <p>
                Selecting a profile photo is optional. Device permissions
                are requested separately from accepting the Terms, and you
                can change them in phone settings.
              </p>
              <p>
                Features that depend on a denied or withdrawn permission
                may stop working.
              </p>
            </PolicySection>

            <PolicySection id="cloud-storage" title="Company Access and Cloud Storage" icon={<Database size={21} />}>
              <p>
                Supabase provides authentication, database storage and
                uploaded-image storage.
              </p>
              <p>
                Authorized Lion Green Solution administrators can access
                customer, vehicle, location, trip and battery records for
                support and vehicle administration. Access controls
                restrict cloud records by account and administrator role.
              </p>
              <p>
                Information may also be disclosed where required by law,
                or as legally permitted and necessary to protect users,
                enforce our rights or address security incidents. Any such
                disclosure must have an appropriate legal basis and be
                limited to the relevant purpose.
              </p>
            </PolicySection>

            <PolicySection id="external-services" title="Maps and Other External Services" icon={<Globe size={21} />}>
              <p>
                Map and satellite views request tiles from OpenStreetMap
                and Esri. Place searches use Nominatim and Komoot Photon.
              </p>
              <p>
                Photon receives your search and current coordinates to
                suggest nearby results. Route calculations send origin
                and destination coordinates to the OSRM routing service.
              </p>
              <p>
                Choosing external navigation sends those coordinates to
                Google Maps. Map pages also load Leaflet resources from
                unpkg.
              </p>
              <p>
                These providers receive network information such as your
                IP address and the requested map area or search.
                Opening Telegram support or social links takes you to
                services that handle information under their own policies.
              </p>
            </PolicySection>

            <PolicySection id="retention" title="How Long Trip and Battery History Stays" icon={<Clock size={21} />}>
              <p>
                Different categories of trip and battery information have
                different retention periods:
              </p>

              <div className="mt-5 space-y-4">
                {retentionPeriods.map((item) => (
                  <div
                    key={item.period}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-5"
                  >
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-800">
                      {item.period}
                    </span>
                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </PolicySection>

            <PolicySection id="device-copies" title="Other Records and Device Copies" icon={<Database size={21} />}>
              <p>
                These history limits do not automatically delete your
                account, profile, vehicle registration, support records
                or all operational logs.
              </p>
              <p>
                Latest battery and vehicle status remain until replaced
                or their account or vehicle is deleted. Profile photos
                have no automatic expiry; you can replace or remove yours
                from Profile or request deletion with your account.
              </p>
              <p>
                Pending uploads remain on your phone until they can be
                sent; server retention rules apply on arrival. Confirmed
                upload-queue history is eligible for local cleanup after
                24 hours, while other cached records may remain.
              </p>
              <p>
                Signing out or uninstalling does not delete cloud records.
                Clearing app storage or uninstalling removes local app
                data, including unsent records; copies in device backups
                or on other devices may remain.
              </p>
            </PolicySection>

            <PolicySection id="security" title="Security and International Processing" icon={<Lock size={21} />}>
              <p>
                Network requests use HTTPS, and account and role-based
                controls restrict access to cloud records. Protect access
                to your phone and sign-in details. No storage or
                transmission method is completely secure.
              </p>
              <p>
                Our providers may process information outside your country.
                Contact{" "}
                <a className="font-medium text-green-700 hover:underline" href="mailto:Lionhub21@gmail.com">
                  Lionhub21@gmail.com
                </a>{" "}
                for information about these arrangements.
              </p>
            </PolicySection>

            <PolicySection id="rights" title="Your Choices and Privacy Rights" icon={<ShieldCheck size={21} />}>
              <p>
                You can edit your name and phone number in Profile and
                replace or remove your profile photo. You can pause or
                end personal trips from Home and manage permissions in
                your phone settings.
              </p>
              <p>
                Withdrawing permission affects future collection, not
                the lawfulness of processing already completed.
              </p>
              <p>
                Depending on applicable law, you may request access,
                correction, deletion, restriction, objection or a copy
                of your information, and withdraw consent where
                processing relies on consent.
              </p>
              <p>
                Contact{" "}
                <a className="font-medium text-green-700 hover:underline" href="mailto:Lionhub21@gmail.com">
                  Lionhub21@gmail.com
                </a>{" "}
                to make a request or raise a concern. You may also
                complain to the competent data-protection authority
                where applicable.
              </p>
            </PolicySection>

            <PolicySection id="deletion" title="Requesting Account and Data Deletion" icon={<Trash2 size={21} />}>
              <p>
                Open the account-deletion instructions linked from
                Profile, or email{" "}
                <a className="font-medium text-green-700 hover:underline" href="mailto:Lionhub21@gmail.com">
                  Lionhub21@gmail.com
                </a>{" "}
                with the subject <strong>LAZA account deletion</strong>.
              </p>
              <p>
                Identify the account using your registered contact
                details and explain whether you want account and
                associated-data deletion or another request.
              </p>
              <p>
                You can email us without reinstalling or signing in to
                LAZA.
              </p>
              <p>
                The in-app action prepares an email; you must send it
                to submit the request. It does not automatically delete
                data. We may verify account ownership before acting.
                Never send passwords or sign-in codes.
              </p>
              <p>
                Deletion covers associated personal information,
                including uploaded profile photos, except records that
                must or may lawfully be retained for a specific reason.
              </p>
              <p>
                We will explain any applicable retention or restriction
                and respond within the period required by applicable law.
                Signing out or uninstalling alone is not a deletion
                request. Local copies and backups require the handling
                described above.
              </p>

              <Link
                to="/account-deletion"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
              >
                Request Account Deletion
                <ChevronRight size={17} />
              </Link>
            </PolicySection>

            <PolicySection id="age-changes" title="Age Eligibility and Policy Changes" icon={<ShieldCheck size={21} />}>
              <p>
                LAZA is intended for users who meet the eligibility
                requirements in the Terms. Contact us if you believe
                an ineligible child's information has been provided.
              </p>
              <p>
                We will update this policy when our practices change,
                identify the effective date and provide additional
                notice or seek consent where required.
              </p>
              <p>
                Accepting the Terms or acknowledging this policy does
                not replace separate permission or consent for
                background location or other uses that require it.
              </p>
            </PolicySection>

            {/* Contact */}
            <div className="mt-12 rounded-2xl bg-green-50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900">
                Questions About Your Privacy?
              </h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                If you have questions about this Privacy Policy or how
                LAZA handles your information, contact our team.
              </p>
              <a
                href="mailto:Lionhub21@gmail.com"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-green-800 hover:underline"
              >
                <Mail size={18} />
                Lionhub21@gmail.com
              </a>
            </div>

            {/* Footer links */}
            <div className="mt-10 flex flex-wrap gap-5 border-t border-gray-200 pt-7 text-sm">
              <Link
                to="/account-deletion"
                className="font-medium text-green-700 hover:underline"
              >
                Account Deletion
              </Link>
              <Link
                to="/laza-terms"
                className="font-medium text-green-700 hover:underline"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/"
                className="font-medium text-green-700 hover:underline"
              >
                Lion Green Solution Website
              </Link>
            </div>

          </article>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Lion Green Solution. All rights reserved.
          </p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:underline"
          >
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </footer>

    </main>
  );
}

function PolicySection({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-gray-100 py-8 first:pt-0"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
          {icon}
        </div>
        <h2 className="text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
          {title}
        </h2>
      </div>

      <div className="space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
        {children}
      </div>
    </section>
  );
}
