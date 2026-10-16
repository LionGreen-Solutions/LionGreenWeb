
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import {
  Sun,
  Zap,
  Leaf,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";

const SolarConsultation: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
                  <Sun size={16} />
                  Personalized Solar Solutions
                </div>

                <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Power your future with{" "}
                  <span className="text-emerald-800">solar energy.</span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  Tell us about your energy needs. Our team will help you
                  explore a solar solution designed around your home,
                  business, or project.
                </p>

                <a
                  href="#consultation-form"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                >
                  Get Started
                  <ArrowDown size={17} />
                </a>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
                  <span className="flex items-center gap-2">
                    <CheckCircle2
                      size={17}
                      className="text-emerald-700"
                    />
                    Customized solutions
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2
                      size={17}
                      className="text-emerald-700"
                    />
                    Expert guidance
                  </span>
                </div>
              </div>

              {/* Visual feature panel */}
              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                    <Sun size={34} strokeWidth={1.7} />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold text-slate-950 sm:text-3xl">
                    Your energy. Your solution.
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    From solar panels and battery storage to complete
                    solar power systems, start with a consultation that
                    focuses on what you need.
                  </p>

                  <div className="mt-7 space-y-4">
                    <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                        <Zap size={21} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          Designed for your needs
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Share your appliances, power usage, and backup
                          requirements.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                        <Leaf size={21} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          A cleaner energy future
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Explore renewable energy options for your home
                          or business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-emerald-200/50 blur-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section
          id="consultation-form"
          className="scroll-mt-24 bg-slate-50/80 px-4 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center sm:mb-10">
              <p className="text-sm font-bold tracking-[0.16em] text-emerald-700">
                LET'S PLAN YOUR SYSTEM
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Tell Us About Your Energy Needs
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Complete the consultation form below to help us understand
                your requirements and recommend suitable next steps.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-8 lg:p-10">
              <ConsultationForm />
            </div>

            <p className="mt-5 text-center text-xs leading-5 text-slate-500">
              Your information helps us understand your project requirements.
              Final system sizing and pricing should be confirmed through
              a technical assessment.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolarConsultation;
