
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Subtle decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl"
      />

      <div className="container relative mx-auto px-4 py-16 sm:px-6 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm">
              <Sun size={17} className="text-emerald-600" />
              <span>Smarter Energy. Greener Future.</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Power Your World
              <span className="mt-1 block text-emerald-700">
                with Clean Energy
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Discover practical solar solutions and electric mobility
              designed to meet your energy needs and help build a
              more sustainable future.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-md bg-emerald-700 px-6 font-semibold text-white hover:bg-emerald-800"
              >
                <Link to="/products">
                  Explore Products
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-md border-slate-300 bg-white px-6 font-semibold text-slate-800 hover:border-emerald-700 hover:bg-emerald-50 hover:text-emerald-800"
              >
                <Link to="/consultation">
                  Get Consultation
                </Link>
              </Button>
            </div>

            {/* Supporting benefits */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-emerald-700"
                />
                Tailored Energy Solutions
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-emerald-700"
                />
                Sustainable Mobility
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-emerald-100/70 blur-xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white shadow-xl shadow-slate-900/10">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85"
                alt="Solar panels generating clean renewable energy"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
                loading="eager"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                    <Sun size={25} />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      Energy for a Better Future
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Solar solutions for homes and businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
