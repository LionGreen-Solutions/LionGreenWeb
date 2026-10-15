
import { Link } from "react-router-dom";
import { ArrowRight, CarFront, Sun } from "lucide-react";

const QuickLinksSection = () => {
  const services = [
    {
      title: "Electric Mobility",
      description:
        "Discover electric tricycles and sustainable transport solutions for individuals and businesses.",
      link: "/mobility",
      label: "Explore Our Vehicles",
      icon: CarFront,
    },
    {
      title: "Solar Consultation",
      description:
        "Get expert guidance and a tailored solar system design for your home, business, or project.",
      link: "/consultation",
      label: "Plan Your Solar System",
      icon: Sun,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 md:py-24">
      {/* Subtle decorative background */}
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-green-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-800">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            HOW WE CAN HELP
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Explore Our
            <span className="text-green-700"> Solutions</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Practical solutions for cleaner transportation and reliable solar
            energy, designed around your needs.
          </p>
        </div>

        {/* Service cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                to={service.link}
                className="group flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-4 sm:p-9 lg:p-10"
              >
                {/* Icon and number */}
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition-colors duration-300 group-hover:bg-green-700 group-hover:text-white">
                    <Icon size={32} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-gray-300">
                    0{index + 1}
                  </span>
                </div>

                {/* Card content */}
                <h3 className="mt-7 text-2xl font-bold text-gray-950 transition-colors duration-300 group-hover:text-green-800 sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-3 flex-grow text-base leading-7 text-gray-600">
                  {service.description}
                </p>

                {/* Link action */}
                <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="font-semibold text-green-800">
                    {service.label}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-700 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-green-700 group-hover:text-white">
                    <ArrowRight size={20} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
