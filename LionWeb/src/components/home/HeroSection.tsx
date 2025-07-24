
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Power Your Adventures<br />with Solar Energy
            </h1>
            <p className="text-lg mb-8 text-gray-200 max-w-xl">
              Discover sustainable solar solutions for your home, business, and mobility needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-sunbeam-400 hover:bg-sunbeam-500 text-navy-900 font-semibold">
                  Shop Now
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img alt="Solar panels and technology" className="rounded-lg shadow-lg mx-auto w-full h-96 object-cover" src="https://img.etimg.com/thumb/width-420,height-315,imgsize-118242,resizemode-75,msid-116180065/industry/renewables/govt-announces-almm-for-pv-cells-to-push-indias-green-energy-transition/renew-has-been-producing-renewable-energy-through-solar-and-wind-driven-projects-.jpg" />
              <div className="absolute -bottom-4 -right-4 bg-sunbeam-400 text-navy-900 px-4 py-2 rounded-lg shadow-lg font-semibold">
                Eco-friendly Power
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
