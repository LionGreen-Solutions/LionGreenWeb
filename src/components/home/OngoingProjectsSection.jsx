"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const projects = [
  {
    id: 1,
    name: "Solar Mini-Grid in Rural Ethiopia",
    image: "/Images/Projects/solar-minigrid.jpg",
    description:
      "We are building a sustainable solar mini-grid to power rural communities with affordable, reliable, and clean energy.",
  },
  {
    id: 2,
    name: "Electric Bajaj Fleet Deployment",
    image: "/Images/Projects/electric-bajaj.jpg",
    description:
      "Introducing a fleet of electric bajajs to reduce emissions and provide affordable urban transport solutions in Addis Ababa.",
  },
];

export default function OngoingProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16 bg-slate-50" id="projects">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-10">
          Our Ongoing Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden"
              onClick={() => setSelected(project)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Details */}
        <Dialog
          open={!!selected}
          onClose={() => setSelected(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-xl max-w-lg w-full p-6 shadow-lg">
              {selected && (
                <>
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                  />
                  <Dialog.Title className="text-2xl font-bold text-green-600 mb-3">
                    {selected.name}
                  </Dialog.Title>
                  <p className="text-gray-600 mb-6">{selected.description}</p>
                  <button
                    onClick={() => setSelected(null)}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Close
                  </button>
                </>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </section>
  );
}
