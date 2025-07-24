
import { Link } from "react-router-dom";

const QuickLinksSection = () => {
  const services = [
    {
      title: "Electric Mobility",
      description: "Explore eco-friendly electric bikes and scooters",
      link: "/mobility",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: "bg-green-100",
      hoverBgColor: "group-hover:bg-green-200",
      textColor: "text-green-600",
      hoverTextColor: "group-hover:text-green-700"
    },
    {
      title: "Power Stations",
      description: "Portable power solutions for all your energy needs",
      link: "/power-stations",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: "bg-green-100",
      hoverBgColor: "group-hover:bg-green-200",
      textColor: "text-green-600",
      hoverTextColor: "group-hover:text-green-700"
    },
    {
      title: "RFID Card Refill",
      description: "Quick and easy card refill services",
      link: "/card-refill",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      bgColor: "bg-blue-100",
      hoverBgColor: "group-hover:bg-blue-200",
      textColor: "text-green-600",
      hoverTextColor: "group-hover:text-blue-600"
    },
    {
      title: "Solar Consultation",
      description: "Get personalized solar system design and consultation",
      link: "/consultation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      bgColor: "bg-green-100",
      hoverBgColor: "group-hover:bg-green-200",
      textColor: "text-green-600",
      hoverTextColor: "group-hover:text-green-700"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Explore Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 ${service.bgColor} rounded-full flex items-center justify-center ${service.hoverBgColor} transition-colors duration-300`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${service.textColor} ${service.hoverTextColor} transition-colors duration-300`}>
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
