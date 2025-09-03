import { Link } from "react-router-dom";

export default function AboutSnippet() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-700 to-green-500 text-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Lion Green Solutions
          </h2>
          <p className="text-base md:text-lg mb-6 leading-relaxed">
            Leading Ethiopia’s renewable energy revolution with innovative solar,
            electric mobility, and sustainable power solutions that transform
            communities and protect our environment.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-slate-100 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
