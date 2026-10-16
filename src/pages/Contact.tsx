
import { useState, type FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MAP_URL = "https://maps.app.goo.gl/f6VmVtffZAv2tADA6";
const EMAIL = "lgs@liongreensolution.com";
const PHONE = "+251 977404142";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [notice, setNotice] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setNotice("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `${form.subject} - Lion Green Solution`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone || "Not provided"}\n\n` +
        `Message:\n${form.message}`
    );

    setNotice("Your email application is opening. Please send your message there.");
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const contactItems = [
    {
      icon: MapPin,
      title: "Our Office",
      detail: "Akaki-Kality Sub-City, Addis Ababa, Ethiopia",
      href: MAP_URL,
      action: "Get directions",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: PHONE,
      href: `tel:${PHONE.replace(/\s/g, "")}`,
      action: "Call us",
    },
    {
      icon: Mail,
      title: "Email",
      detail: EMAIL,
      href: `mailto:${EMAIL}`,
      action: "Send an email",
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Monday–Saturday, 8:30 AM–5:30 PM",
      href: null,
      action: "Sunday: Closed",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <main>
        {/* Page heading */}
        <section className="border-b border-slate-100 bg-white">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Contact Us
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Let's talk about your project
            </h1>

            <p className="mt-3 max-w-2xl leading-7 text-slate-500">
              Have a question about solar energy, electric mobility, or our
              products? Our team is ready to help.
            </p>
          </div>
        </section>

        {/* Contact details */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-10 md:py-14">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0">
                      <h2 className="font-semibold text-slate-800">
                        {item.title}
                      </h2>

                      <p className="mt-1 break-words text-sm leading-6 text-slate-500">
                        {item.detail}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href === MAP_URL ? "_blank" : undefined
                          }
                          rel={
                            item.href === MAP_URL ? "noreferrer" : undefined
                          }
                          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700"
                        >
                          {item.action}
                          <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <p className="mt-2 text-sm text-slate-500">
                          {item.action}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact form and map */}
        <section className="border-t border-slate-100 bg-slate-50/60">
          <div className="container mx-auto grid gap-10 px-4 py-12 md:py-16 lg:grid-cols-2 lg:gap-14">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Send us a message
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Tell us what you need, and we'll help you find the right
                solution.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-7"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Email address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+251 ..."
                      autoComplete="tel"
                      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                    >
                      <option>General Inquiry</option>
                      <option>Solar Installation</option>
                      <option>Electric Mobility</option>
                      <option>Product Support</option>
                      <option>Partnership Opportunity</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="How can we help you?"
                    required
                    className="w-full resize-y rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
                  />
                </div>

                {notice && (
                  <p role="status" className="text-sm leading-6 text-emerald-700">
                    {notice}
                  </p>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Send an inquiry
                  <Send size={16} />
                </button>

                <p className="text-xs leading-5 text-slate-400">
                  Your email application opens with the message prepared. You
                  must send it from there.
                </p>
              </form>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Find our office
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Visit us in Addis Ababa or open our shared location for
                directions.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                <iframe
                  title="Lion Green Solution location"
                  src="https://maps.google.com/maps?q=Bole%20Sub-City%2C%20Addis%20Ababa%2C%20Ethiopia&z=13&output=embed"
                  width="100%"
                  height="340"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full border-0"
                />

                <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-slate-800">
                      Lion Green Solution
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>

                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                  >
                    Get directions <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
                <Clock size={19} className="mt-0.5 shrink-0 text-emerald-700" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Planning a visit?
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Contact us during working hours so we can help arrange your
                    visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
