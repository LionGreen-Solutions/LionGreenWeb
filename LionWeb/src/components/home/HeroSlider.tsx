
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSlider = () => {
  // Editable slides - you can customize both images and text for each slide
  const slides = [
    {
      id: 1,
      title: "Solar Design & Consultation",
      description: "Get personalized solar system design tailored to your energy needs",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ctaText: "Get Consultation",
      ctaLink: "/consultation"
    },
    {
      id: 2,
      title: "Electric Mobility",
      description: "Explore our range of eco-friendly Electric Bikes, Tricycles and Scooters",
      image: "Images/mobility/A0.webp",
      ctaText: "Explore Mobility",
      ctaLink: "/mobility"
    },
    {
      id: 3,
      title: "Portable Power Stations",
      description: "Reliable power solutions for your adventures and backup needs",
      image: "Images/slides/Ecoflow.webp",
      ctaText: "Shop Power Stations",
      ctaLink: "/power-stations"
    },
    {
      id: 4,
      title: "RFID Card Refill",
      description: "Fast Card refilling service for Ethiopian Electric Utility customers in Addis Ababa",
      image: "Images/slides/RFID.webp",
      ctaText: "Refill Card",
      ctaLink: "/card-refill"
    }
  ];

  return (
    <section className="relative w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                {/* Background Image - Natural without overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                
                {/* Content with subtle backdrop */}
                <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl">
                    {/* Text container with subtle backdrop */}
                    <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-6 md:p-8">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white animate-fade-in">
                        {slide.title}
                      </h1>
                      <p className="text-base md:text-lg mb-6 text-gray-100 animate-fade-in">
                        {slide.description}
                      </p>
                      <Link to={slide.ctaLink}>
                        <Button size="lg" className="bg-sunbeam-400 hover:bg-sunbeam-500 text-navy-900 font-semibold animate-fade-in">
                          {slide.ctaText}
                          <ArrowRight size={18} className="ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white bg-opacity-80 hover:bg-opacity-100" />
        <CarouselNext className="right-4 bg-white bg-opacity-80 hover:bg-opacity-100" />
      </Carousel>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div key={index} className="w-3 h-3 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100 transition-all cursor-pointer" />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
