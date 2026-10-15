
const ProjectHighlight = () => {
  const projectHighlights = [
    {
      number: "01",
      title: "Solar Water Pumping Systems",
      description:
        "Site assessment, redesign, and installation in Kobo, Kombolcha, and Amdework, with 85–115 kWp solar systems supporting 55 kW pumps.",
    },
    {
      number: "02",
      title: "Civil & Electrical Engineering",
      description:
        "QGIS-based topographic surveys, soil resistivity testing, inverter calibration, and complete system commissioning.",
    },
    {
      number: "03",
      title: "Monitoring & System Protection",
      description:
        "Remote monitoring, surge protection, and safety systems designed to improve long-term operational reliability.",
    },
    {
      number: "04",
      title: "Solar Mini-Grid Assessments",
      description:
        "Assessment of six rural sites for the Adele electrification project, including geotechnical studies, elevation mapping, and deployment risk analysis across Oromia, SNNPR, and Sidama.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-emerald-50 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-800">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            OUR ENGINEERING EXPERIENCE
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Delivering Clean Energy
            <span className="block text-green-700">
              Projects Across Ethiopia
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            From solar-powered water infrastructure to rural electrification,
            we bring practical engineering expertise to projects that support
            reliable energy and sustainable community development.
          </p>
        </div>

        {/* Main project layout */}
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Image and project badge */}
          <div className="lg:col-span-5">
            <div className="group relative">
              <div className="absolute -inset-3 rounded-3xl bg-green-100/70 transition duration-300 group-hover:bg-green-100" />

              <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
                <img
                  src="/Images/Projects/lion-green-project.jpg"
                  alt="Lion Green Solutions solar infrastructure project"
                  width={600}
                  height={400}
                  loading="lazy"
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[420px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
                    Featured Experience
                  </p>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Solar Infrastructure
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-200">
                    Engineering solutions designed for lasting impact.
                  </p>
                </div>
              </div>

              {/* Floating experience card */}
              <div className="absolute -bottom-5 right-4 rounded-xl border border-gray-100 bg-white p-4 shadow-lg sm:-right-5 sm:p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Our focus
                </p>
                <p className="mt-1 text-lg font-bold text-green-800">
                  Clean Energy
                </p>
                <p className="text-sm text-gray-500">
                  Engineering & delivery
                </p>
              </div>
            </div>
          </div>

          {/* Project information */}
          <div className="pt-2 lg:col-span-7 lg:pt-0">
            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
                Lion Green Solutions Ethiopia PLC
              </p>
              <h3 className="mt-2 text-2xl font-bold text-gray-950 sm:text-3xl">
                Relevant Experience
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Our project experience covers the technical and practical
                stages of solar infrastructure development, from initial
                site investigation to installation, testing, and commissioning.
              </p>
            </div>

            {/* Project highlights */}
            <div className="space-y-3">
              {projectHighlights.map((project) => (
                <div
                  key={project.number}
                  className="group flex gap-4 rounded-xl border border-gray-100 bg-white p-4 transition duration-300 hover:border-green-200 hover:bg-green-50/60 sm:gap-5 sm:p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-sm font-bold text-green-800 transition group-hover:bg-green-700 group-hover:text-white">
                    {project.number}
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">
                      {project.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing statement */}
            <p className="mt-6 text-sm leading-7 text-gray-600">
              Our work has supported international contractors and
              donor-funded programs, contributing to Ethiopia&apos;s clean
              energy goals through engineering expertise and community impact.
            </p>

            {/* PDF button */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/pdfs/LionGreen_ProjectDetails.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-700 px-6 py-4 font-semibold text-white shadow-lg shadow-green-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
              >
                View Project Documentation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14 3h7v7" />
                  <path d="M10 14 21 3" />
                  <path d="M21 14v7H3V3h7" />
                </svg>
              </a>

              <span className="text-sm text-gray-500">
                Detailed project information in PDF format
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlight;
