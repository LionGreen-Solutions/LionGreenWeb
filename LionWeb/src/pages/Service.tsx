
import { useParams } from "react-router-dom";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample service data
const services = {
  "installation": {
    title: "Professional Installation Services",
    description: "Expert installation of all Lion Green Solutions products by certified technicians.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    benefits: [
      "Certified professionals with years of experience",
      "Proper installation ensuring optimal performance",
      "Safety compliance with local and international standards",
      "System testing and user training included",
      "Warranty protection for installed systems"
    ],
    process: [
      "Initial site assessment and requirements gathering",
      "Customized installation plan development",
      "Professional installation by trained technicians",
      "Quality inspection and system testing",
      "Customer training and documentation handover"
    ]
  },
  "maintenance": {
    title: "Maintenance Services",
    description: "Regular maintenance and support to ensure your renewable energy systems operate at peak efficiency.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    benefits: [
      "Extended system lifespan through regular maintenance",
      "Early detection of potential issues",
      "Improved system efficiency and performance",
      "Reduced downtime and emergency repair costs",
      "Maintenance history documentation for warranty purposes"
    ],
    process: [
      "Scheduled maintenance visits based on system requirements",
      "Comprehensive system inspection and diagnostics",
      "Cleaning of key components and connections",
      "Performance optimization and adjustments",
      "Detailed service report and recommendations"
    ]
  }
};

const Service = () => {
  const { service } = useParams<{ service: string }>();
  const serviceData = service && services[service as keyof typeof services];

  if (!serviceData) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center bg-noise">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist or has moved.</p>
            <button 
              onClick={() => window.history.back()} 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Go Back
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 bg-noise">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-8 font-display">{serviceData.title}</h1>
          
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                {serviceData.description}
              </p>
              <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg border border-border/30">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Why Choose Our Service</h3>
                <ul className="space-y-3">
                  {serviceData.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <img 
                src={serviceData.image} 
                alt={serviceData.title} 
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-6">Our Process</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-px bg-border/50"></div>
              <div className="space-y-8 relative">
                {serviceData.process.map((step, idx) => (
                  <div key={idx} className="ml-10 relative">
                    <div className="absolute -left-10 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                      {idx + 1}
                    </div>
                    <div className="bg-card/60 backdrop-blur-sm p-4 rounded-lg border border-border/30">
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-card/60 backdrop-blur-sm p-8 rounded-lg border border-border/30 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Contact us today to schedule your service appointment or request a free quote.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="/contact" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 inline-block"
              >
                Contact Us
              </a>
              <a 
                href="tel:+251913829749" 
                className="px-6 py-3 bg-secondary text-foreground rounded-md hover:bg-secondary/80 inline-block"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Service;
