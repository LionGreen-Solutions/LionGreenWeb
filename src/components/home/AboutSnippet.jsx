import Link from "next/link";

export default function AboutSnippet() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-700 to-green-500 text-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/Images/About/Lion Green logo.jpg"
            alt="Lion Green Solutions"
            className="w-28 h-28 md:w-36 md:h-36 rounded-lg shadow-lg border-2 border-white/40 object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
            About Lion Green Solutions
          </h2>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Leading Ethiopia’s renewable energy revolution with innovative solar,
            electric mobility, and sustainable power solutions that transform
            communities and protect our environment.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-slate-100 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
