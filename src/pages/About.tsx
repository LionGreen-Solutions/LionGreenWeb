import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/home/PartnersSection";
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Company Introduction Section */}
      <section className="py-12 bg-gradient-to-b from-slate-800 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lion Green Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Lion Green Solutions Ethiopia PLC is a clean mobility company focused on electric 
            passenger tricycles, the most affordable and widely used transport mode in Ethiopian 
            cities and towns. We combine fleet rentals, vehicle sales, solar‑powered battery 
            swapping stations, and a ride‑hailing app to deliver fast, reliable, and eco‑friendly 
            transport. Our model makes EV ownership possible for more drivers through inclusive 
            financing and creates a scalable network that will grow with Ethiopia’s urban transport 
            needs.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 bg-slate-50">
          
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-green-600 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To make urban transport in Ethiopia cleaner, cheaper, and more reliable by replacing 
                fuel‑powered tricycles with electric passenger tricycles powered by renewable energy.
              </p>
              <h2 className="text-2xl font-bold text-green-600 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                A future where every short‑distance trip in Ethiopian cities is powered by zero‑emission 
                vehicles, supported by a nationwide network of solar‑powered battery swapping stations 
                and digital ride‑hailing services.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border shadow-lg">
              <img src="Images/About/Lion Green logo.jpg" alt="Solar panels in Ethiopia" className="w-80 h-auto mx-auto rounded-lg" />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-green-600 mb-6">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border hover:border-green-500/50 transition-all duration-300 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Sustainability</h3>
                <p className="text-gray-600">
                  We're dedicated to promoting sustainable energy practices and reducing carbon 
                  footprints across Ethiopia. Every product and service we offer is evaluated for 
                  its environmental impact.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border hover:border-green-500/50 transition-all duration-300 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation</h3>
                <p className="text-gray-600">
                  We constantly explore new technologies and solutions to address energy challenges. 
                  Our team stays at the forefront of renewable energy innovations to bring the best 
                  solutions to our customers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border hover:border-green-500/50 transition-all duration-300 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Community</h3>
                <p className="text-gray-600">
                  We believe in building strong relationships with the communities we serve. Our 
                  business model emphasizes local partnerships, training, and employment opportunities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-green-600 mb-6">Our Team</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg border text-center shadow-sm">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-green-600/30">
                  <img src="" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Mesafint Belachew</h3>
                <p className="text-green-600 text-sm">Founder & CEO</p>
              </div>
              <div className="bg-white p-4 rounded-lg border text-center shadow-sm">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-green-600/30">
                  <img src="" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">NA</h3>
                <p className="text-green-600 text-sm">Technical Director</p>
              </div>
              <div className="bg-white p-4 rounded-lg border text-center shadow-sm">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-green-600/30">
                  <img src="" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">NA</h3>
                <p className="text-green-600 text-sm">Operations Manager</p>
              </div>
              <div className="bg-white p-4 rounded-lg border text-center shadow-sm">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-green-600/30">
                  <img src="" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">NA</h3>
                <p className="text-green-600 text-sm">Finance Director</p>
              </div>
            </div>
          </div>
        </div>
        
        <PartnersSection />
      </main>
      <Footer />
    </div>;
};
export default About;