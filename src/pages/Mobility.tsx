
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bike,
  CheckCircle2,
  Leaf,
  Settings2,
  X,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mobilityProducts } from "@/lib/mobilityData";
import { spareParts } from "@/lib/sparePartsData";

const Mobility = () => {
  const [showSpares, setShowSpares] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-1/3 -z-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl"
          />

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
                <Leaf size={16} />
                ELECTRIC MOBILITY
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Move smarter.
                <span className="mt-2 block text-emerald-700">
                  Move greener.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Discover electric tricycles and mobility solutions designed
                for everyday transport, business, and a cleaner future.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-12 rounded-full bg-emerald-800 px-6 text-white shadow-sm hover:bg-emerald-900"
                >
                  <a href="#mobility-products">
                    Explore Vehicles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-emerald-200 bg-white/80 px-6 text-emerald-900 hover:bg-emerald-50"
                >
                  <Link to="/contact">
                    Contact Us
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-emerald-700" />
                  Electric mobility
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-emerald-700" />
                  Spare parts available
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-200/50 to-sky-200/40 blur-2xl" />

              <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-3xl border border-white bg-white/80 p-8 shadow-xl shadow-slate-900/5 sm:min-h-[360px]">
                <div className="absolute right-5 top-5 rounded-full bg-emerald-50 p-3 text-emerald-800">
                  <Bike size={25} />
                </div>

                <div className="max-w-sm text-center">
                  <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-800">
                    <Bike size={54} strokeWidth={1.4} />
                  </div>
                  <p className="text-xs font-bold tracking-[0.2em] text-emerald-700">
                    LION GREEN SOLUTIONS
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                    The future is electric.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Find the right mobility solution for your needs.
                  </p>
                  <a
                    href="#mobility-products"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950"
                  >
                    Browse our vehicles
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products */}
        <section
          id="mobility-products"
          className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-sm font-bold tracking-[0.16em] text-emerald-700">
                  OUR MOBILITY LINE
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Find your next ride
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                  Explore our electric vehicles for personal and commercial
                  transport.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowSpares(true)}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:border-emerald-700 hover:bg-emerald-50"
              >
                <Settings2 size={17} />
                Spare Parts
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {mobilityProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: (index % 4) * 0.06 }}
                  className="h-full"
                >
                  <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/5">
                    <Link
                      to={`/mobility/${product.id}`}
                      aria-label={`View ${product.name} details`}
                      className="relative block aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50/60 p-4"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition group-hover:border-emerald-700 group-hover:bg-emerald-800 group-hover:text-white">
                        <ArrowUpRight size={17} />
                      </span>
                    </Link>

                    <CardContent className="flex flex-1 flex-col p-5">
                      <h3 className="text-base font-bold leading-snug text-slate-900">
                        {product.name}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                        {product.description}
                      </p>

                      {/* Price hidden on the Mobility listing page */}
                      <div className="mt-auto pt-5">
                        <Link
                          to={`/mobility/${product.id}`}
                          className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-200 px-4 py-3 text-sm font-semibold text-emerald-800 transition hover:border-emerald-800 hover:bg-emerald-800 hover:text-white"
                        >
                          View Details
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {mobilityProducts.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center">
                <Bike className="mx-auto h-10 w-10 text-slate-400" />
                <p className="mt-4 font-semibold text-slate-800">
                  No mobility products are available right now.
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Please contact us for available vehicles.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Spare parts banner */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 sm:p-9 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl"
            />

            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold tracking-wider text-emerald-800 shadow-sm">
                  <Settings2 size={14} />
                  SPARE PARTS
                </span>

                <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Keep your vehicle running.
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                  Find tricycle spare parts and explore the components
                  available in our catalogue.
                </p>

                <Button
                  type="button"
                  onClick={() => setShowSpares(true)}
                  className="mt-6 h-11 rounded-full bg-emerald-800 px-6 text-white hover:bg-emerald-900"
                >
                  Explore Spare Parts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex h-24 w-24 shrink-0 items-center justify-center self-center rounded-3xl border border-emerald-100 bg-white/80 text-emerald-800 shadow-sm sm:h-32 sm:w-32">
                <Settings2 size={58} strokeWidth={1.2} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Spare parts modal */}
      {showSpares && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setShowSpares(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="spares-modal-title"
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-7">
              <div>
                <p className="text-xs font-bold tracking-[0.16em] text-emerald-700">
                  PARTS CATALOGUE
                </p>
                <h2
                  id="spares-modal-title"
                  className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl"
                >
                  Tricycle Spare Parts
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setShowSpares(false)}
                aria-label="Close spare parts"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-emerald-100 hover:text-emerald-900"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto p-5 sm:p-7">
              {spareParts.length > 0 ? (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {spareParts.map((item) => (
                    <div
                      key={item.id}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-emerald-200 hover:shadow-md"
                    >
                      <div className="flex aspect-square items-center justify-center bg-slate-50 p-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="p-3 sm:p-4">
                        <h3 className="text-sm font-semibold leading-snug text-slate-900">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-xs leading-5 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="py-12 text-center text-sm text-slate-500">
                  No spare parts are listed yet.
                </p>
              )}
            </div>

            <div className="border-t border-slate-100 bg-slate-50 px-5 py-4 text-right sm:px-7">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowSpares(false)}
                className="rounded-full border-slate-300 bg-white px-6"
              >
                Close
              </Button>
            </div>
          </section>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Mobility;
