import Image from "next/image";

const ProjectHighlight = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/lion-green-project.jpg" // <-- replace with your actual image path
            alt="Lion Green Solutions Project"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right: Description */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Relevant Experience – Lion Green Solutions Ethiopia PLC
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lion Green Solutions has successfully delivered solar infrastructure
            projects across Ethiopia, focusing on water supply and rural
            electrification. Our experience includes:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
            <li>
              Site Assessment, Redesign & Installation of solar-powered water
              pumping systems in Kobo, Kombolcha, and Amdework (Amhara Region),
              each ranging from 85 kWp to 115 kWp and supporting 55 kW pump
              systems.
            </li>
            <li>
              Execution of civil and electrical works, including QGIS-based
              topographic surveys, soil resistivity testing, inverter
              calibration, and full commissioning.
            </li>
            <li>
              Integration of remote monitoring, surge protection, and safety
              systems to ensure long-term reliability.
            </li>
            <li>
              Delivery of solar mini-grid site assessments for the Adele
              electrification project, covering six rural sites in Oromia,
              SNNPR, and Sidama. This included geotechnical studies, elevation
              mapping, and risk analysis for off-grid solar deployment.
            </li>
          </ul>
          <p className="text-gray-700 mb-6">
            Our work has supported international contractors and donor-funded
            programs, contributing to Ethiopia’s clean energy goals with
            precision engineering and community impact.
          </p>

          {/* PDF Link */}
          <a
            href="/pdfs/LionGreen_ProjectDetails.pdf" // <-- your uploaded PDF path
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            👉 View Detailed Project Documentation (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlight;
