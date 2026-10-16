
import { useParams, Link } from "react-router-dom";
import { mobilityProducts } from "@/lib/mobilityData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  BatteryCharging,
  Bike,
  ClipboardList,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";

const formatLabel = (key: string) =>
  key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase())
    .trim();

const formatValue = (value: unknown): string => {
  if (Array.isArray(value)) {
    return value.join(", ");
  }

  if (typeof value === "object" && value !== null) {
    return Object.entries(value)
      .map(([key, item]) => `${formatLabel(key)}: ${formatValue(item)}`)
      .join(", ");
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  return String(value);
};

const MobilityDetail = () => {
  const { id } = useParams();
  const product = mobilityProducts.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />

        <main className="flex flex-1 items-center justify-center px-5 py-20">
          <div className="max-w-md text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
              <Bike size={32} />
            </div>
            <h1 className="mt-6 text-2xl font-bold text-slate-950">
              Product not found
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              This vehicle may be unavailable or the link may be incorrect.
            </p>
            <Link
              to="/mobility"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900"
            >
              <ArrowLeft size={16} />
              Back to Mobility
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-slate-100 bg-slate-50/70">
          <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
            <Link
              to="/mobility"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-emerald-800"
            >
              <ArrowLeft size={16} />
              All Mobility Products
            </Link>
          </div>
        </div>

        {/* Product overview */}
        <section className="px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-14">
            {/* Product image */}
            <div className="self-start">
              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-emerald-50/70 p-6 sm:min-h-[430px] sm:p-10">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl"
                />

                <img
                  src={product.image}
                  alt={product.name}
                  fetchPriority="high"
                  decoding="async"
                  className="relative z-10 max-h-[400px] w-full object-contain"
                />

                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white bg-white/90 px-3 py-2 text-xs font-semibold text-emerald-900 shadow-sm sm:bottom-6 sm:left-6">
                  <Zap size={14} />
                  Electric Mobility
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Vehicle details
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Product information
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-800">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Have questions?
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Contact our team
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product information */}
            <div className="flex flex-col">
              <p className="text-sm font-bold tracking-[0.16em] text-emerald-700">
                LION GREEN MOBILITY
              </p>

              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>

              {product.description && (
                <p className="mt-5 text-base leading-7 text-slate-600">
                  {product.description}
                </p>
              )}

              {/* Price */}
              <div className="mt-7 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50/90 to-white p-5 sm:p-6">
                <p className="text-sm font-medium text-slate-600">
                  Listed price
                </p>
                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-emerald-800 sm:text-4xl">
                    {product.basePrice.toLocaleString()}
                  </span>
                  <span className="text-base font-semibold text-slate-700">
                    ETB
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Please contact us to confirm current pricing and availability.
                </p>
              </div>

              {/* Actions */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900"
                >
                  <MessageCircle size={17} />
                  Ask About This Vehicle
                </Link>

                <a
                  href="tel:+251913829749"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  Contact by Phone
                  <ArrowRight size={17} />
                </a>
              </div>

              {/* Quick information */}
              <div className="mt-8 border-t border-slate-100 pt-6">
                <h2 className="flex items-center gap-2 text-base font-bold text-slate-900">
                  <ClipboardList size={19} className="text-emerald-700" />
                  Product Overview
                </h2>

                <div className="mt-4 space-y-3">
                  {product.specs &&
                    Object.entries(product.specs)
                      .filter(
                        ([, value]) =>
                          value !== null &&
                          value !== undefined &&
                          value !== ""
                      )
                      .slice(0, 4)
                      .map(([key, value]) => (
                        <div
                          key={key}
                          className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 text-sm last:border-0"
                        >
                          <span className="text-slate-500">
                            {formatLabel(key)}
                          </span>
                          <span className="text-right font-semibold text-slate-800">
                            {formatValue(value)}
                          </span>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full specifications */}
        <section className="bg-slate-50/80 px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <p className="text-sm font-bold tracking-[0.16em] text-emerald-700">
                GET TO KNOW YOUR VEHICLE
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Specifications & Features
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Review the available technical details and features for this
                model.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Specifications */}
              {product.specs &&
                Object.entries(product.specs).some(
                  ([, value]) =>
                    value !== null && value !== undefined && value !== ""
                ) && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
                    <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                        <ClipboardList size={20} />
                      </span>
                      Technical Specifications
                    </h3>

                    <dl className="mt-6 divide-y divide-slate-100">
                      {Object.entries(product.specs)
                        .filter(
                          ([, value]) =>
                            value !== null &&
                            value !== undefined &&
                            value !== ""
                        )
                        .map(([key, value]) => (
                          <div
                            key={key}
                            className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0"
                          >
                            <dt className="text-sm text-slate-500">
                              {formatLabel(key)}
                            </dt>
                            <dd className="max-w-[60%] text-right text-sm font-semibold text-slate-800">
                              {formatValue(value)}
                            </dd>
                          </div>
                        ))}
                    </dl>
                  </div>
                )}

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
                  <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                      <CheckCircle2 size={20} />
                    </span>
                    Key Features
                  </h3>

                  <ul className="mt-6 space-y-4">
                    {product.features.map((feature, index) => (
                      <li
                        key={`${feature}-${index}`}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-emerald-700"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Battery options */}
              {product.batteryOptions &&
                product.batteryOptions.length > 0 && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 lg:col-span-2">
                    <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                        <BatteryCharging size={20} />
                      </span>
                      Battery Options
                    </h3>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {product.batteryOptions.map((battery, index) => (
                        <div
                          key={`${battery.type}-${battery.capacity}-${index}`}
                          className="rounded-xl border border-slate-200 bg-slate-50/70 p-5"
                        >
                          <p className="font-semibold text-slate-900">
                            {battery.type}
                          </p>
                          <p className="mt-2 text-sm text-slate-600">
                            Capacity: {battery.capacity}
                          </p>
                          <p className="mt-4 text-xl font-bold text-emerald-800">
                            {battery.price.toLocaleString()}{" "}
                            <span className="text-sm font-semibold">ETB</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-800 p-6 text-white sm:flex-row sm:items-center sm:p-8">
              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  Interested in this vehicle?
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-emerald-50/90">
                  Contact our team for more information about this model,
                  pricing, and availability.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-8">
              <Link
                to="/mobility"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-emerald-800"
              >
                <ArrowLeft size={16} />
                Back to all mobility products
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobilityDetail;
