export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  features: string[];
  specs: {
    [key: string]: string | number;
  };
  stock: number;
  bestSeller?: boolean;
  isNew?: boolean;
  discount?: number;
}

export const categories = [
  { id: 1, name: "Solar Generators", slug: "solar-generators" },
  { id: 2, name: "Solar Panels", slug: "solar-panels" },
  { id: 3, name: "Power Banks", slug: "power-banks" },
  { id: 4, name: "Solar Lights", slug: "solar-lights" },
  { id: 5, name: "Solar Chargers", slug: "solar-chargers" }
];

export interface Package {
  id: number;
  name: string;
  price: number;
  description: string;
  solarPanels: {
    watts: number;
    quantity: number;
    type: string;
  };
  batteries: {
    capacity: number; // in Wh
    quantity: number;
  };
  inverter: {
    size: number; // in Watts
  };
  suitableFor: string[];
  canPower: string[];
  image: string;
}

export const packages: Package[] = [
  {
    id: 1,
    name: "Basic Home Package",
    price: 799.99,
    description: "Perfect starter package for essential lighting and basic appliances. Ideal for small homes or backup power for critical devices.",
    solarPanels: {
      watts: 300,
      quantity: 2,
      type: "Monocrystalline"
    },
    batteries: {
      capacity: 1000,
      quantity: 1
    },
    inverter: {
      size: 800
    },
    suitableFor: ["Small apartments", "Backup power for outages", "Camping/RV"],
    canPower: ["4 LED lights for 8 hours", "TV for 3 hours", "Mobile device charging", "Wi-Fi router"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Standard Family Package",
    price: 1999.99,
    description: "Comprehensive package for average family homes. Provides reliable power for essential appliances and comfortable living.",
    solarPanels: {
      watts: 400,
      quantity: 4,
      type: "Monocrystalline"
    },
    batteries: {
      capacity: 2400,
      quantity: 1
    },
    inverter: {
      size: 2000
    },
    suitableFor: ["Medium-sized homes", "Daily usage", "Work from home setup"],
    canPower: ["8-10 LED lights", "Refrigerator", "TV and entertainment", "Computers", "Fans", "Small kitchen appliances"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Premium Home Package",
    price: 3999.99,
    description: "Advanced solar power solution for larger homes with higher energy demands. Power almost everything in your home sustainably.",
    solarPanels: {
      watts: 500,
      quantity: 8,
      type: "Monocrystalline"
    },
    batteries: {
      capacity: 5000,
      quantity: 2
    },
    inverter: {
      size: 5000
    },
    suitableFor: ["Large homes", "Full home backup", "Off-grid living"],
    canPower: ["Entire home lighting", "Refrigerator", "Air conditioning (limited hours)", "Water pumps", "All entertainment devices", "Home office equipment", "Kitchen appliances"],
    image: "/placeholder.svg"
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "SunBeam PowerMax 1000",
    category: "solar-generators",
    price: 999.99,
    rating: 4.8,
    image: "/placeholder.svg",
    description: "The SunBeam PowerMax 1000 is a high-capacity portable power station with 1000W output and multiple charging options including solar input. Perfect for camping, emergencies, or off-grid living.",
    features: [
      "1000W AC output",
      "3 x USB ports including USB-C PD",
      "Multiple charging methods",
      "LCD display",
      "Built-in LED light"
    ],
    specs: {
      capacity: "1000Wh",
      weight: "22 lbs",
      dimensions: "13.1 x 9.2 x 11.1 in",
      lifecycle: "3000+ cycles to 80%",
      warranty: "24 months"
    },
    stock: 25,
    bestSeller: true
  },
  {
    id: 2,
    name: "SunBeam SolarFlex 120W",
    category: "solar-panels",
    price: 299.99,
    rating: 4.7,
    image: "/placeholder.svg",
    description: "Foldable 120W solar panel with high efficiency monocrystalline cells. Connect directly to your power station or use with the included controller to charge devices directly.",
    features: [
      "120W output",
      "Foldable design",
      "Waterproof",
      "Built-in kickstand",
      "Includes carrying case"
    ],
    specs: {
      type: "Monocrystalline",
      efficiency: "23%",
      weight: "8.8 lbs",
      folded: "21 x 14 x 1.5 in",
      unfolded: "65 x 21 x 0.2 in",
      warranty: "18 months"
    },
    stock: 42
  },
  {
    id: 3,
    name: "SunBeam MiniCharge 10000",
    category: "power-banks",
    price: 49.99,
    rating: 4.5,
    image: "/placeholder.svg",
    description: "10,000mAh portable power bank with built-in solar panel for emergency charging. Perfect for hiking, camping, or as an everyday carry backup battery.",
    features: [
      "10,000mAh capacity",
      "Integrated solar panel",
      "Dual USB outputs",
      "Rugged design",
      "Water-resistant"
    ],
    specs: {
      capacity: "10,000mAh",
      inputs: "USB-C, Solar",
      outputs: "2 x USB-A",
      charging: "2A max",
      dimensions: "5.5 x 2.8 x 0.6 in",
      weight: "8.8 oz"
    },
    stock: 68,
    discount: 10
  },
  {
    id: 4,
    name: "SunBeam PathLighter Pro",
    category: "solar-lights",
    price: 32.99,
    rating: 4.6,
    image: "/placeholder.svg",
    description: "Motion-activated solar pathway lights with extra-long runtime and bright LED output. Set of 6 weather-resistant lights perfect for garden paths, driveways or patios.",
    features: [
      "Motion detection",
      "3 lighting modes",
      "Extra capacity battery",
      "Set of 6 lights",
      "Stainless steel construction"
    ],
    specs: {
      brightness: "100 lumens each",
      runtime: "Up to 12 hours",
      waterproof: "IP65 rated",
      sensor: "12ft detection range",
      height: "16 inches"
    },
    stock: 84
  },
  {
    id: 5,
    name: "SunBeam Expedition 2400",
    category: "solar-generators",
    price: 1999.99,
    rating: 4.9,
    image: "/placeholder.svg",
    description: "Our most powerful portable power station with 2400Wh capacity and 2000W output. Features fast charging, app control, and expandable battery modules.",
    features: [
      "2400Wh capacity",
      "2000W pure sine wave inverter",
      "Wi-Fi connectivity with app control",
      "Pass-through charging",
      "Expandable with additional battery modules"
    ],
    specs: {
      capacity: "2400Wh",
      output: "2000W (3500W surge)",
      inputs: "AC, Solar (1200W max), Car",
      outlets: "4 x AC, 2 x USB-C PD, 2 x USB-A, 1 x 12V",
      weight: "43 lbs",
      dimensions: "15.5 x 11 x 12.5 in"
    },
    stock: 15,
    isNew: true
  },
  {
    id: 6,
    name: "SunBeam SolarFold 60W",
    category: "solar-chargers",
    price: 149.99,
    rating: 4.4,
    image: "/placeholder.svg",
    description: "Compact 60W foldable solar charger with USB and USB-C outputs. Perfect for charging phones, tablets, and small power banks directly from the sun.",
    features: [
      "60W output",
      "Ultra-portable design",
      "Direct device charging",
      "Water-resistant",
      "Integrated stand"
    ],
    specs: {
      type: "Monocrystalline",
      efficiency: "22%",
      weight: "3.2 lbs",
      folded: "11.5 x 6.8 x 1.2 in",
      unfolded: "26.8 x 11.5 x 0.2 in"
    },
    stock: 55
  },
  {
    id: 7,
    name: "SunBeam SolarPanel 200W",
    category: "solar-panels",
    price: 399.99,
    rating: 4.8,
    image: "/placeholder.svg",
    description: "High-capacity rigid 200W solar panel for permanent or semi-permanent installation. ETFE coating and high-efficiency cells for maximum power output.",
    features: [
      "200W output",
      "ETFE coating for durability",
      "IP68 waterproof junction box",
      "Pre-drilled mounting holes",
      "10-year performance warranty"
    ],
    specs: {
      type: "Monocrystalline",
      efficiency: "23.5%",
      weight: "24 lbs",
      dimensions: "65 x 26 x 1.4 in",
      connector: "MC4 compatible"
    },
    stock: 30
  },
  {
    id: 8,
    name: "SunBeam CampLight Set",
    category: "solar-lights",
    price: 79.99,
    rating: 4.7,
    image: "/placeholder.svg",
    description: "Set of 4 portable solar camping lights with multiple brightness settings and hanging hooks. Each light can run up to 40 hours on a single charge.",
    features: [
      "Set of 4 lights",
      "3 brightness settings",
      "Built-in solar panels",
      "USB rechargeable",
      "Water-resistant"
    ],
    specs: {
      brightness: "Up to 180 lumens each",
      runtime: "10-40 hours per charge",
      charging: "6-8 hours of sunlight",
      waterproof: "IPX4 rated",
      weight: "8 oz each"
    },
    stock: 48,
    bestSeller: true
  }
];

export const featuredProducts = [1, 5, 8];

// Create more granular product categories for filtering
export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  subcategories?: ProductSubcategory[];
}

export interface ProductSubcategory {
  id: number;
  name: string;
  slug: string;
  filters?: {
    type: string;
    options: string[];
  }[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 1,
    name: "Solar Generators",
    slug: "solar-generators",
    subcategories: [
      {
        id: 101,
        name: "Portable",
        slug: "portable-generators",
        filters: [
          {
            type: "capacity",
            options: ["Small (< 500Wh)", "Medium (500-1500Wh)", "Large (> 1500Wh)"]
          }
        ]
      },
      {
        id: 102,
        name: "Home Backup",
        slug: "home-backup-generators",
        filters: [
          {
            type: "capacity",
            options: ["Basic (1-2kWh)", "Standard (2-5kWh)", "Advanced (5+kWh)"]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Solar Panels",
    slug: "solar-panels",
    subcategories: [
      {
        id: 201,
        name: "Fixed Panels",
        slug: "fixed-panels",
        filters: [
          {
            type: "wattage",
            options: ["20W", "30W", "50W", "100W", "200W", "300W", "400W", "500W+"]
          },
          {
            type: "panel-type",
            options: ["Monocrystalline", "Polycrystalline", "Thin Film"]
          }
        ]
      },
      {
        id: 202,
        name: "Portable Panels",
        slug: "portable-panels",
        filters: [
          {
            type: "wattage",
            options: ["20W", "40W", "60W", "100W", "120W+"]
          },
          {
            type: "foldable",
            options: ["Yes", "No"]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Power Banks",
    slug: "power-banks",
    subcategories: [
      {
        id: 301,
        name: "Small Capacity",
        slug: "small-capacity",
        filters: [
          {
            type: "capacity",
            options: ["5000mAh", "10000mAh", "15000mAh", "20000mAh"]
          }
        ]
      },
      {
        id: 302,
        name: "Large Capacity",
        slug: "large-capacity",
        filters: [
          {
            type: "capacity",
            options: ["25000mAh+", "50000mAh+"]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Solar Lights",
    slug: "solar-lights",
    subcategories: [
      {
        id: 401,
        name: "Pathway Lights",
        slug: "pathway-lights",
        filters: [
          {
            type: "brightness",
            options: ["< 50 Lumens", "50-100 Lumens", "100+ Lumens"]
          }
        ]
      },
      {
        id: 402,
        name: "String Lights",
        slug: "string-lights",
        filters: [
          {
            type: "length",
            options: ["< 20 ft", "20-50 ft", "50+ ft"]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Solar Chargers",
    slug: "solar-chargers",
    subcategories: [
      {
        id: 501,
        name: "Phone Chargers",
        slug: "phone-chargers",
        filters: [
          {
            type: "wattage",
            options: ["5W", "7W", "10W", "15W+"]
          }
        ]
      },
      {
        id: 502,
        name: "Laptop Chargers",
        slug: "laptop-chargers",
        filters: [
          {
            type: "wattage",
            options: ["30W", "45W", "60W", "100W+"]
          }
        ]
      }
    ]
  }
];

// Add new products with more specific categorization
export const expandedProducts: Product[] = [
  // Solar Panels with specific wattage options
  {
    id: 101,
    name: "SunBeam Solar Panel 20W",
    category: "solar-panels",
    price: 49.99,
    rating: 4.3,
    image: "/placeholder.svg",
    description: "Compact 20W solar panel ideal for small devices and portable setups.",
    features: [
      "20W output",
      "Monocrystalline cells",
      "Weatherproof",
      "Compact design",
      "2-year warranty"
    ],
    specs: {
      type: "Monocrystalline",
      efficiency: "21%",
      weight: "1.2 lbs",
      dimensions: "14 x 12 x 0.8 inches",
      warranty: "24 months"
    },
    stock: 35
  },
  {
    id: 102,
    name: "SunBeam Solar Panel 50W",
    category: "solar-panels",
    price: 89.99,
    rating: 4.5,
    image: "/placeholder.svg",
    description: "Mid-size 50W solar panel for versatile solar charging needs.",
    features: [
      "50W output",
      "Monocrystalline cells",
      "Weatherproof",
      "MC4 connectors",
      "3-year warranty"
    ],
    specs: {
      type: "Monocrystalline",
      efficiency: "22%",
      weight: "3.1 lbs",
      dimensions: "22 x 18 x 0.8 inches",
      warranty: "36 months"
    },
    stock: 28
  },
  {
    id: 103,
    name: "SunBeam Solar Panel 100W",
    category: "solar-panels",
    price: 169.99,
    rating: 4.6,
    image: "/placeholder.svg",
    description: "Efficient 100W solar panel for charging power stations and larger devices.",
    features: [
      "100W output",
      "Monocrystalline cells",
      "High efficiency",
      "Durable construction",
      "4-year warranty"
    ],
    specs: {
      type: "Monocrystalline",
      efficiency: "22.5%",
      weight: "6.2 lbs",
      dimensions: "40 x 20 x 0.9 inches",
      warranty: "48 months"
    },
    stock: 22
  },
  {
    id: 104,
    name: "SunBeam Solar Panel 200W",
    category: "solar-panels",
    price: 329.99,
    rating: 4.7,
    image: "/placeholder.svg",
    description: "High-power 200W solar panel for home and off-grid applications.",
    features: [
      "200W output",
      "Monocrystalline cells",
      "Weather-resistant",
      "MC4 connectors",
      "5-year warranty"
    ],
    specs: {
      type: "Monocrystalline",
      efficiency: "23%",
      weight: "12.4 lbs",
      dimensions: "59 x 26 x 1.4 inches",
      warranty: "60 months"
    },
    stock: 18
  },
  {
    id: 105,
    name: "SunBeam Solar Panel 300W",
    category: "solar-panels",
    price: 489.99,
    rating: 4.8,
    image: "/placeholder.svg",
    description: "Premium 300W solar panel for maximum power generation.",
    features: [
      "300W output",
      "Monocrystalline cells",
      "High efficiency",
      "Robust design",
      "5-year warranty"
    ],
    specs: {
      type: "Monocrystalline",
      efficiency: "23.5%",
      weight: "18.6 lbs",
      dimensions: "68 x 30 x 1.4 inches",
      warranty: "60 months"
    },
    stock: 15
  },
  {
    id: 106,
    name: "SunBeam Solar Panel 400W",
    category: "solar-panels",
    price: 649.99,
    rating: 4.9,
    image: "/placeholder.svg",
    description: "Top-of-the-line 400W solar panel for professional solar setups.",
    features: [
      "400W output",
      "Monocrystalline cells",
      "Extreme efficiency",
      "Durable construction",
      "5-year warranty"
    ],
    specs: {
      type: "Monocrystalline",
      efficiency: "24%",
      weight: "24.8 lbs",
      dimensions: "79 x 34 x 1.4 inches",
      warranty: "60 months"
    },
    stock: 12
  },
  {
    id: 107,
    name: "SunBeam Solar Panel 500W",
    category: "solar-panels",
    price: 809.99,
    rating: 5.0,
    image: "/placeholder.svg",
    description: "Ultimate 500W solar panel for large-scale solar projects.",
    features: [
      "500W output",
      "Monocrystalline cells",
      "Unmatched efficiency",
      "Heavy-duty design",
      "5-year warranty"
    ],
    specs: {
      type: "Monocrystalline",
      efficiency: "24.5%",
      weight: "31 lbs",
      dimensions: "90 x 38 x 1.4 inches",
      warranty: "60 months"
    },
    stock: 10
  },
  // Power Banks with specific capacity options
  {
    id: 201,
    name: "SunBeam Power Bank 5000mAh",
    category: "power-banks",
    price: 29.99,
    rating: 4.2,
    image: "/placeholder.svg",
    description: "Ultra-compact 5000mAh power bank for on-the-go charging.",
    features: [
      "5000mAh capacity",
      "Dual USB outputs",
      "Fast charging",
      "Pocket-sized",
      "1-year warranty"
    ],
    specs: {
      capacity: "5000mAh",
      inputs: "USB-C",
      outputs: "2 x USB-A",
      charging: "2A max",
      dimensions: "4.5 x 2.5 x 0.5 inches",
      weight: "4.4 oz"
    },
    stock: 40
  },
  {
    id: 202,
    name: "SunBeam Power Bank 10000mAh",
    category: "power-banks",
    price: 49.99,
    rating: 4.5,
    image: "/placeholder.svg",
    description: "Versatile 10000mAh power bank for phones, tablets, and more.",
    features: [
      "10000mAh capacity",
      "USB-C PD",
      "Dual USB outputs",
      "LED indicator",
      "2-year warranty"
    ],
    specs: {
      capacity: "10000mAh",
      inputs: "USB-C, Micro USB",
      outputs: "2 x USB-A, USB-C",
      charging: "3A max",
      dimensions: "5.5 x 2.8 x 0.6 inches",
      weight: "8.8 oz"
    },
    stock: 35
  },
  {
    id: 203,
    name: "SunBeam Power Bank 15000mAh",
    category: "power-banks",
    price: 69.99,
    rating: 4.6,
    image: "/placeholder.svg",
    description: "High-capacity 15000mAh power bank for extended use.",
    features: [
      "15000mAh capacity",
      "USB-C PD",
      "Dual USB outputs",
      "Quick Charge 3.0",
      "2-year warranty"
    ],
    specs: {
      capacity: "15000mAh",
      inputs: "USB-C, Micro USB",
      outputs: "2 x USB-A, USB-C",
      charging: "3A max",
      dimensions: "6.3 x 3.1 x 0.7 inches",
      weight: "12.3 oz"
    },
    stock: 30
  },
  {
    id: 204,
    name: "SunBeam Power Bank 20000mAh",
    category: "power-banks",
    price: 89.99,
    rating: 4.7,
    image: "/placeholder.svg",
    description: "Massive 20000mAh power bank for all your charging needs.",
    features: [
      "20000mAh capacity",
      "USB-C PD",
      "Dual USB outputs",
      "Digital display",
      "2-year warranty"
    ],
    specs: {
      capacity: "20000mAh",
      inputs: "USB-C, Micro USB",
      outputs: "2 x USB-A, USB-C",
      charging: "3A max",
      dimensions: "6.7 x 3.3 x 0.9 inches",
      weight: "15.9 oz"
    },
    stock: 25
  },
  {
    id: 205,
    name: "SunBeam Power Bank 25000mAh",
    category: "power-banks",
    price: 109.99,
    rating: 4.8,
    image: "/placeholder.svg",
    description: "Extra-large 25000mAh power bank for long trips and emergencies.",
    features: [
      "25000mAh capacity",
      "USB-C PD",
      "Dual USB outputs",
      "Rugged design",
      "2-year warranty"
    ],
    specs: {
      capacity: "25000mAh",
      inputs: "USB-C, Micro USB",
      outputs: "2 x USB-A, USB-C",
      charging: "3A max",
      dimensions: "7.1 x 3.5 x 1.1 inches",
      weight: "19.4 oz"
    },
    stock: 20
  },
  {
    id: 206,
    name: "SunBeam Power Bank 50000mAh",
    category: "power-banks",
    price: 199.99,
    rating: 4.9,
    image: "/placeholder.svg",
    description: "Ultimate 50000mAh power bank for powering multiple devices for days.",
    features: [
      "50000mAh capacity",
      "USB-C PD",
      "Dual USB outputs",
      "LCD display",
      "2-year warranty"
    ],
    specs: {
      capacity: "50000mAh",
      inputs: "USB-C, DC",
      outputs: "2 x USB-A, USB-C, DC",
      charging: "3A max",
      dimensions: "8.7 x 4.3 x 1.6 inches",
      weight: "35.3 oz"
    },
    stock: 15
  },
  // Solar Lights with specific brightness options
  {
    id: 301,
    name: "SunBeam Pathway Light 50 Lumens",
    category: "solar-lights",
    price: 24.99,
    rating: 4.3,
    image: "/placeholder.svg",
    description: "Subtle 50-lumen pathway light for gentle illumination.",
    features: [
      "50 lumens",
      "Warm white light",
      "Weatherproof",
      "Easy installation",
      "1-year warranty"
    ],
    specs: {
      brightness: "50 lumens",
      runtime: "Up to 8 hours",
      waterproof: "IP65 rated",
      height: "14 inches"
    },
    stock: 50
  },
  {
    id: 302,
    name: "SunBeam Pathway Light 100 Lumens",
    category: "solar-lights",
    price: 34.99,
    rating: 4.5,
    image: "/placeholder.svg",
    description: "Bright 100-lumen pathway light for enhanced visibility.",
    features: [
      "100 lumens",
      "Cool white light",
      "Weatherproof",
      "Motion sensor",
      "1-year warranty"
    ],
    specs: {
      brightness: "100 lumens",
      runtime: "Up to 10 hours",
      waterproof: "IP65 rated",
      sensor: "10ft detection range",
      height: "16 inches"
    },
    stock: 45
  },
  {
    id: 303,
    name: "SunBeam Pathway Light 150 Lumens",
    category: "solar-lights",
    price: 44.99,
    rating: 4.6,
    image: "/placeholder.svg",
    description: "Powerful 150-lumen pathway light for maximum brightness.",
    features: [
      "150 lumens",
      "Adjustable brightness",
      "Weatherproof",
      "Motion sensor",
      "1-year warranty"
    ],
    specs: {
      brightness: "150 lumens",
      runtime: "Up to 12 hours",
      waterproof: "IP65 rated",
      sensor: "12ft detection range",
      height: "18 inches"
    },
    stock: 40
  },
  // Solar Chargers with specific wattage options
  {
    id: 401,
    name: "SunBeam Phone Charger 5W",
    category: "solar-chargers",
    price: 29.99,
    rating: 4.2,
    image: "/placeholder.svg",
    description: "Basic 5W solar charger for phones and small devices.",
    features: [
      "5W output",
      "USB output",
      "Compact design",
      "Water-resistant",
      "1-year warranty"
    ],
    specs: {
      type: "Monocrystalline",
      efficiency: "18%",
      weight: "0.4 lbs",
      dimensions: "6 x 4 x 0.2 inches"
    },
    stock: 55
  },
  {
    id: 402,
    name: "SunBeam Phone Charger 7W",
    category: "solar-chargers",
    price: 39.99,
    rating: 4.4,
    image: "/placeholder.svg",
    description: "Improved 7W solar charger for faster phone charging.",
    features: [
      "7W output",
      "USB output",
      "Foldable design",
      "Water-resistant",
      "1-year warranty"
    ],
    specs: {
      type: "Monocrystalline",
      efficiency: "20%",
      weight: "0.6 lbs",
      dimensions: "8 x 5 x 0.2 inches"
    },
    stock: 50
  },
  {
    id: 403,
    name: "SunBeam Phone Charger 10W",
    category: "solar-chargers",
    price: 49.99,
    rating: 4.5,
    image: "/placeholder.svg",
    description: "Efficient 10W solar charger for phones and tablets.",
    features: [
      "10W output",
      "USB output",
      "Foldable design",
      "Water-resistant",
      "1-year warranty"
    ],
    specs: {
      type: "Monocrystalline",
      efficiency: "22%",
      weight: "0.8 lbs",
      dimensions: "10 x 6 x 0.2 inches"
    },
    stock: 45
  },
  {
    id: 404,
    name: "SunBeam Phone Charger 15W",
    category: "solar-chargers",
    price: 59.99,
    rating: 4.7,
    image: "/placeholder.svg",
    description: "High-power 15W solar charger for rapid device charging.",
    features: [
      "15W output",
      "USB-A and USB-C outputs",
      "Foldable design",
      "Water-resistant",
      "2-year warranty"
    ],
    specs: {
      type: "Monocrystalline",
      efficiency: "23%",
      weight: "1.2 lbs",
      dimensions: "12 x 8 x 0.2 inches"
    },
    stock: 40
  }
];
