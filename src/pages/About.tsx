
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import PartnersSection from "@/components/home/PartnersSection";
import {
  ArrowRight,
  Leaf,
  Lightbulb,
  Users,
  Target,
  Eye,
  ChevronRight,
} from "lucide-react";

const teamMembers = [
  {
    name: "Mesafint Belachew",
    role: "Founder & CEO",
    image: "/Images/Team/mesafint.jpg",
  },
  {
    name: "Daneal",
    role: "Technical Director",
    image: "/Images/Team/tech-director.jpg",
  },
  {
    name: "Fisha Belachew",
    role: "Operations Manager",
    image: "/Images/Team/operations.jpg",
  },
  {
    name: "Hiwot",
    role: "Finance Director",
    image: "/Images/Team/finance.jpg",
  },
];

const coreValues = [
  {
    title: "Sustainability",
    description:
      "We promote cleaner energy and electric transportation to help reduce emissions and support a more sustainable future for Ethiopia.",
    icon: Leaf,
    number: "01",
  },
  {
    title: "Innovation",
    description:
      "We combine electric mobility, renewable energy, and digital technology to develop practical solutions for everyday challenges.",
    icon: Lightbulb,
    number: "02",
  },
  {
    title: "Community",
    description:
      "We value local partnerships, skills development, and opportunities that help drivers, businesses, and communities grow.",
    icon: Users,
    number: "03",
  },
];

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
                <Leaf size={16} />
                About Lion Green Solutions
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Moving Ethiopia toward a{" "}
                <span className="text-emerald-800">
                  cleaner future.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Lion Green Solutions Ethiopia PLC is a clean mobility company
                focused on electric passenger tricycles. We bring together
                vehicle sales, fleet rentals, solar-powered battery-swapping
                stations, and digital ride-hailing services to help make urban
                transport cleaner, more accessible, and more reliable.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#our-mission"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-800 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-900"
                >
                  Discover Our Mission
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#our-team"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-800"
                >
                  Meet Our Team
                </a>
              </div>

              <div className="mt-10 border-t border-slate-200 pt-6">
                <p className="text-sm font-semibold italic text-emerald-800">
                  "Energy is free!"
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Our commitment to a cleaner energy future.
                </p>
              </div>
            </div>

            {/* Company logo / image */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-emerald-100/70 blur-2xl" />

              <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:min-h-[380px] sm:p-10">
                <img
                  src="/Images/About/Lion Green logo.jpg"
                  alt="Lion Green Solutions Ethiopia PLC"
                  className="max-h-[320px] w-full object-contain"
                  fetchPriority="high"
                />

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-6">
                  <p className="text-xs font-bold tracking-[0.16em] text-emerald-700">
                    OUR PURPOSE
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                    Cleaner mobility. Smarter energy. Better opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section
          id="our-mission"
          className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-bold tracking-[0.16em] text-emerald-700">
                OUR DIRECTION
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                What drives us forward
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Our work is guided by a commitment to cleaner transportation,
                renewable energy, and practical solutions for Ethiopian
                communities.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 transition group-hover:bg-emerald-800 group-hover:text-white">
                  <Target size={27} />
                </div>

                <p className="mt-7 text-xs font-bold tracking-[0.16em] text-emerald-700">
                  OUR MISSION
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  Make mobility cleaner and more accessible
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  To make urban transport in Ethiopia cleaner, cheaper, and
                  more reliable by replacing fuel-powered tricycles with
                  electric passenger tricycles supported by renewable energy.
                </p>
              </article>

              <article className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-800 transition group-hover:bg-sky-800 group-hover:text-white">
                  <Eye size={27} />
                </div>

                <p className="mt-7 text-xs font-bold tracking-[0.16em] text-sky-700">
                  OUR VISION
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  A future powered by clean energy
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  A future where short-distance journeys in Ethiopian cities
                  are increasingly powered by zero-emission vehicles,
                  supported by solar-powered battery-swapping stations and
                  digital ride-hailing services.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="border-y border-slate-100 bg-slate-50/80 px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold tracking-[0.16em] text-emerald-700">
                WHAT WE BELIEVE
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Our Core Values
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                The principles behind how we work, innovate, and serve our
                customers and communities.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {coreValues.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800 transition group-hover:bg-emerald-800 group-hover:text-white">
                        <Icon size={23} />
                      </div>

                      <span className="text-sm font-bold tracking-widest text-slate-300">
                        {value.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section
          id="our-team"
          className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold tracking-[0.16em] text-emerald-700">
                  THE PEOPLE BEHIND OUR WORK
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Meet Our Team
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  The leadership team helping drive our mission in clean
                  mobility and sustainable energy.
                </p>
              </div>

              <div className="hidden items-center gap-2 pb-1 text-sm font-medium text-slate-500 sm:flex">
                Our People
                <ChevronRight size={17} />
              </div>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-900/5"
                >
                  <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50 sm:h-72">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.style.visibility = "hidden";
                      }}
                    />

                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/20 to-transparent" />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-950">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-emerald-700">
                      {member.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-5 text-center text-xs text-slate-500">
              Our team is committed to building practical, sustainable
              solutions for Ethiopia.
            </p>
          </div>
        </section>

        {/* Partners
        <section className="border-t border-slate-100 bg-slate-50/70 py-12 sm:py-16">
          <PartnersSection />
        </section> */}

        {/* Closing CTA */}
        <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-bold tracking-[0.16em] text-emerald-300">
                  BUILD A CLEANER FUTURE WITH US
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Let's move forward together.
                </h2>
                <p className="mt-4 text-sm leading-7 text-emerald-50/80 sm:text-base">
                  Interested in our electric mobility or renewable energy
                  solutions? Get in touch with Lion Green Solutions.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50 md:self-center"
              >
                Contact Our Team
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
