
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Leaf } from "lucide-react";

export default function AboutSnippet() {
  const highlights = [
    "Electric vehicle sales and rentals",
    "Solar-powered battery-swapping solutions",
    "Digital mobility and ride-hailing technology",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* About content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
              <Leaf size={16} />
              About Lion Green Solutions
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Moving Ethiopia
              <span className="block text-emerald-700">
                Toward a Greener Future
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Lion Green Solutions Ethiopia PLC is building cleaner,
              more accessible urban transportation through electric
              passenger tricycles, vehicle sales and rentals, and
              innovative energy solutions.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              By connecting electric mobility, solar-powered
              battery-swapping solutions, and digital transport
              technology, we aim to make sustainable transportation
              more practical for drivers, businesses, and communities
              across Ethiopia.
            </p>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-md bg-emerald-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              Discover Our Story
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Key areas */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              What We Do
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-950">
              Practical solutions. Meaningful progress.
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              We bring transportation, energy, and technology together
              to support a more sustainable mobility ecosystem.
            </p>

            <ul className="mt-7 space-y-5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-emerald-700"
                  />
                  <span className="font-medium leading-6 text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-sm leading-6 text-slate-500">
                Clean mobility and energy solutions designed for
                Ethiopia's evolving needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
