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
            Lion Green Solutions Ethiopia PLC is a clean mobility company focused on electric 
            passenger tricycles, the most affordable and widely used transport mode in Ethiopian 
            cities and towns. We combine fleet rentals, vehicle sales, solar‑powered battery 
            swapping stations, and a ride‑hailing app to deliver fast, reliable, and eco‑friendly 
            transport. Our model makes EV ownership possible for more drivers through inclusive 
            financing and creates a scalable network that will grow with Ethiopia’s urban transport 
            needs.
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
