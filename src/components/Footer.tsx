
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
  Leaf,
  Send,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const services = [
    { label: "Solar Energy Systems", to: "/products/solar-systems" },
    { label: "Battery Storage", to: "/products/batteries" },
    { label: "Solar Water Pumps", to: "/products/water-pumps" },
    { label: "Electric Mobility", to: "/mobility" },
    { label: "Solar Consultation", to: "/consultation" },
    { label: "Professional Installation", to: "/installation" },
    { label: "Maintenance Services", to: "/maintenance" },
  ];

  const quickLinks = [
    { label: "About Us", to: "/about" },
    { label: "Blog & Resources", to: "/blog" },
    { label: "Featured Projects", to: "/projects" },
    { label: "Our Partners", to: "/partners" },
    { label: "Careers", to: "/careers" },
    { label: "Contact Us", to: "/contact" },
    { label: "FAQs", to: "/faq" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Service", to: "/terms" },
    { label: "Sitemap", to: "/sitemap" },
    { label: "Delete Account", to: "/delete-account" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://facebook.com/liongreensolutions",
      Icon: Facebook,
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      Icon: Instagram,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/liongreensolutions",
      Icon: Linkedin,
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@liongreensolutions",
      Icon: Youtube,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-emerald-100 bg-gradient-to-br from-white via-emerald-50/80 to-sky-50 text-slate-700">
      {/* Soft decorative accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Company information */}
          <div>
            <Link
              to="/"
              className="mb-5 inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              aria-label="Lion Green Solutions home"
            >
              <img
                src="/Images/Nav/LGS_Nav_icon.png"
                alt="Lion Green Solutions"
                className="h-16 w-auto max-w-[230px] object-contain object-left"
                loading="lazy"
              />
            </Link>

            <p className="mb-3 font-semibold italic text-emerald-800">
              Energy is free!
            </p>

            <p className="mb-6 text-sm leading-7 text-slate-600">
              Empowering Ethiopia with sustainable energy solutions, solar
              power systems, electric mobility, and energy consulting services.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                  <MapPin size={17} />
                </span>
                <p className="pt-1 leading-6 text-slate-600">
                  Akaki-Kality Sub-City, Addis Ababa, Ethiopia
                </p>
              </div>

              <a
                href="tel:+251977404142 "
                className="group flex items-center gap-3 transition-colors hover:text-emerald-800"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                  <Phone size={17} />
                </span>
                <span>+251 977404142 </span>
              </a>

              <a
                href="mailto:lgs@liongreensolution.com"
                className="group flex items-center gap-3 transition-colors hover:text-emerald-800"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                  <Mail size={17} />
                </span>
                <span className="break-all">lgs@liongreensolution.com</span>
              </a>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                  <Clock size={17} />
                </span>
                <p className="pt-1 leading-6 text-slate-600">
                  Monday – Saturday
                  <br />
                  8:30 AM – 5:30 PM
                </p>
              </div>
            </div>
          </div>

          {/* Products and services */}
          <div>
            <h2 className="mb-6 flex items-center gap-3 text-base font-bold text-slate-900 sm:text-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                <Leaf size={20} />
              </span>
              Products & Services
            </h2>

            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.to}>
                  <Link
                    to={service.to}
                    className="group flex items-center gap-2.5 text-sm leading-6 text-slate-600 transition-colors hover:text-emerald-800"
                  >
                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-emerald-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-white/70 p-4">
              <Leaf className="mt-0.5 shrink-0 text-emerald-700" size={22} />
              <div>
                <p className="text-sm font-semibold text-emerald-900">
                  A greener future
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Practical energy solutions for a more sustainable tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="mb-6 flex items-center gap-3 text-base font-bold text-slate-900 sm:text-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-800">
                <ArrowUpRight size={20} />
              </span>
              Quick Links
            </h2>

            <ul className="space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group flex items-center gap-2.5 text-sm leading-6 text-slate-600 transition-colors hover:text-emerald-800"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 transition-transform group-hover:scale-150" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter and social media */}
          <div>
            <h2 className="mb-6 flex items-center gap-3 text-base font-bold text-slate-900 sm:text-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                <Send size={19} />
              </span>
              Stay Connected
            </h2>

            <p className="mb-5 text-sm leading-7 text-slate-600">
              Stay informed about our latest sustainable energy projects,
              solutions, and company updates.
            </p>

            <form
              className="space-y-3"
              onSubmit={(event) => {
                event.preventDefault();
                window.location.href =
                  "mailto:info@liongreen.et?subject=" +
                  encodeURIComponent("Newsletter subscription request");
              }}
            >
              <label htmlFor="footer-email" className="sr-only">
                Your email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Your email address"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-900 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                Subscribe
                <ArrowUpRight size={17} />
              </button>
            </form>

            <p className="mt-3 text-xs leading-5 text-slate-500">
              Contact us by email to request updates.
            </p>

            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold text-slate-800">
                Follow our journey
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-100 bg-white/80 text-emerald-800 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-700 hover:bg-emerald-800 hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep-green bottom bar */}
      <div className="relative bg-gradient-to-r from-emerald-950 via-emerald-900 to-green-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-center text-xs leading-6 text-emerald-100 sm:text-sm lg:text-left">
              © {year} Lion Green Solutions Ethiopia. All rights reserved.
            </p>

            <nav
              aria-label="Legal links"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3"
            >
              {legalLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-xs text-emerald-100 transition-colors hover:text-white hover:underline sm:text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-6 border-t border-white/15 pt-5 text-center">
            <p className="text-xs leading-6 text-emerald-100/80">
              Committed to empowering Ethiopia with sustainable energy
              solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
