
"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ArrowUpRight, X, Lightbulb } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "StepG - Campus",
    category: "SMART CAMPUS MOBILITY",
    image: "/Images/Projects/Station.png",
    description:
      "The Solar-Powered Smart Energy Hub and Electric Bike-Sharing System at AASTU integrates clean solar generation, intelligent mobility, and modular digital services into one platform. It transforms campus spaces into active sustainability hubs, offering zero-emission rides, reliable energy, student services, and a living lab for research and innovation.",
  },
  {
    id: 2,
    name: "StepG Tuk Tuk",
    category: "ELECTRIC URBAN TRANSPORT",
    image: "/Images/Projects/OnGMOb.png",
    description:
      "Expanding beyond the university, StepG Tuk Tuk introduces a fleet of electric tuk-tuk powered by solar charging and battery-swap stations. This project aims to create a clean, affordable, and scalable ride system for cities, reducing emissions while modernizing urban transport infrastructure.",
  },
];

export default function OngoingProjectsSection() {
  const [selected, setSelected] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24"
      id="projects"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
              <Lightbulb size={16} />
              Innovation in Action
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Our Ongoing Projects
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Discover how we are bringing clean energy, electric
              mobility, and smart technology into practical projects.
            </p>
          </div>

          <div className="hidden shrink-0 pb-1 text-sm font-medium text-slate-500 md:block">
            Featured initiatives · 02
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelected(project)}
              aria-label={`View details for ${project.name}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4"
            >
              {/* Original project image preserved */}
              <div className="relative h-64 overflow-hidden bg-slate-100 sm:h-72 lg:h-80">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/95 px-3 py-1.5 text-xs font-semibold tracking-wide text-emerald-800 shadow-sm">
                  {project.category}
                </span>

                <span className="absolute bottom-5 left-5 text-sm font-medium text-white/90">
                  PROJECT 0{index + 1}
                </span>
              </div>

              {/* Card content */}
              <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-950 transition-colors group-hover:text-emerald-700 sm:text-2xl">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Explore project details
                  </p>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-all group-hover:border-emerald-700 group-hover:bg-emerald-700 group-hover:text-white">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Project details modal */}
      <Dialog
        open={selected !== null}
        onClose={() => setSelected(null)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
          <Dialog.Panel className="relative my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            {selected && (
              <>
                <div className="relative h-56 bg-slate-100 sm:h-80">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="h-full w-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    aria-label="Close project details"
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-md transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-6 sm:p-8">
                  <span className="text-xs font-bold tracking-[0.15em] text-emerald-700">
                    {selected.category}
                  </span>

                  <Dialog.Title className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    {selected.name}
                  </Dialog.Title>

                  <p className="mt-5 text-base leading-7 text-slate-600">
                    {selected.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="mt-7 rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                  >
                    Close Details
                  </button>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
