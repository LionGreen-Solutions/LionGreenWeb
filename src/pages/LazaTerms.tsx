
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  UserCheck,
  Car,
  ShieldCheck,
  MapPin,
  Smartphone,
  ShoppingBag,
  AlertTriangle,
  Trash2,
  Globe,
  Mail,
  ArrowUp,
  ChevronRight,
} from "lucide-react";

const sections = [
  { id: "about", title: "About This Agreement" },
  { id: "eligibility", title: "Who May Use LAZA" },
  { id: "account", title: "Your Account and Vehicle" },
  { id: "services", title: "What the Service Provides" },
  { id: "safety", title: "Safety and Reliability" },
  { id: "location", title: "Location and Permissions" },
  { id: "acceptable-use", title: "Acceptable Use and App Content" },
  { id: "external-providers", title: "Parts, Services and External Providers" },
  { id: "responsibility", title: "Availability and Responsibility" },
  { id: "deletion", title: "Ending Access and Deleting Your Account" },
  { id: "changes", title: "Changes, Complaints and Applicable Law" },
  { id: "acceptance", title: "Signup Acceptance Wording" },
];

function TermsSection({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-gray-100 py-8"
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

export default function LazaTerms() {
  return (
    <main id="top" className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
            <FileText size={34} />
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Lion Green Solution
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            LAZA Terms & Conditions
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Please read these Terms carefully before using LAZA.
            They explain your responsibilities, the services we provide,
            safety requirements and the conditions governing your use
            of the application.
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

      {/* Main Content */}
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

          {/* Terms Content */}
          <article className="min-w-0">

            {/* Introduction */}
            <div className="mb-8 rounded-xl border border-green-100 bg-green-50/70 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-1 shrink-0 text-green-700"
                  size={22}
                />

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Using LAZA Means Accepting These Terms
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    These Terms explain the agreement between you and
                    Lion Green Solution when you register for or use
                    LAZA and its supported vehicle services.
                  </p>
                </div>
              </div>
            </div>

            <TermsSection
              id="about"
              title="About This Agreement"
              icon={<FileText size={21} />}
            >
              <p>
                These Terms govern your use of the LAZA mobile application
                and its vehicle companion services. The service is operated
                by Lion Green Solution.
              </p>

              <p>
                Contact us at{" "}
                <a
                  href="mailto:Lionhub21@gmail.com"
                  className="font-medium text-green-700 hover:underline"
                >
                  Lionhub21@gmail.com
                </a>
                .
              </p>

              <p>
                Our website:{" "}
                <a
                  href="https://www.liongreensolution.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-green-700 hover:underline"
                >
                  www.liongreensolution.com
                </a>
              </p>

              <p>
                By selecting "I agree" during registration, you accept
                these Terms. If you do not agree, do not complete
                registration.
              </p>

              <p>
                The separate Privacy Policy explains how we handle
                personal information. Acknowledging that policy does
                not grant device permissions or consent to every
                possible use of your data.
              </p>
            </TermsSection>

            <TermsSection
              id="eligibility"
              title="Who May Use LAZA"
              icon={<UserCheck size={21} />}
            >
              <p>
                You must be legally able to enter this agreement.
                You must hold any licence or authorization required
                to operate your vehicle.
              </p>

              <p>
                Account access does not itself authorize you to drive,
                own or manage a vehicle.
              </p>
            </TermsSection>

            <TermsSection
              id="account"
              title="Your Account and Vehicle"
              icon={<Car size={21} />}
            >
              <p>
                Provide accurate registration information and keep it
                current. Protect your phone, account and sign-in details.
                Tell us promptly if you believe someone has accessed
                your account without permission.
              </p>

              <p>
                Do not impersonate another person or use another
                person's account.
              </p>

              <p>
                Connect only vehicles and batteries that you own or
                are authorized to use. Do not use LAZA to monitor
                another person without lawful authority and any
                required notice or consent.
              </p>

              <p>
                If ownership or your authority changes, stop accessing
                the vehicle and contact support to update its
                registration or association.
              </p>
            </TermsSection>

            <TermsSection
              id="services"
              title="What the Service Provides"
              icon={<Smartphone size={21} />}
            >
              <p>
                LAZA provides supported vehicle and battery information,
                trip and distance features, maps, route planning, battery
                warnings, charging assistance, manuals, spare-parts
                information and support.
              </p>

              <p>
                Availability depends on your account, vehicle, compatible
                battery management system (BMS), device, connectivity
                and permissions.
              </p>

              <p>
                Features can differ between devices and operating systems.
              </p>
            </TermsSection>

            <TermsSection
              id="safety"
              title="Safety and Reliability"
              icon={<AlertTriangle size={21} />}
            >
              <p>
                Do not interact with the app while driving. Stop in a
                safe place before using your phone.
              </p>

              <p>
                Follow traffic laws, road conditions and the vehicle
                manufacturer's operating, charging and maintenance
                instructions. Do not attempt repairs beyond your training
                or ignore a vehicle warning because the app shows a
                different reading.
              </p>

              <p>
                Battery charge, temperature, remaining range, distance,
                route and charging-time information can be delayed,
                incomplete or inaccurate. Estimates are not guarantees
                of range, road suitability, battery condition or safe
                operation.
              </p>

              <p>
                Bluetooth, GPS, network availability and phone
                restrictions can interrupt readings and alerts.
              </p>

              <p>
                LAZA is not an emergency service or a substitute for
                inspection, maintenance or professional assistance.
              </p>

              <p>
                A charging alarm or notification does not control the
                charger or guarantee that charging stops. Check the
                vehicle and charger directly and follow manufacturer
                safety guidance.
              </p>
            </TermsSection>

            <TermsSection
              id="location"
              title="Location and Permissions"
              icon={<MapPin size={21} />}
            >
              <p>
                Location, Bluetooth, camera and notification permissions
                are requested separately. You can change them in your
                phone settings; dependent features may stop working.
              </p>

              <p>
                The Privacy Policy describes background collection,
                uploads and administrator access.
              </p>

              <p>
                You can pause or end a personal trip from Home.
              </p>

              <p>
                Separately, after vehicle tracking is enabled, a
                connected BMS can trigger collection for your linked
                registered vehicle.
              </p>

              <p>
                Ending a personal trip does not stop that separate
                vehicle collection. It stops after a 45-second BMS
                disconnection or when location access is revoked.
              </p>

              <p>
                With background permission, collection can continue
                while the app is not in use, subject to device restrictions.
              </p>
            </TermsSection>

            <TermsSection
              id="acceptable-use"
              title="Acceptable Use and App Content"
              icon={<ShieldCheck size={21} />}
            >
              <p>
                We give you a limited, non-exclusive right to use the
                app for its intended purposes while you comply with
                these Terms.
              </p>

              <p>
                The app, its branding and its content remain owned by
                their respective owners. You may use manuals and
                information for legitimate vehicle use and maintenance,
                subject to applicable rights.
              </p>

              <p>
                Do not access other users' information without authority,
                bypass security controls, interfere with the service,
                submit fraudulent records, upload unlawful material
                or use the service for harassment or unauthorized
                surveillance.
              </p>

              <p>
                These restrictions do not remove rights that applicable
                law gives you.
              </p>

              <p>
                You retain your rights in a profile photo or other
                material you provide. You authorize us to store and
                display it only as needed to provide the relevant
                feature, as described in the Privacy Policy.
              </p>

              <p>
                Only provide content you have the right to use.
              </p>
            </TermsSection>

            <TermsSection
              id="external-providers"
              title="Parts, Services and External Providers"
              icon={<ShoppingBag size={21} />}
            >
              <p>
                Catalogue information is subject to confirmation of
                price, availability, compatibility and any applicable
                tax or delivery charge.
              </p>

              <p>
                Browsing a listing does not itself complete a purchase.
                Any separate purchase or service agreement must identify
                the seller, price, payment, delivery, cancellation,
                returns and warranty terms before you commit.
              </p>

              <p>
                Your mandatory consumer rights remain unaffected.
              </p>

              <p>
                Maps, external navigation and support or social links
                may use third-party services. Their own terms and
                privacy notices apply to their services.
              </p>

              <p>
                We remain responsible for our own obligations and for
                our handling of your information.
              </p>
            </TermsSection>

            <TermsSection
              id="responsibility"
              title="Availability and Responsibility"
              icon={<ShieldCheck size={21} />}
            >
              <p>
                We take reasonable care in providing LAZA but cannot
                promise uninterrupted access or error-free sensor,
                map or network information.
              </p>

              <p>
                Maintenance, outages and compatibility changes may
                affect availability. We will give reasonable notice
                of significant service changes where practicable.
              </p>

              <p>
                Nothing in these Terms excludes liability, warranties
                or remedies that cannot lawfully be excluded,
                including mandatory consumer rights.
              </p>

              <p>
                Our responsibility for loss caused by a breach of
                our obligations is determined by applicable law.
                You remain responsible for safe vehicle operation
                and your own unlawful or unauthorized use of the app.
              </p>
            </TermsSection>

            <TermsSection
              id="deletion"
              title="Ending Access and Deleting Your Account"
              icon={<Trash2 size={21} />}
            >
              <p>
                You may stop using LAZA at any time.
              </p>

              <p>
                Request account and associated-data deletion through
                the deletion instructions linked from Profile, or
                email{" "}
                <a
                  href="mailto:Lionhub21@gmail.com?subject=LAZA%20account%20deletion"
                  className="font-medium text-green-700 hover:underline"
                >
                  Lionhub21@gmail.com
                </a>
                .
              </p>

              <p>
                Opening an email draft does not send the request or
                delete the account. Signing out or uninstalling does
                not delete cloud records.
              </p>

              <p>
                The Privacy Policy explains verification, retained
                records and local copies.
              </p>

              <Link
                to="/account-deletion"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
              >
                Request Account Deletion
                <ChevronRight size={17} />
              </Link>
            </TermsSection>

            <TermsSection
              id="changes"
              title="Changes, Complaints and Applicable Law"
              icon={<Globe size={21} />}
            >
              <p>
                We will identify updated Terms by their effective date
                and notify you of material changes.
              </p>

              <p>
                Where required, we will ask you to accept revised
                Terms before continuing the affected service.
                Changes will not remove rights that already arose.
              </p>

              <p>
                These Terms are subject to mandatory protections
                that apply to you.
              </p>

              <p>
                Contact{" "}
                <a
                  href="mailto:Lionhub21@gmail.com"
                  className="font-medium text-green-700 hover:underline"
                >
                  Lionhub21@gmail.com
                </a>{" "}
                with complaints.
              </p>

              <p>
                You may bring a dispute before a competent court
                or authority under applicable law; these Terms do
                not impose mandatory arbitration or waive
                non-waivable rights.
              </p>
            </TermsSection>

            {/* Acceptance wording */}
            <TermsSection
              id="acceptance"
              title="Signup Acceptance Wording"
              icon={<UserCheck size={21} />}
            >
              <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                <p className="font-medium leading-7 text-gray-800">
                  I agree to the LAZA Terms and Conditions and
                  acknowledge that I have read the Privacy Policy.
                  I understand that device permissions and any
                  additional consent are requested separately.
                </p>
              </div>

              <p className="text-sm text-gray-500">
                Suggested registration button label:
              </p>

              <div className="inline-flex rounded-lg bg-green-700 px-6 py-3 font-semibold text-white">
                I agree and continue
              </div>
            </TermsSection>

            {/* Contact */}
            <div className="mt-12 rounded-2xl bg-green-50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900">
                Need Help?
              </h2>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                If you have questions about these Terms or your
                use of LAZA, contact Lion Green Solution.
              </p>

              <a
                href="mailto:Lionhub21@gmail.com"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-green-800 hover:underline"
              >
                <Mail size={18} />
                Lionhub21@gmail.com
              </a>
            </div>

            {/* Related Pages */}
            <div className="mt-10 flex flex-wrap gap-5 border-t border-gray-200 pt-7 text-sm">
              <Link
                to="/laza-privacy-policy"
                className="font-medium text-green-700 hover:underline"
              >
                Privacy Policy
              </Link>

              <Link
                to="/account-deletion"
                className="font-medium text-green-700 hover:underline"
              >
                Account Deletion
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

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Lion Green Solution. All rights reserved.
          </p>

          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:underline"
          >
            Back to top
            <ArrowUp size={16} />
          </a>

        </div>
      </footer>

    </main>
  );
}
