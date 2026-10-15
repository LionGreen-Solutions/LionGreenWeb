
import {
  Leaf,
  BatteryCharging,
  CarFront,
  Headset,
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Sustainable Solutions",
      description:
        "Supporting cleaner transportation and renewable energy for a greener future.",
    },
    {
      icon: CarFront,
      title: "Electric Mobility",
      description:
        "Explore practical electric mobility solutions for drivers, businesses, and fleets.",
    },
    {
      icon: BatteryCharging,
      title: "Energy Innovation",
      description:
        "Bringing solar energy and battery solutions together to support electric mobility.",
    },
    {
      icon: Headset,
      title: "Customer Support",
      description:
        "Get guidance to help you understand our products and choose a suitable solution.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
            Why Lion Green Solutions?
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Better Mobility.
            <span className="block text-emerald-700">
              Smarter Energy.
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            We bring electric mobility, renewable energy, and
            technology together to support a more sustainable future.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5 sm:p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
