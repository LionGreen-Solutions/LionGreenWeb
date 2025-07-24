
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Battery, Zap, Sun, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductDetailModal from "@/components/ProductDetailModal";

const PowerStations = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const powerStationProducts = [
    {
      id: "river-2",
      name: "RIVER 2",
      image: "Images/powerStations/River2.webp",
      capacity: "256Wh",
      acOutput: "300W",
      solarCharging: "110W",
      price: "42,550 ETB",
      description: "Compact portable power for outdoor adventures and emergency backup"
    },
    {
      id: "river-2-max",
      name: "RIVER 2 Max",
      image: "Images/powerStations/River2Max.webp",
      capacity: "512Wh",
      acOutput: "500W",
      solarCharging: "220W",
      price: "77,050 ETB",
      description: "Enhanced RIVER 2 with larger capacity and faster charging"
    },
    {
      id: "river-2-pro",
      name: "RIVER 2 PRO", 
      image: "Images/powerStations/River2Pro.webp",
      capacity: "768Wh",
      acOutput: "800W", 
      solarCharging: "220W",
      price: "94,300 ETB",
      description: "Enhanced power capacity for extended outdoor use with fast charging"
    },
    {
      id: "delta-2",
      name: "DELTA 2 1800W",
      image: "Images/powerStations/Delta2.webp", 
      capacity: "1024Wh",
      acOutput: "1800W",
      solarCharging: "500W",
      price: "132,250 ETB",
      description: "Reliable home backup and off-grid living solution with high capacity"
    },
    {
      id: "delta-2-max",
      name: "DELTA 2 MAX",
      image: "Images/powerStations/Delta2max.jpg",
      capacity: "2048Wh",
      acOutput: "2400W",
      solarCharging: "1000W",
      price: "227,625 ETB",
      description: "Maximum capacity for whole home backup"
    },
    {
      id: "delta-pro", 
      name: "DELTA PRO",
      image: "Images/powerStations/Deltapro.webp",
      capacity: "3600Wh",
      acOutput: "3600W", 
      solarCharging: "500W - 1600W",
      price: "390,189 ETB",
      description: "Advanced power management for professional use with smart features"
    },
    {
      id: "e980",
      name: "E980",
      image: "Images/powerStations/E980.webp",
      capacity: "980Wh",
      acOutput: "500W",
      solarCharging: "500W",
      price: "81,282 ETB",
      description: "EcoFlow’s latest model brings premium features at a budget-friendly price."
    },
    {
      id: "rapid-series",
      name: "RAPID Magnetic Power Bank",
      image: "Images/powerStations/ecoflow-rapid.webp", 
      capacity: "5000mAh, 10000mAh",
      acOutput: "65W",
      // Chargisolarng: "200W - 400W",
      price: "12,650 ETB",
      description: "Mobile Phone Energy Accessory"
    },
    {
      id: "bp100-12v",
      name: "BP100 12V EEV Battery",
      image: "Images/powerStations/BP100.webp",
      capacity: "100Ah",
      acOutput: "100 -300A", 
      solarCharging: "N/A",
      price: "55,200 ETB",
      description: "EcoFlow`s powerful 12V lithium solution."
    },
    {
      id: "camping-light",
      name: "Camping Light",
      image: "Images/powerStations/CampingLight.webp",
      capacity: "3.7V/3600 mA",
      // acOutput: "4000W",
      //solarCharging: "N/A",
      price: "1,495 ETB",
      description: "Constant running time: 168h"
    },
    {
      id: "gan-charger",
      name: "EcoFlow GaN Charger", 
      image: "Images/powerStations/GANCharger.webp",
      capacity: "65W",
      Input: "100V-240V AC 50/60Hz",
      price: "3,680 ETB", 
      description: "Single Port Output USB-C1/C2 Up to 65W, USB-A Up to 60W"
    },
    {
      id: "solar-panel-60w",
      name: "60W Solar Panel",
      image: "Images/powerStations/SolarPanel.png",
      capacity: "60W",
      solarCharging: "Bifacial Design",
      acOutput: "N/A",
      price: "12,567.61 ETB",
      description: "High-efficiency bifacial solar panel for maximum power generation"
    },
    {
      id: "solar-panel-110w",
      name: "110W Solar Panel",
      image: "Images/powerStations/SolarPanel.png",
      capacity: "110W",
      solarCharging: "Solar Compatible", 
      acOutput: "N/A",
      price: "21,535.18 ETB",
      description: "High-efficiency bifacial solar panel for maximum power generation"
    },
    {
      id: "solar-panel-160w",
      name: "160W Solar Panel",
      image: "Images/powerStations/SolarPanel.png",
      capacity: "160W",
      solarCharging: "Bifacial Design",
      acOutput: "N/A",
      price: "29,409.14 ETB",
      description: "High-efficiency bifacial solar panel for maximum power generation"
    },
    {
      id: "solar-panel-220w",
      name: "220W Solar Panel",
      image: "Images/powerStations/SolarPanel.png",
      capacity: "220W",
      solarCharging: "Bifacial Design",
      acOutput: "N/A",
      price: "39,506.99 ETB",
      description: "High-efficiency bifacial solar panel for maximum power generation"
    },
    {
      id: "solar-panel-400w",
      name: "400W Solar Panel",
      image: "Images/powerStations/SolarPanel.png",
      capacity: "400W",
      solarCharging: "Bifacial Design",
      acOutput: "N/A",
      price: "85,000.00 ETB",
      description: "High-efficiency bifacial solar panel for maximum power generation"
    },
    {
      id: "automatic-transfer-switch",
      name: "Automatic Transfer Switch",
      image: "Images/powerStations/ATS.webp",
      Rating: "AC 230V-400V, 50/60Hz",
      TransferActionTime: "≤3 seconds",
      ControlVoltage: "AC 230V",
      price: "19,429.00 ETB",
      description: "Designed to seamlessly switch power sources during electrical outages."
    }
  ];

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-800 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portable Power Stations</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Reliable portable power solutions for outdoor adventures, emergency backup, and off-grid living
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="flex items-center">
              <Battery className="h-5 w-5 mr-2" />
              <span>Long-lasting Battery</span>
            </div>
            <div className="flex items-center">
              <Sun className="h-5 w-5 mr-2" />
              <span>Solar Charging</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              <span>High Power Output</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-600 mb-4">EcoFlow Power Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our complete range of portable power stations and energy solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {powerStationProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-50 p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardHeader className="pb-1 px-3 pt-3">
                  <CardTitle className="text-sm text-green-600 leading-tight">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="px-3 pb-3">
                  <div className="space-y-1 mb-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Capacity:</span>
                      <span className="font-medium text-cyan-600 text-xs">{product.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Output:</span>
                      <span className="font-medium text-cyan-600 text-xs">{product.acOutput}</span>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-green-600 mb-2">{product.price}</div>
                  <Button 
                    onClick={() => handleViewDetails(product)}
                    className="w-full bg-green-600 hover:bg-green-700 text-xs py-1 h-7"
                    size="sm"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl mb-8">Our experts can help you find the perfect power station for your needs</p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Phone className="mr-2 h-5 w-5" />
              Contact Our Experts
            </Button>
          </Link>
        </div>
      </section>

      <ProductDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />

      <Footer />
    </div>
  );
};

export default PowerStations;