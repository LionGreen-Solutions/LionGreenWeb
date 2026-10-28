
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const vehicleTypes = [
  {
    title: "Passenger Tricycles",
    description:
      "Practical electric transport for drivers, passengers, and daily journeys.",
    image: "/Images/mobility/A1L.jpg",
    alt: "Electric passenger tricycle",
  },
  {
    title: "Cargo Tricycles",
    description:
      "Explore electric utility vehicles for deliveries and business operations.",
    image: "/Images/mobility/C0.webp",
    alt: "Electric cargo tricycle",
  },
  {
    title: "Electric Scooters",
    description:
      "Compact electric mobility for convenient everyday travel.",
    image: "/Images/mobility/S001.webp",
    alt: "Electric scooter",
  },
];

export default function MobilityShowcase() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:items-center lg:gap-12">
          {/* Section introduction */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Our Mobility Solutions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Smart Electric Tricycles{" "}
              <span className="text-emerald-700">
                for Every Need
              </span>
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-slate-600">
              From passenger transportation to cargo delivery,
              explore electric mobility options for drivers,
              businesses, and communities across Ethiopia.
            </p>

            <Link
              to="/mobility"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              View All Vehicles
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Vehicle cards */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {vehicleTypes.map((vehicle) => (
              <article
                key={vehicle.title}
                className="group min-w-0"
              >
                {/* Vehicle image */}
                <div className="overflow-hidden rounded-2xl bg-slate-50">
                  <img
                    src={vehicle.image}
                    alt={vehicle.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Vehicle title and link */}
                <div className="flex items-start justify-between gap-3 pt-5">
                  <h3 className="text-lg font-bold text-slate-900">
                    {vehicle.title}
                  </h3>

                  <Link
                    to="/mobility"
                    aria-label={`Explore ${vehicle.title}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 text-emerald-700 transition hover:bg-emerald-700 hover:text-white"
                  >
                    <ArrowRight size={17} />
                  </Link>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {vehicle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
