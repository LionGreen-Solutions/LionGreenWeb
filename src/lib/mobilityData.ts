export interface MobilityProduct {
  id: number;
  name: string;
  category: string;
  basePrice: number;
  rating: number;
  image: string;
  description: string;
  features: string[];
  specs: {
    weight?: string;
    dimensions?: string;
    motor?: string;
    battery?: string;
    tires?: string;
    absorber?: string;
    maxSpeed?: string;
    loadCapacity?: string;
    chargingTime?: string;
    optionalColors?: string[];
    packagingSize?: string;
    containerQty?: string;
    warranty?: string;
    [key: string]: string | number | string[] | undefined;
  };
  batteryOptions?: {
    type: string;
    capacity: string;
    price: number;
  }[];
  stock: number;
  bestSeller?: boolean;
  isNew?: boolean;
  discount?: number;
  range?: number; // Range in miles/km
  maxSpeed?: number; // Max speed in mph/kph
  chargingTime?: number; // Charging time in hours
}

export const mobilityCategories = [
  { id: 1, name: "Electric Bikes", slug: "electric-bikes" },
  { id: 2, name: "Electric Scooters", slug: "electric-scooters" },
  { id: 3, name: "Electric Motorcycles", slug: "electric-motorcycles" },
  { id: 4, name: "Electric Tricycles - Passenger", slug: "electric-tricycles-passenger" },
  { id: 5, name: "Electric Tricycles - Cargo", slug: "electric-tricycles-cargo" }
];

