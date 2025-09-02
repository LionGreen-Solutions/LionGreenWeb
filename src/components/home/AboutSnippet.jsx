import Link from "next/link";

export default function AboutSnippet() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-700 to-green-500 text-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/Images/About/Lion Green logo.jpg"
            alt="Lion Green Solutions"
            className="w-26 h-26 md:w-32 md:h-32 max-w-[130px] max-h-[130px] rounded-lg shadow-lg border-2 border-white/40 object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left max-w-xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
            About Lion Green Solutions
          </h2>
          <p className="text-base md:text-lg mb-6 leading-relaxed">
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
