
import { useState } from "react";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect this form to your newsletter service or backend
    console.log("Newsletter email:", email);
  };

  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-green-50 px-6 py-12 sm:px-10 md:py-16 lg:px-16">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-green-100/70" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-emerald-100/50 blur-2xl" />

        <div className="relative mx-auto max-w-2xl text-center">
          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-white shadow-lg shadow-green-700/20">
            <Mail size={26} strokeWidth={1.8} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-green-800">
            Stay Connected
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            Get clean energy
            <span className="block text-green-700">updates in your inbox.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Be the first to hear about our latest electric mobility solutions,
            solar innovations, company news, and practical energy tips.
          </p>

          {/* Newsletter form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 shadow-sm transition focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">
              <Mail size={19} className="shrink-0 text-gray-400" />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address"
                autoComplete="email"
                required
                className="min-w-0 flex-1 border-0 bg-transparent py-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-0"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-4 font-semibold text-white shadow-md transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              Subscribe
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Privacy note */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs leading-5 text-gray-500 sm:text-sm">
            <CheckCircle2 size={16} className="shrink-0 text-green-700" />
            <span>
              No spam. Just useful updates. Your email stays private.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
