
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    eyebrow: "CLEAN ENERGY SOLUTIONS",
    title: "Solar Design & Consultation",
    description:
      "Get a solar system designed around your energy needs, budget, and daily consumption.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=85",
    ctaText: "Get Consultation",
    ctaLink: "/consultation",
    imagePosition: "center",
  },
  {
    id: 2,
    eyebrow: "SUSTAINABLE TRANSPORTATION",
    title: "Discover Electric Mobility",
    description:
      "Explore practical electric tricycles, bikes, and scooters for a cleaner journey.",
    image: "/Images/mobility/A0.webp",
    ctaText: "Explore Mobility",
    ctaLink: "/mobility",
    imagePosition: "center",
  },
];

const HeroSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateActiveSlide = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    updateActiveSlide();
    api.on("select", updateActiveSlide);

    return () => {
      api.off("select", updateActiveSlide);
    };
  }, [api]);

  return (
    <section
      aria-label="Featured Lion Green Solution services"
      className="relative w-full overflow-hidden bg-white"
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0">
              <div className="relative isolate flex min-h-[460px] items-center overflow-hidden sm:min-h-[520px] lg:min-h-[600px]">
                {/* Background image */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url("${slide.image}")`,
                    backgroundPosition: slide.imagePosition,
                  }}
                />

                {/* Soft gradient keeps the text readable */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/80 to-white/10 sm:from-white/95 sm:via-white/75 sm:to-transparent"
                />

                {/* Slide content */}
                <div className="container mx-auto w-full px-6 py-16 sm:px-10 lg:px-16">
                  <div className="max-w-xl lg:max-w-2xl">
                    <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 sm:text-sm">
                      <span className="h-0.5 w-8 bg-emerald-600" />
                      {slide.eyebrow}
                    </p>

                    <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mt-5 max-w-lg text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                      {slide.description}
                    </p>

                    <div className="mt-8">
                      <Button
                        asChild
                        size="lg"
                        className="group h-12 rounded-md bg-emerald-700 px-6 font-semibold text-white transition-colors hover:bg-emerald-800"
                      >
                        <Link to={slide.ctaLink}>
                          {slide.ctaText}
                          <ArrowRight
                            size={18}
                            className="ml-2 transition-transform group-hover:translate-x-1"
                          />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows */}
        <CarouselPrevious className="left-3 h-10 w-10 border-0 bg-white/90 text-slate-900 shadow-sm hover:bg-white sm:left-6 lg:left-8" />

        <CarouselNext className="right-3 h-10 w-10 border-0 bg-white/90 text-slate-900 shadow-sm hover:bg-white sm:right-6 lg:right-8" />
      </Carousel>

      {/* Interactive slide indicators */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => api?.scrollTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-8 bg-emerald-700"
                : "w-2.5 bg-slate-500/50 hover:bg-slate-700/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