export const mobilityProducts: MobilityProduct[] = [
  {
    id: 1,
    name: "A0(2000W)",
    category: "electric-tricycles-passenger",
    basePrice: 360000,
    rating: 4.8,
    image: "Images/mobility/A0.webp",
    description: "Spacious electric tricycle designed for passenger transport and commercial use.",
    features: [
      "2000W high-power motor",
      // "All-terrain fat tires",
      // "Premium suspension system",
      // "LED headlight and display"
    ],
    specs: {
      weight: "325 Kg",
      dimensions: "2900 * 1000 * 1700 mm",
      motor: "2000W",
      battery: "72V 60Ah, Lead Acid",
      tires: "400-12 Tires",
      //absorber: "Front suspension fork",
      maxSpeed: "50 Km/h",
      loadCapacity: "1000 Kg, 4 Passengers+1 Driver",
      chargingTime: "6-8 hours",
      optionalColors: ["Blue", "Yellow", "Red", "Navy", "Grey"],
      packagingSize: "2500 x 1100 x 850 mm",
      //containerQty: "45 units",
      warranty: "One-year replacement for non-human damage"
    },
    batteryOptions: [
      { type: "Lead Acid", capacity: "72V 60Ah", price: 360000 },
      { type: "Lithium", capacity: "72V 60Ah", price: 400000 },
      { type: "Lithium", capacity: "72V 100Ah", price: 470000 },
      { type: "Lithium", capacity: "72V 140Ah", price: 498000 },
    ],
    stock: 15,
    bestSeller: true,
    range: 50,
    maxSpeed: 50,
    chargingTime: 7
  },

 {
    id: 23,
    name: "A0(3000W)",
    category: "electric-tricycles-passenger",
    basePrice: 385000,
    rating: 4.8,
    image: "Images/mobility/A0.webp",
    description: "Spacious electric tricycle designed for passenger transport and commercial use.",
    features: [
      "2000W high-power motor",
      // "All-terrain fat tires",
      // "Premium suspension system",
      // "LED headlight and display"
    ],
    specs: {
      weight: "325 Kg",
      dimensions: "2900 * 1000 * 1700 mm",
      motor: "2000W",
      battery: "72V 60Ah, Lead Acid",
      tires: "400-12 Tires",
      //absorber: "Front suspension fork",
      maxSpeed: "50 Km/h",
      loadCapacity: "1000 Kg, 4 Passengers+1 Driver",
      chargingTime: "6-8 hours",
      optionalColors: ["Blue", "Yellow", "Red", "Navy", "Grey"],
      packagingSize: "2500 x 1100 x 850 mm",
      //containerQty: "45 units",
      warranty: "One-year replacement for non-human damage"
    },
    batteryOptions: [
      { type: "Lead Acid", capacity: "72V 60Ah", price: 385000 },
      { type: "Lithium", capacity: "72V 60Ah", price: 426000 },
      { type: "Lithium", capacity: "72V 100Ah", price: 496000 },
      { type: "Lithium", capacity: "72V 140Ah", price: 523000 },
    ],
    stock: 15,
    bestSeller: true,
    range: 50,
    maxSpeed: 50,
    chargingTime: 7
  }, 

{
    id: 2,
    name: "A1(2000W)",
    category: "electric-tricycles-passenger",
    basePrice: 490000,
    rating: 4.8,
    image: "Images/mobility/A1.png",
    description: "Spacious electric tricycle designed for passenger transport and commercial use.",
    features: [
      "2000W high-power motor",
      // "All-terrain fat tires",
      // "Premium suspension system",
      // "LED headlight and display"
    ],
    specs: {
      weight: "400 Kg",
      dimensions: "2677 * 1359 * 1740 mm",
      motor: "2000W",
      battery: "72V 60Ah Lead Acid",
      tires: "400-12 Tires",
      //absorber: "Front suspension fork",
      maxSpeed: "50 Km/h",
      loadCapacity: "1000 Kg, 3 Passengers+1 Driver",
      chargingTime: "6-8 hours",
      optionalColors: ["Blue", "Red", "Navy", "Grey"],
      packagingSize: "2200 x 1300 x 1500 mm",
      //containerQty: "45 units",
      warranty: "One-year replacement for non-human damage"
    },
    batteryOptions: [
      { type: "Lead Acid", capacity: "72V 60Ah", price: 392000 },
      { type: "Lithium", capacity: "72V 60Ah", price: 432000 },
      { type: "Lithium", capacity: "72V 100Ah", price: 502000 },
      { type: "Lithium", capacity: "72V 140Ah", price: 490000 }
    ],
    stock: 15,
    bestSeller: true,
    range: 205,
    maxSpeed: 50,
    chargingTime: 7
  },

{
    id: 22,
    name: "A1(3000W)",
    category: "electric-tricycles-passenger",
    basePrice: 530000,
    rating: 4.8,
    image: "Images/mobility/A1.png",
    description: "Spacious electric tricycle designed for passenger transport and commercial use.",
    features: [
      "2000W high-power motor",
      // "All-terrain fat tires",
      // "Premium suspension system",
      // "LED headlight and display"
    ],
    specs: {
      weight: "400 Kg",
      dimensions: "2677 * 1359 * 1740 mm",
      motor: "2000W",
      battery: "72V 60Ah Lead Acid",
      tires: "400-12 Tires",
      //absorber: "Front suspension fork",
      maxSpeed: "50 Km/h",
      loadCapacity: "1000 Kg, 3 Passengers+1 Driver",
      chargingTime: "6-8 hours",
      optionalColors: ["Blue", "Red", "Navy", "Grey"],
      packagingSize: "2200 x 1300 x 1500 mm",
      //containerQty: "45 units",
      warranty: "One-year replacement for non-human damage"
    },
    batteryOptions: [
      { type: "Lead Acid", capacity: "72V 60Ah", price: 417000 },
      { type: "Lithium", capacity: "72V 60Ah", price: 459000 },
      { type: "Lithium", capacity: "72V 100Ah", price: 528000 },
      { type: "Lithium", capacity: "72V 140Ah", price: 530000 }
      
    ],
    stock: 15,
    bestSeller: true,
    range: 205,
    maxSpeed: 50,
    chargingTime: 7
  },

  {
    id: 24,
    name: "A1(4000W)",
    category: "electric-tricycles-passenger",
    basePrice: 590000,
    rating: 4.8,
    image: "Images/mobility/A1.png",
    description: "Spacious electric tricycle designed for passenger transport and commercial use.",
    features: [
      "2000W high-power motor",
      // "All-terrain fat tires",
      // "Premium suspension system",
      // "LED headlight and display"
    ],
    specs: {
      weight: "400 Kg",
      dimensions: "2677 * 1359 * 1740 mm",
      motor: "2000W",
      battery: "72V 60Ah Lead Acid",
      tires: "400-12 Tires",
      //absorber: "Front suspension fork",
      maxSpeed: "50 Km/h",
      loadCapacity: "1000 Kg, 3 Passengers+1 Driver",
      chargingTime: "6-8 hours",
      optionalColors: ["Blue", "Red", "Navy", "Grey"],
      packagingSize: "2200 x 1300 x 1500 mm",
      //containerQty: "45 units",
      warranty: "One-year replacement for non-human damage"
    },
    batteryOptions: [
      { type: "Lead Acid", capacity: "72V 60Ah", price: 517000 },
      { type: "Lithium", capacity: "72V 60Ah", price: 559000 },
      { type: "Lithium", capacity: "72V 100Ah", price: 628000 },
      { type: "Lithium", capacity: "72V 140Ah", price: 590000 }
      
    ],
    stock: 15,
    bestSeller: true,
    range: 205,
    maxSpeed: 50,
    chargingTime: 7
  },

{
    id: 25,
    name: "A1L(2000W)",
    category: "electric-tricycles-passenger",
    basePrice: 520000,
    rating: 4.8,
    image: "Images/mobility/A1L.jpg",
    description: "Spacious electric tricycle designed for passenger transport and commercial use.",
    features: [
      "2000W high-power motor",
      // "All-terrain fat tires",
      // "Premium suspension system",
      // "LED headlight and display"
    ],
    specs: {
      weight: "400 Kg",
      dimensions: "2677 * 1359 * 1740 mm",
      motor: "2000W",
      battery: "72V 60Ah Lead Acid",
      tires: "400-12 Tires",
      //absorber: "Front suspension fork",
      maxSpeed: "50 Km/h",
      loadCapacity: "1000 Kg, 3 Passengers+1 Driver",
      chargingTime: "6-8 hours",
      optionalColors: ["Blue", "Red", "Navy", "Grey"],
      packagingSize: "2200 x 1300 x 1500 mm",
      //containerQty: "45 units",
      warranty: "One-year replacement for non-human damage"
    },
    batteryOptions: [
      { type: "Lead Acid", capacity: "72V 60Ah", price: 517000 },
      { type: "Lithium", capacity: "72V 60Ah", price: 559000 },
      { type: "Lithium", capacity: "72V 100Ah", price: 628000 },
      { type: "Lithium", capacity: "72V 140Ah", price: 650000 }
      
    ],
    stock: 15,
    bestSeller: true,
    range: 205,
    maxSpeed: 50,
    chargingTime: 7
  },

{
    id: 26,
    name: "A1L(3000W)",
    category: "electric-tricycles-passenger",
    basePrice: 590000,
    rating: 4.8,
    image: "Images/mobility/A1L.jpg",
    description: "Spacious electric tricycle designed for passenger transport and commercial use.",
    features: [
      "2000W high-power motor",
      // "All-terrain fat tires",
      // "Premium suspension system",
      // "LED headlight and display"
    ],
    specs: {
      weight: "400 Kg",
      dimensions: "2677 * 1359 * 1740 mm",
      motor: "2000W",
      battery: "72V 60Ah Lead Acid",
      tires: "400-12 Tires",
      //absorber: "Front suspension fork",
      maxSpeed: "50 Km/h",
      loadCapacity: "1000 Kg, 3 Passengers+1 Driver",
      chargingTime: "6-8 hours",
      optionalColors: ["Blue", "Red", "Navy", "Grey"],
      packagingSize: "2200 x 1300 x 1500 mm",
      //containerQty: "45 units",
      warranty: "One-year replacement for non-human damage"
    },
    batteryOptions: [
      { type: "Lead Acid", capacity: "72V 60Ah", price: 517000 },
      { type: "Lithium", capacity: "72V 60Ah", price: 559000 },
      { type: "Lithium", capacity: "72V 100Ah", price: 628000 },
      { type: "Lithium", capacity: "72V 140Ah", price: 590000 }
      
    ],
    stock: 15,
    bestSeller: true,
    range: 205,
    maxSpeed: 50,
    chargingTime: 7
  },

{
    id: 27,
    name: "A1L(4000W)",
    category: "electric-tricycles-passenger",
    basePrice: 650000,
    rating: 4.8,
    image: "Images/mobility/A1L.jpg",
    description: "Spacious electric tricycle designed for passenger transport and commercial use.",
    features: [
      "2000W high-power motor",
      // "All-terrain fat tires",
      // "Premium suspension system",
      // "LED headlight and display"
    ],
    specs: {
      weight: "400 Kg",
      dimensions: "2677 * 1359 * 1740 mm",
      motor: "2000W",
      battery: "72V 60Ah Lead Acid",
      tires: "400-12 Tires",
      //absorber: "Front suspension fork",
      maxSpeed: "50 Km/h",
      loadCapacity: "1000 Kg, 3 Passengers+1 Driver",
      chargingTime: "6-8 hours",
      optionalColors: ["Blue", "Red", "Navy", "Grey"],
      packagingSize: "2200 x 1300 x 1500 mm",
      //containerQty: "45 units",
      warranty: "One-year replacement for non-human damage"
    },
    batteryOptions: [
      { type: "Lead Acid", capacity: "72V 60Ah", price: 517000 },
      { type: "Lithium", capacity: "72V 60Ah", price: 559000 },
      { type: "Lithium", capacity: "72V 100Ah", price: 628000 },
      { type: "Lithium", capacity: "72V 140Ah", price: 650000 }
      
    ],
    stock: 15,
    bestSeller: true,
    range: 205,
    maxSpeed: 50,
    chargingTime: 7
  },

{
    id: 3,
    name: "B001",
    category: "electric-bikes",
    basePrice: 80000,
    rating: 4.8,
    image: "Images/mobility/B001.webp",
    description: "High-performance electric bike with robust design and premium components.",
    features: [
      "350W high-power motor",
      // "All-terrain fat tires",
      // "Premium suspension system",
      // "LED headlight and display"
    ],
    specs: {
      weight: "43 Kg",
      dimensions: "1450 * 700 * 1060 mm",
      motor: "350W",
      battery: "48V 12Ah Lead acid",
      tires: "2.50-14 Tires",
      //absorber: "Front suspension fork",
      maxSpeed: "25 Km/h",
      loadCapacity: "120 Kg",
      chargingTime: "6-8 hours",
      optionalColors: ["Blue", "Red", "White", "Green", "Yellow"],
      packagingSize: "1200 x 280 x 650 mm",
      //containerQty: "45 units",
      warranty: "One-year replacement for non-human damage"
    },
    batteryOptions: [
      { type: "Lead Acid", capacity: "48V 12Ah", price: 80000 },
      // { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
      // { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
    ],
    stock: 15,
    bestSeller: true,
    //range: 205,
    maxSpeed: 25,
    chargingTime: 7
  },

{
   id: 4,
   name: "B002",
   category: "electric-bikes",
   basePrice: 80000,
   rating: 4.8,
   image: "Images/mobility/B002.webp",
   description: "High-performance electric bike with robust design and premium components.",
   features: [
     "450W high-power motor",
    //  "All-terrain fat tires",
    //  "Premium suspension system",
    //  "LED headlight and display"
   ],
   specs: {
     weight: "65 Kg",
     dimensions: "1500 * 650 * 1200 mm",
     motor: "450W",
     battery: "60V 20Ah Lead acid",
     tires: "2.50-14 Tires",
     //absorber: "Front suspension fork",
     maxSpeed: "35 Km/h",
     loadCapacity: "150 Kg",
     chargingTime: "6-8 hours",
     optionalColors: ["Blue", "Yellow", "Red", "White", "Green"],
     packagingSize: "1300 x 310 x 650 mm",
     //containerQty: "45 units",
     warranty: "One-year replacement for non-human damage"
   },
   batteryOptions: [
     { type: "Lithium", capacity: "72V 60Ah", price: 80000 },
    //  { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
    //  { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
   ],
   stock: 15,
   bestSeller: true,
   range: 60,
   maxSpeed: 35,
   chargingTime: 7
 },

{
  id: 5,
  name: "B004",
  category: "electric-bikes",
  basePrice: 80000,
  rating: 4.8,
  image: "Images/mobility/B004.webp",
  description: "High-performance electric bike with robust design and premium components.",
  features: [
    "500W high-power motor",
    // "All-terrain fat tires",
    // "Premium suspension system",
    // "LED headlight and display"
  ],
  specs: {
    weight: "74.5 Kg",
    dimensions: "1500 * 660 * 1080 mm",
    motor: "500W",
    battery: "60V 20Ah Lead acid",
    tires: "2.50-14 Tires",
    //absorber: "Front suspension fork",
    maxSpeed: "35 Km/h",
    loadCapacity: "150 Kg",
    chargingTime: "6-8 hours",
    optionalColors: ["Blue", "Yellow", "Red", "White", "Green"],
    packagingSize: "1300 x 310 x 650 mm",
    //containerQty: "45 units",
    warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
    { type: "Lithium", capacity: "72V 60Ah", price: 80000 },
    // { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
    // { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 60,
  maxSpeed: 35,
  chargingTime: 7
},

{
  id: 6,
  name: "XB001",
  category: "electric-bikes",
  basePrice: 170000,
  rating: 4.8,
  image: "Images/mobility/XB001.webp",
  description: "High-performance electric bike with robust design and premium components.",
  features: [
  "800W high-power motor",
  // "All-terrain fat tires",
  // "Premium suspension system",
  // "LED headlight and display"
  ],
  specs: {
  weight: "50 Kg",
  dimensions: "1700 * 650 * 1050 mm",
  motor: "800W",
  battery: "48V 16Ah ",
  //tires: "2.50-14 Tires",
  //absorber: "Front suspension fork",
  maxSpeed: "40 Km/h",
  loadCapacity: "150 Kg",
  chargingTime: "6-8 hours",
  //optionalColors: ["Blue", "Yellow", "Red", "White", "Green"],
  //packagingSize: "1300 x 310 x 650 mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lithium", capacity: "48V 16Ah", price: 393000 },
  // { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
  // { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 80,
  maxSpeed: 35,
  chargingTime: 7
},

{
  id: 7,
  name: "C0",
  category: "electric-tricycles-cargo",
  basePrice: 360000,
  rating: 4.8,
  image: "Images/mobility/C0.webp",
  description: "Robust electric tricycle designed for cargo transport and heavy-duty applications.",
  features: [
  "1200W high-power motor",
  // "All-terrain fat tires",
  // "Premium suspension system",
  // "LED headlight and display"
  ],
  specs: {
  weight: "285 Kg",
  dimensions: "3350 * 1380 * 1350 mm",
  motor: "1200W",
  battery: "60V 58Ah Lead acid",
  //tires: "2.50-14 Tires",
  //absorber: "Front suspension fork",
  maxSpeed: "40 Km/h",
  //loadCapacity: "150 Kg",
  chargingTime: "6-8 hours",
  optionalColors: ["Blue", "Red", "Navy", "Grey"],
  packagingSize: "1600*1180*500mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lead Acid", capacity: "60V 58Ah", price: 360000 },
  { type: "Lithium", capacity: "60V 58Ah", price: 472500 },
  // { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 90,
  maxSpeed: 40,
  chargingTime: 7
},

{
  id: 8,
  name: "C1",
  category: "electric-tricycles-cargo",
  basePrice: 360000,
  rating: 4.8,
  image: "Images/mobility/C1.webp",
  description: "Robust electric tricycle designed for cargo transport and heavy-duty applications.",
  features: [
  "1200W high-power motor",
  // "All-terrain fat tires",
  // "Premium suspension system",
  // "LED headlight and display"
  ],
  specs: {
  weight: "1500 Kg",
  dimensions: "3350 * 1380 * 1350 mm",
  motor: "1200W",
  battery: "60V 58Ah",
  //tires: "2.50-14 Tires",
  //absorber: "Front suspension fork",
  maxSpeed: "40 Km/h",
  //loadCapacity: "150 Kg",
  chargingTime: "6-8 hours",
  optionalColors: ["Blue", "Red", "Navy", "Grey"],
  packagingSize: "1800*1380*500mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lithium", capacity: "60V 58Ah", price: 360000},
  // { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
  // { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 90,
  maxSpeed: 40,
  chargingTime: 7
},

{
  id: 9,
  name: "C2",
  category: "electric-tricycles-cargo",
  basePrice: 360000,
  rating: 4.8,
  image: "Images/mobility/C2.webp",
  description: "Robust electric tricycle designed for cargo transport and heavy-duty applications.",
  features: [
  "2000W high-power motor",
  // "All-terrain fat tires",
  // "Premium suspension system",
  // "LED headlight and display"
  ],
  specs: {
  weight: "1500 Kg",
  dimensions: "3250 * 1100 * 1000 mm",
  motor: "2000W",
  battery: "72V 60Ah",
  //tires: "2.50-14 Tires",
  //absorber: "Front suspension fork",
  maxSpeed: "40 Km/h",
  //loadCapacity: "150 Kg",
  chargingTime: "6-8 hours",
  optionalColors: ["Blue", "Red", "Navy", "Grey"],
  packagingSize: "1800*1380*500mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lead Acid", capacity: "72V 60Ah", price: 360000 },
  { type: "Lithium", capacity: "72V 100Ah", price: 472500 },
  { type: "Lithium", capacity: "72V 140Ah", price: 530000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 90,
  maxSpeed: 40,
  chargingTime: 7
},

{
  id: 10,
  name: "C3",
  category: "electric-tricycles-cargo",
  basePrice: 360000,
  rating: 4.8,
  image: "Images/mobility/C3.webp",
  description: "Robust electric tricycle designed for cargo transport and heavy-duty applications.",
  features: [
  "2000W high-power motor",
  // "All-terrain fat tires",
  // "Premium suspension system",
  // "LED headlight and display"
  ],
  specs: {
  weight: "276 Kg",
  dimensions: "	3150 * 1180 * 1350 mm",
  motor: "2000W",
  battery: "60V 58Ah",
  tires: "400-12Tires",
  //absorber: "Front suspension fork",
  maxSpeed: "40 Km/h",
  loadCapacity: "2000 Kg",
  chargingTime: "6-8 hours",
  optionalColors: ["Blue", "Red", "Navy", "Grey"],
  packagingSize: "2650 x 1100 x 850 mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lead Acid", capacity: "72V 60Ah", price: 360000 },
  // { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
  // { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 90,
  maxSpeed: 40,
  chargingTime: 7
},

{
  id: 11,
  name: "M009",
  category: "electric-motorcycles",
  basePrice: 125000,
  rating: 4.8,
  image: "Images/mobility/M009.webp",
  description: "High-performance electric Motorcycle with robust design and premium components.",
  features: [
  "1200W high-power motor",
  // "All-terrain fat tires",
  // "Premium suspension system",
  // "LED headlight and display"
  ],
  specs: {
  weight: "95.5 Kg",
  dimensions: "1750 * 700 * 1300 mm",
  motor: "1200W",
  battery: "72V 20Ah",
  tires: "300-10 Tires",
  //absorber: "Front suspension fork",
  maxSpeed: "70 Km/h",
  //loadCapacity: "2000 Kg",
  chargingTime: "6-8 hours",
  //optionalColors: ["Blue", "Red", "Navy", "Grey"],
  packagingSize: "1750 x 430 x 950 mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lead Acid", capacity: "72V 20Ah", price: 125000 },
  { type: "Lithium", capacity: "60V 30Ah", price: 140000 },
  { type: "Lithium", capacity: "60V 30Ah", price: 170000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 80,
  maxSpeed: 70,
  chargingTime: 7
},

{
  id: 12,
  name: "M3000",
  category: "electric-motorcycles",
  basePrice: 310000,
  rating: 4.8,
  image: "Images/mobility/M3000.webp",
  description: "High-performance electric Motorcycle with robust design and premium components.",
  features: [
  "3000W high-power motor",
  // "All-terrain fat tires",
  // "Premium suspension system",
  // "LED headlight and display"
  ],
  specs: {
  weight: "105.5 Kg",
  dimensions: "1950 * 750 * 1100 mm",
  motor: "3000W",
  battery: "72V 50Ah",
  tires: "Front 80/100-19 Rear 110/90-16 Tires",
  //absorber: "Front suspension fork",
  maxSpeed: "100 Km/h",
  loadCapacity: "150 Kg",
  chargingTime: "6-8 hours",
  //optionalColors: ["Blue", "Red", "Navy", "Grey"],
  packagingSize: "2000 x 800 x 1200 mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lithium", capacity: "72V 50Ah", price: 310000 },
  // { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
  // { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 80,
  maxSpeed: 100,
  chargingTime: 7
},

{
  id: 13,
  name: "M005",
  category: "electric-motorcycles",
  basePrice: 190000,
  rating: 4.8,
  image: "Images/mobility/M005.webp",
  description: "High-performance electric Motorcycle with robust design and premium components.",
  features: [
  "2000W high-power motor",
  // "All-terrain fat tires",
  // "Premium suspension system",
  // "LED headlight and display"
  ],
  specs: {
  weight: "108.5 Kg",
  dimensions: "1800 * 800 * 1070 mm",
  motor: "2000W",
  battery: "72V 20Ah",
  tires: "120-70-12 Tires",
  //absorber: "Front suspension fork",
  maxSpeed: "90 Km/h",
  loadCapacity: "180 Kg",
  chargingTime: "6-8 hours",
  //optionalColors: ["White,Black,Gray,Green,Chameleon, Blue"],
  packagingSize: "1650 x 500 x 800 mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lead Acid", capacity: "72V 20Ah", price: 190000 },
  // { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
  // { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 70,
  maxSpeed: 90,
  chargingTime: 7
},

{
  id: 14,
  name: "M006",
  category: "electric-motorcycles",
  basePrice: 280000,
  rating: 4.8,
  image: "Images/mobility/M006.webp",
  description: "High-performance electric Motorcycle with robust design and premium components.",
  features: [
  "3000W high-power motor",
  // "All-terrain fat tires",
  // "Premium suspension system",
  // "LED headlight and display"
  ],
  specs: {
  weight: "140 Kg",
  dimensions: "1950 * 570 * 840 mm",
  motor: "3000W",
  battery: "72V 32Ah",
  //tires: "Front 80/100-19 Rear 110/90-16 Tires",
  //absorber: "Front suspension fork",
  maxSpeed: "90 Km/h",
  loadCapacity: "200 Kg",
  chargingTime: "6-8 hours",
  //optionalColors: ["Blue,white", "White,Black,Red,Chameleon", "White"],
  packagingSize: "2000 x 800 x 1200 mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lead Acid", capacity: "72V 32Ah", price: 280000 },
  // { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
  // { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 100,
  maxSpeed: 90,
  chargingTime: 7
},

{
  id: 15,
  name: "M008",
  category: "electric-motorcycles",
  basePrice: 125000,
  rating: 4.8,
  image: "Images/mobility/M008.webp",
  description: "High-performance electric Motorcycle with robust design and premium components.",
  features: [
  "1000W high-power motor",
  // "All-terrain fat tires",
  // "Premium suspension system",
  // "LED headlight and display"
  ],
  specs: {
  weight: "70 Kg",
  dimensions: "1950 * 670 * 1100 mm",
  motor: "1000W",
  battery: "60V 20Ah",
  tires: "2.75 -10 Tires",
  //absorber: "Front suspension fork",
  maxSpeed: "60 Km/h",
  loadCapacity: "120 Kg",
  chargingTime: "6-8 hours",
  //optionalColors: ["Blue,white", "White"],
  packagingSize: "1600 x 350 x 900 mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lead Acid", capacity: "72V 60Ah", price: 125000 },
  // { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
  // { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 50,
  maxSpeed: 90,
  chargingTime: 7
},

{
  id: 16,
  name: "NM02",
  category: "electric-motorcycles",
  basePrice: 170000,
  rating: 4.8,
  image: "Images/mobility/NM02.webp",
  description: "High-performance electric Motorcycle with robust design and premium components.",
  features: [
  "1200W high-power motor",
  // "All-terrain fat tires",
  // "Premium suspension system",
  // "LED headlight and display"
  ],
  specs: {
  weight: "80 Kg",
  dimensions: "2000 * 830 * 1100 mm",
  motor: "1200W",
  battery: "62V 58Ah",
  tires: "2.75-10 Tires",
  //absorber: "Front suspension fork",
  maxSpeed: "45 Km/h",
  loadCapacity: "500 Kg",
  chargingTime: "6-8 hours",
  //optionalColors: ["Black", "Grey"],
  packagingSize: "2000 x 900 x 1200 mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lead Acid", capacity: "62V 58Ah", price: 170000},
  // { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
  // { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 60,
  maxSpeed: 45,
  chargingTime: 7
},

{
  id: 17,
  name: "NM03",
  category: "electric-motorcycles",
  basePrice: 200000,
  rating: 4.8,
  image: "Images/mobility/NM03.webp",
  description: "High-performance electric Motorcycle with robust design and premium components.",
  features: [
  "1200W Differential motor",
  // "All-terrain fat tires",
  // "Premium suspension system",
  // "LED headlight and display"
  ],
  specs: {
  weight: "80 Kg",
  dimensions: "2000 * 900 * 1100 mm",
  motor: "1200W",
  battery: "62V 58Ah",
  tires: "2.75-10 Tires",
  //absorber: "Front suspension fork",
  maxSpeed: "45 Km/h",
  loadCapacity: "500 Kg",
  chargingTime: "6-8 hours",
  //optionalColors: ["Black", "Grey"],
  packagingSize: "2000 x 1000 x 1200 mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lithium", capacity: "62V 58Ah", price: 200000 },
  // { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
  // { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 60,
  maxSpeed: 45,
  chargingTime: 7
},

{
  id: 18,
  name: "S001",
  category: "electric-scooters",
  basePrice: 150000,
  rating: 4.8,
  image: "Images/mobility/S001.webp",
  description: "High-performance electric scooters with robust design and premium components.",
  features: [
  "500W",
  "All-terrain fat tires",
  "Premium suspension system",
  "LED headlight and display"
  ],
  specs: {
  weight: "23.5 Kg",
  dimensions: "1200 * 220 * 1160 mm",
  motor: "500W",
  battery: "48V 12Ah Lithium",
  tires: "10`` Pneumatic",
  //absorber: "Front suspension fork",
  maxSpeed: "50 Km/h",
  loadCapacity: "100 Kg",
  chargingTime: "3-4 hours",
  //optionalColors: ["Blue", "Green", "Red", "Purple", "Turquoise"],
  packagingSize: "1230 x 260 x 585 mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lithium", capacity: "72V 60Ah", price: 393000 },
  { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
  { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 60,
  maxSpeed: 50,
  chargingTime: 3
},

{
  id: 19,
  name: "S002",
  category: "electric-scooters",
  basePrice: 90000,
  rating: 4.8,
  image: "Images/mobility/S002.webp",
  description: "High-performance electric scooters with robust design and premium components.",
  features: [
  "350W",
  "All-terrain fat tires",
  "Premium suspension system",
  "LED headlight and display"
  ],
  specs: {
  weight: "15 Kg",
  dimensions: "	1090 * 470 * 1180 mm",
  motor: "350W",
  battery: "36V 10Ah Lithium",
  tires: "8`` Pneumatic",
  //absorber: "Front suspension fork",
  maxSpeed: "30 Km/h",
  loadCapacity: "100 Kg",
  chargingTime: "3-4 hours",
  //optionalColors: ["Black"],
  packagingSize: "1100 x 180 x 490 mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lithium", capacity: "72V 60Ah", price: 393000 },
  { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
  { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 35,
  maxSpeed: 50,
  chargingTime: 3
},

{
  id: 20,
  name: "S003",
  category: "electric-scooters",
  basePrice: 80000,
  rating: 4.8,
  image: "Images/mobility/S003.webp",
  description: "High-performance electric scooters with robust design and premium components.",
  features: [
  "250W",
  // "All-terrain fat tires",
  // "Premium suspension system",
  // "LED headlight and display"
  ],
  specs: {
  weight: "11 Kg",
  dimensions: "1080 * 430 * 1140 mm",
  motor: "250W",
  battery: "36V 10Ah Lithium",
  tires: "8`` Pneumatic",
  // absorber: "Front suspension fork",
  maxSpeed: "25 Km/h",
  loadCapacity: "100 Kg",
  chargingTime: "3-4 hours",
  //optionalColors: ["Blue", "Green", "Red", "Purple", "Turquoise"],
  packagingSize: "1100 x 150 x 520 mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lithium", capacity: "72V 60Ah", price: 90000 },
  // { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
  // { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 25,
  maxSpeed: 25,
  chargingTime: 3
},

{
  id: 21,
  name: "S004",
  category: "electric-scooters",
  basePrice: 140000,
  rating: 4.8,
  image: "Images/mobility/S004.webp",
  description: "High-performance electric scooters with robust design and premium components.",
  features: [
  "350W",
  // "All-terrain fat tires",
  // "Premium suspension system",
  // "LED headlight and display"
  ],
  specs: {
  weight: "10 Kg",
  dimensions: "1000 * 930 * 240 mm",
  motor: "350W",
  battery: "48V 12Ah Lithium",
  tires: "10*2.5 Tires",
  //absorber: "Front suspension fork",
  maxSpeed: "30 Km/h",
  loadCapacity: "100 Kg",
  chargingTime: "3-4 hours",
  //optionalColors: ["Black"],
  packagingSize: "1050 x 235 x 530 mm",
  //containerQty: "45 units",
  warranty: "One-year replacement for non-human damage"
  },
  batteryOptions: [
  { type: "Lithium", capacity: "72V 60Ah", price: 140000 },
  // { type: "Lithium", capacity: "72V 100Ah", price: 463000 },
  // { type: "Lithium", capacity: "72V 140Ah", price: 492000 }
  ],
  stock: 15,
  bestSeller: true,
  range: 40,
  maxSpeed: 30,
  chargingTime: 3
},

];

export const featuredMobilityProducts = [1, 3, 5, 7, 11, 17];
