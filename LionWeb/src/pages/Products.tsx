import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductDetailModal from '@/components/ProductDetailModal';
import { Sun, Battery, Zap, Settings, Mountain } from 'lucide-react';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', icon: Settings },
    { id: 'solar_panels', name: 'Solar Panels', icon: Sun },
    { id: 'inverters', name: 'Inverters', icon: Zap },
    { id: 'batteries', name: 'Batteries', icon: Battery },
    { id: 'controllers', name: 'Controllers', icon: Settings },
    { id: 'eco_flow_power_stations', name: 'Eco Flow Power Stations', icon: Settings },
    { id: 'electric_bikes_scooters', name: 'Electric Bikes & Scooters', icon: Mountain },
  ];

  const handleTypeFilter = (type: string) => {
    console.log('Filtering by type:', type);
  };

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const allProducts = [
    // Solar Panels - 6 products
    {
      id: "1",
      name: "Monocrystalline Solar Panel 400W",
      description: "High-efficiency monocrystalline solar panel with excellent performance in low-light conditions.",
      price: "$299.99",
      image: "/lovable-uploads/e085099a-b837-435b-8a52-89b306e20b71.png",
      category: "solar_panels",
      specs: { wattage: '400W', efficiency: '22.5%', warranty: '25 years', dimensions: '2008×1002×35mm', type: 'monocrystalline' }
    },
    {
      id: "2",
      name: "Polycrystalline Solar Panel 320W",
      description: "Cost-effective polycrystalline solar panel perfect for residential installations.",
      price: "$199.99",
      image: "/lovable-uploads/e085099a-b837-435b-8a52-89b306e20b71.png",
      category: "solar_panels",
      specs: { wattage: '320W', efficiency: '19.8%', warranty: '20 years', dimensions: '1956×992×35mm', type: 'polycrystalline' }
    },
    {
      id: "sp3",
      name: "Monocrystalline Solar Panel 500W",
      description: "Premium monocrystalline solar panel with superior efficiency and durability.",
      price: "$379.99",
      image: "/lovable-uploads/e085099a-b837-435b-8a52-89b306e20b71.png",
      category: "solar_panels",
      specs: { wattage: '500W', efficiency: '23.2%', warranty: '25 years', type: 'monocrystalline' }
    },
    {
      id: "sp4",
      name: "Flexible Solar Panel 200W",
      description: "Lightweight flexible solar panel ideal for RVs and boats.",
      price: "$249.99",
      image: "/lovable-uploads/e085099a-b837-435b-8a52-89b306e20b71.png",
      category: "solar_panels",
      specs: { wattage: '200W', efficiency: '20.1%', warranty: '15 years', type: 'flexible' }
    },
    {
      id: "sp5",
      name: "Bifacial Solar Panel 450W",
      description: "Advanced bifacial solar panel that captures light from both sides.",
      price: "$349.99",
      image: "/lovable-uploads/e085099a-b837-435b-8a52-89b306e20b71.png",
      category: "solar_panels",
      specs: { wattage: '450W', efficiency: '21.8%', warranty: '25 years', type: 'bifacial' }
    },
    {
      id: "sp6",
      name: "Portable Solar Panel 100W",
      description: "Compact portable solar panel perfect for camping and outdoor activities.",
      price: "$159.99",
      image: "/lovable-uploads/e085099a-b837-435b-8a52-89b306e20b71.png",
      category: "solar_panels",
      specs: { wattage: '100W', efficiency: '18.5%', warranty: '10 years', type: 'portable' }
    },

    // Inverters - 6 products
    {
      id: "3",
      name: "Pure Sine Wave Inverter 3000W",
      description: "High-quality pure sine wave inverter for clean and stable power output.",
      price: "$399.99",
      image: "/lovable-uploads/7e58e5fc-4127-4fb6-97e2-2b8f365a0b52.png",
      category: "inverters",
      specs: { power: '3000W', efficiency: '95%', warranty: '2 years', input: '12V DC' }
    },
    {
      id: "4",
      name: "Grid-Tie Inverter 5000W",
      description: "Advanced grid-tie inverter with MPPT technology for maximum energy harvest.",
      price: "$799.99",
      image: "/lovable-uploads/7e58e5fc-4127-4fb6-97e2-2b8f365a0b52.png",
      category: "inverters",
      specs: { power: '5000W', efficiency: '97.5%', warranty: '5 years', mppt: 'Dual MPPT' }
    },
    {
      id: "inv3",
      name: "Hybrid Solar Inverter 8000W",
      description: "All-in-one hybrid inverter with battery charging capability.",
      price: "$1299.99",
      image: "/lovable-uploads/7e58e5fc-4127-4fb6-97e2-2b8f365a0b52.png",
      category: "inverters",
      specs: { power: '8000W', efficiency: '96%', warranty: '5 years', type: 'hybrid' }
    },
    {
      id: "inv4",
      name: "Micro Inverter 300W",
      description: "Compact micro inverter for individual panel optimization.",
      price: "$149.99",
      image: "/lovable-uploads/7e58e5fc-4127-4fb6-97e2-2b8f365a0b52.png",
      category: "inverters",
      specs: { power: '300W', efficiency: '96.5%', warranty: '25 years', type: 'micro' }
    },
    {
      id: "inv5",
      name: "Off-Grid Inverter 2000W",
      description: "Reliable off-grid inverter for remote installations.",
      price: "$299.99",
      image: "/lovable-uploads/7e58e5fc-4127-4fb6-97e2-2b8f365a0b52.png",
      category: "inverters",
      specs: { power: '2000W', efficiency: '94%', warranty: '3 years', type: 'off-grid' }
    },
    {
      id: "inv6",
      name: "String Inverter 10000W",
      description: "High-capacity string inverter for commercial applications.",
      price: "$1599.99",
      image: "/lovable-uploads/7e58e5fc-4127-4fb6-97e2-2b8f365a0b52.png",
      category: "inverters",
      specs: { power: '10000W', efficiency: '98%', warranty: '10 years', type: 'string' }
    },

    // Batteries - 6 products
    {
      id: "5",
      name: "Lithium Deep Cycle Battery 100Ah",
      description: "Long-lasting lithium iron phosphate battery with built-in BMS protection.",
      price: "$599.99",
      image: "/lovable-uploads/ba836844-7b4f-4bac-be3a-ebb3a72e5cd5.png",
      category: "batteries",
      specs: { capacity: '100Ah', voltage: '12V', cycles: '6000+', warranty: '10 years' }
    },
    {
      id: "6",
      name: "AGM Deep Cycle Battery 200Ah",
      description: "Reliable AGM battery with maintenance-free operation and long service life.",
      price: "$349.99",
      image: "/lovable-uploads/ba836844-7b4f-4bac-be3a-ebb3a72e5cd5.png",
      category: "batteries",
      specs: { capacity: '200Ah', voltage: '12V', cycles: '1200+', warranty: '3 years' }
    },
    {
      id: "bat3",
      name: "Lithium Battery 200Ah",
      description: "High-capacity lithium battery for extended energy storage.",
      price: "$1199.99",
      image: "/lovable-uploads/ba836844-7b4f-4bac-be3a-ebb3a72e5cd5.png",
      category: "batteries",
      specs: { capacity: '200Ah', voltage: '12V', cycles: '8000+', warranty: '12 years' }
    },
    {
      id: "bat4",
      name: "Gel Battery 150Ah",
      description: "Maintenance-free gel battery ideal for solar applications.",
      price: "$279.99",
      image: "/lovable-uploads/ba836844-7b4f-4bac-be3a-ebb3a72e5cd5.png",
      category: "batteries",
      specs: { capacity: '150Ah', voltage: '12V', cycles: '1500+', warranty: '5 years' }
    },
    {
      id: "bat5",
      name: "Lithium Battery Bank 400Ah",
      description: "Complete lithium battery bank system for large installations.",
      price: "$2399.99",
      image: "/lovable-uploads/ba836844-7b4f-4bac-be3a-ebb3a72e5cd5.png",
      category: "batteries",
      specs: { capacity: '400Ah', voltage: '24V', cycles: '6000+', warranty: '10 years' }
    },
    {
      id: "bat6",
      name: "Portable Power Bank 50Ah",
      description: "Compact portable power bank for outdoor activities.",
      price: "$199.99",
      image: "/lovable-uploads/ba836844-7b4f-4bac-be3a-ebb3a72e5cd5.png",
      category: "batteries",
      specs: { capacity: '50Ah', voltage: '12V', cycles: '3000+', warranty: '5 years' }
    },

    // Controllers - 6 products
    {
      id: "7",
      name: "MPPT Solar Charge Controller 60A",
      description: "Advanced MPPT charge controller with LCD display and multiple protection features.",
      price: "$149.99",
      image: "/lovable-uploads/719557bc-b267-4269-837b-0a5b243cdad9.png",
      category: "controllers",
      specs: { current: '60A', voltage: '12V/24V Auto', efficiency: '98%', display: 'LCD' }
    },
    {
      id: "8",
      name: "PWM Solar Charge Controller 30A",
      description: "Economical PWM charge controller with overload and short circuit protection.",
      price: "$49.99",
      image: "/lovable-uploads/719557bc-b267-4269-837b-0a5b243cdad9.png",
      category: "controllers",
      specs: { current: '30A', voltage: '12V/24V', efficiency: '85%', display: 'LED' }
    },
    {
      id: "cont3",
      name: "MPPT Controller 100A",
      description: "High-capacity MPPT controller for large solar installations.",
      price: "$299.99",
      image: "/lovable-uploads/719557bc-b267-4269-837b-0a5b243cdad9.png",
      category: "controllers",
      specs: { current: '100A', voltage: '12V/24V/48V', efficiency: '99%', display: 'LCD+Bluetooth' }
    },
    {
      id: "cont4",
      name: "Smart MPPT Controller 40A",
      description: "WiFi-enabled smart controller with mobile app control.",
      price: "$129.99",
      image: "/lovable-uploads/719557bc-b267-4269-837b-0a5b243cdad9.png",
      category: "controllers",
      specs: { current: '40A', voltage: '12V/24V', efficiency: '97%', display: 'App Control' }
    },
    {
      id: "cont5",
      name: "PWM Controller 20A",
      description: "Basic PWM controller for small solar systems.",
      price: "$29.99",
      image: "/lovable-uploads/719557bc-b267-4269-837b-0a5b243cdad9.png",
      category: "controllers",
      specs: { current: '20A', voltage: '12V/24V', efficiency: '80%', display: 'LED' }
    },
    {
      id: "cont6",
      name: "MPPT Controller 80A",
      description: "Professional MPPT controller with advanced monitoring.",
      price: "$199.99",
      image: "/lovable-uploads/719557bc-b267-4269-837b-0a5b243cdad9.png",
      category: "controllers",
      specs: { current: '80A', voltage: '12V/24V/36V/48V', efficiency: '98.5%', display: 'LCD+RS485' }
    },

    // Eco Flow Power Stations - 6 products
    {
      id: "9",
      name: "EcoFlow DELTA 2 Portable Power Station",
      description: "Powerful portable power station with fast charging and multiple output options.",
      price: "$1,299.99",
      image: "/lovable-uploads/82799ce0-3e35-4a65-b09b-7f9df83a5c31.png",
      category: "eco_flow_power_stations",
      specs: { capacity: '1024Wh', output: '1800W', charging: '1 Hour to 80%', ports: '15 Outlets' }
    },
    {
      id: "10",
      name: "EcoFlow RIVER 2 Pro Power Station",
      description: "Compact and lightweight power station perfect for outdoor adventures.",
      price: "$799.99",
      image: "/lovable-uploads/82799ce0-3e35-4a65-b09b-7f9df83a5c31.png",
      category: "eco_flow_power_stations",
      specs: { capacity: '768Wh', output: '800W', weight: '7.8kg', ports: '11 Outlets' }
    },
    {
      id: "eco3",
      name: "EcoFlow DELTA Max 2000",
      description: "High-capacity power station for extended off-grid living.",
      price: "$1,999.99",
      image: "/lovable-uploads/82799ce0-3e35-4a65-b09b-7f9df83a5c31.png",
      category: "eco_flow_power_stations",
      specs: { capacity: '2016Wh', output: '2400W', charging: '2 Hours to 80%', ports: '17 Outlets' }
    },
    {
      id: "eco4",
      name: "EcoFlow RIVER 2 Max",
      description: "Mid-range power station with expandable capacity.",
      price: "$599.99",
      image: "/lovable-uploads/82799ce0-3e35-4a65-b09b-7f9df83a5c31.png",
      category: "eco_flow_power_stations",
      specs: { capacity: '512Wh', output: '1000W', weight: '6.1kg', ports: '11 Outlets' }
    },
    {
      id: "eco5",
      name: "EcoFlow DELTA Pro 3600",
      description: "Professional-grade power station for home backup.",
      price: "$3,599.99",
      image: "/lovable-uploads/82799ce0-3e35-4a65-b09b-7f9df83a5c31.png",
      category: "eco_flow_power_stations",
      specs: { capacity: '3600Wh', output: '3600W', charging: '2.7 Hours to 80%', ports: '15 Outlets' }
    },
    {
      id: "eco6",
      name: "EcoFlow RIVER 2",
      description: "Entry-level portable power station for basic needs.",
      price: "$299.99",
      image: "/lovable-uploads/82799ce0-3e35-4a65-b09b-7f9df83a5c31.png",
      category: "eco_flow_power_stations",
      specs: { capacity: '256Wh', output: '600W', weight: '3.5kg', ports: '8 Outlets' }
    },

    // Electric Bikes & Scooters - 6 products
    {
      id: "11",
      name: "Electric Mountain Bike 750W",
      description: "High-performance electric mountain bike with long-range battery and powerful motor.",
      price: "$1,899.99",
      image: "/lovable-uploads/a30068ad-c975-40c0-9cf2-9b11ed286dd8.png",
      category: "electric_bikes_scooters",
      specs: { motor: '750W', battery: '48V 15Ah', range: '60-80km', speed: '45 km/h' }
    },
    {
      id: "12",
      name: "Electric Scooter 500W Foldable",
      description: "Portable foldable electric scooter ideal for urban commuting.",
      price: "$599.99",
      image: "/lovable-uploads/a30068ad-c975-40c0-9cf2-9b11ed286dd8.png",
      category: "electric_bikes_scooters",
      specs: { motor: '500W', battery: '36V 10Ah', range: '30-40km', weight: '12kg' }
    },
    {
      id: "bike3",
      name: "Electric City Bike 500W",
      description: "Comfortable electric city bike for daily commuting.",
      price: "$1,299.99",
      image: "/lovable-uploads/a30068ad-c975-40c0-9cf2-9b11ed286dd8.png",
      category: "electric_bikes_scooters",
      specs: { motor: '500W', battery: '36V 12Ah', range: '50-70km', speed: '25 km/h' }
    },
    {
      id: "bike4",
      name: "Electric Fat Tire Bike 1000W",
      description: "Rugged electric fat tire bike for all-terrain adventures.",
      price: "$2,199.99",
      image: "/lovable-uploads/a30068ad-c975-40c0-9cf2-9b11ed286dd8.png",
      category: "electric_bikes_scooters",
      specs: { motor: '1000W', battery: '48V 17.5Ah', range: '70-90km', speed: '50 km/h' }
    },
    {
      id: "scoot3",
      name: "Electric Kick Scooter 350W",
      description: "Lightweight electric kick scooter for short commutes.",
      price: "$399.99",
      image: "/lovable-uploads/a30068ad-c975-40c0-9cf2-9b11ed286dd8.png",
      category: "electric_bikes_scooters",
      specs: { motor: '350W', battery: '36V 7.8Ah', range: '25-30km', weight: '10kg' }
    },
    {
      id: "trike1",
      name: "Electric Tricycle 500W",
      description: "Stable electric tricycle with cargo capacity.",
      price: "$1,799.99",
      image: "/lovable-uploads/a30068ad-c975-40c0-9cf2-9b11ed286dd8.png",
      category: "electric_bikes_scooters",
      specs: { motor: '500W', battery: '48V 20Ah', range: '60-80km', cargo: '100kg' }
    }
  ];

  const getFilteredProducts = () => {
    if (selectedCategory === 'all') {
      return allProducts;
    }
    return allProducts.filter(product => product.category === selectedCategory);
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-green-700 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-gray-300 text-lg">
            Complete solar energy solutions - from panels to accessories
          </p>
        </div>
      </div>

      <div className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
              {categories.map(category => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-4 rounded-lg border transition-colors flex flex-col items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                    <span className="text-sm font-medium text-center">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Solar Panel Type Filter - Only show for solar panels */}
          {selectedCategory === 'solar_panels' && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Solar Panel Types</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => handleTypeFilter('all')}
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
                >
                  All Types
                </button>
                <button
                  onClick={() => handleTypeFilter('polycrystalline')}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                >
                  Polycrystalline
                </button>
                <button
                  onClick={() => handleTypeFilter('monocrystalline')}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                >
                  Monocrystalline
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                specs={product.specs}
                onViewDetails={() => handleViewDetails(product)}
              />
            ))}
          </div>
        </div>
      </div>

      <ProductDetailModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />

      <Footer />
    </div>
  );
};

export default Products;
