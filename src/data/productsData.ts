
export interface ProductData {
  id: string;
  name: string;
  category: string;
  type?: string;
  description: string;
  price: string;
  image: string;
  specs: {
    [key: string]: string;
  };
}

export const productCategories = [
  { id: 'all', name: 'All Products' },
  { id: 'solar_panels', name: 'Solar Panels' },
  { id: 'inverters', name: 'Inverters' },
  { id: 'batteries', name: 'Batteries' },
  { id: 'controllers', name: 'Controllers' },
  { id: 'eco_flow_power_stations', name: 'Eco Flow Power Stations' },
  { id: 'electric_bikes_scooters', name: 'Electric Bikes & Scooters' },
];

export const productsData: ProductData[] = [
  // Solar Panels
  {
    id: '1',
    name: 'Monocrystalline Solar Panel 400W',
    category: 'solar_panels',
    type: 'monocrystalline',
    description: 'High-efficiency monocrystalline solar panel with excellent performance in low-light conditions.',
    price: '$299.99',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      wattage: '400W',
      efficiency: '22.5%',
      warranty: '25 years',
      dimensions: '2008×1002×35mm'
    }
  },
  {
    id: '2',
    name: 'Polycrystalline Solar Panel 320W',
    category: 'solar_panels',
    type: 'polycrystalline',
    description: 'Cost-effective polycrystalline solar panel perfect for residential installations.',
    price: '$199.99',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      wattage: '320W',
      efficiency: '19.8%',
      warranty: '20 years',
      dimensions: '1956×992×35mm'
    }
  },
  
  // Inverters
  {
    id: '3',
    name: 'Pure Sine Wave Inverter 3000W',
    category: 'inverters',
    description: 'High-quality pure sine wave inverter for clean and stable power output.',
    price: '$399.99',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      power: '3000W',
      efficiency: '95%',
      warranty: '2 years',
      input: '12V DC'
    }
  },
  {
    id: '4',
    name: 'Grid-Tie Inverter 5000W',
    category: 'inverters',
    description: 'Advanced grid-tie inverter with MPPT technology for maximum energy harvest.',
    price: '$799.99',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      power: '5000W',
      efficiency: '97.5%',
      warranty: '5 years',
      mppt: 'Dual MPPT'
    }
  },

  // Batteries
  {
    id: '5',
    name: 'Lithium Deep Cycle Battery 100Ah',
    category: 'batteries',
    description: 'Long-lasting lithium iron phosphate battery with built-in BMS protection.',
    price: '$599.99',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: '100Ah',
      voltage: '12V',
      cycles: '6000+',
      warranty: '10 years'
    }
  },
  {
    id: '6',
    name: 'AGM Deep Cycle Battery 200Ah',
    category: 'batteries',
    description: 'Reliable AGM battery with maintenance-free operation and long service life.',
    price: '$349.99',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: '200Ah',
      voltage: '12V',
      cycles: '1200+',
      warranty: '3 years'
    }
  },

  // Controllers
  {
    id: '7',
    name: 'MPPT Solar Charge Controller 60A',
    category: 'controllers',
    description: 'Advanced MPPT charge controller with LCD display and multiple protection features.',
    price: '$149.99',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      current: '60A',
      voltage: '12V/24V Auto',
      efficiency: '98%',
      display: 'LCD'
    }
  },
  {
    id: '8',
    name: 'PWM Solar Charge Controller 30A',
    category: 'controllers',
    description: 'Economical PWM charge controller with overload and short circuit protection.',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      current: '30A',
      voltage: '12V/24V',
      efficiency: '85%',
      display: 'LED'
    }
  },

  // Eco Flow Power Stations
  {
    id: '9',
    name: 'EcoFlow DELTA 2 Portable Power Station',
    category: 'eco_flow_power_stations',
    description: 'Powerful portable power station with fast charging and multiple output options.',
    price: '$1,299.99',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: '1024Wh',
      output: '1800W',
      charging: '1 Hour to 80%',
      ports: '15 Outlets'
    }
  },
  {
    id: '10',
    name: 'EcoFlow RIVER 2 Pro Power Station',
    category: 'eco_flow_power_stations',
    description: 'Compact and lightweight power station perfect for outdoor adventures.',
    price: '$799.99',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: '768Wh',
      output: '800W',
      weight: '7.8kg',
      ports: '11 Outlets'
    }
  },

  // Electric Bikes & Scooters
  {
    id: '11',
    name: 'Electric Mountain Bike 750W',
    category: 'electric_bikes_scooters',
    description: 'High-performance electric mountain bike with long-range battery and powerful motor.',
    price: '$1,899.99',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '750W',
      battery: '48V 15Ah',
      range: '60-80km',
      speed: '45 km/h'
    }
  },
  {
    id: '12',
    name: 'Electric Scooter 500W Foldable',
    category: 'electric_bikes_scooters',
    description: 'Portable foldable electric scooter ideal for urban commuting.',
    price: '$599.99',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: {
      motor: '500W',
      battery: '36V 10Ah',
      range: '30-40km',
      weight: '12kg'
    }
  }
];
