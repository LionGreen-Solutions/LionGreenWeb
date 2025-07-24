import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Mail, Phone, User, MapPin, Plus, Trash2, Car, List, Droplet } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

// Define appliance types with wattage ranges
const applianceTypes = [{
  name: 'LED Light Bulb',
  avgWattage: 10
}, {
  name: 'CFL Light Bulb',
  avgWattage: 15
}, {
  name: 'Incandescent Light Bulb',
  avgWattage: 60
}, {
  name: 'Ceiling Fan',
  avgWattage: 75
}, {
  name: 'Television (LED/LCD)',
  avgWattage: 100
}, {
  name: 'Television (Plasma)',
  avgWattage: 300
}, {
  name: 'Laptop',
  avgWattage: 50
}, {
  name: 'Desktop Computer',
  avgWattage: 200
}, {
  name: 'Refrigerator (Energy Star)',
  avgWattage: 150
}, {
  name: 'Refrigerator (Standard)',
  avgWattage: 250
}, {
  name: 'Microwave Oven',
  avgWattage: 1000
}, {
  name: 'Electric Oven',
  avgWattage: 2150
}, {
  name: 'Washing Machine',
  avgWattage: 500
}, {
  name: 'Clothes Dryer',
  avgWattage: 3000
}, {
  name: 'Air Conditioner (Window)',
  avgWattage: 1000
}, {
  name: 'Air Conditioner (Central)',
  avgWattage: 3500
}, {
  name: 'Space Heater',
  avgWattage: 1500
}, {
  name: 'Water Heater (Electric)',
  avgWattage: 4000
}, {
  name: 'Wi-Fi Router',
  avgWattage: 10
}, {
  name: 'Phone Charger',
  avgWattage: 5
}, {
  name: 'Blender',
  avgWattage: 400
}, {
  name: 'Coffee Maker',
  avgWattage: 800
}, {
  name: 'Toaster',
  avgWattage: 1200
}, {
  name: 'Hair Dryer',
  avgWattage: 1500
}, {
  name: 'Iron',
  avgWattage: 1500
}, {
  name: 'Vacuum Cleaner',
  avgWattage: 1400
}, {
  name: 'Gaming Console',
  avgWattage: 150
}];

// Water pump types
const pumpTypes = [{
  name: 'Submersible Pump (1/2 HP)',
  avgWattage: 400
}, {
  name: 'Submersible Pump (1 HP)',
  avgWattage: 750
}, {
  name: 'Submersible Pump (2 HP)',
  avgWattage: 1500
}, {
  name: 'Surface Pump (1/2 HP)',
  avgWattage: 375
}, {
  name: 'Surface Pump (1 HP)',
  avgWattage: 750
}, {
  name: 'Booster Pump',
  avgWattage: 500
}, {
  name: 'Sump Pump',
  avgWattage: 600
}, {
  name: 'Jet Pump',
  avgWattage: 850
}];

// Form schema
const formSchema = z.object({
  // Personal & Contact Info
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  // Address
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "Subcity/Zone is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  // System settings
  batteryBackupHours: z.number().min(1).max(72),
  budget: z.enum(["2000-5000", "5000-10000", "10000-15000", "15000-25000", "25000+"]),
  installationTimeframe: z.enum(["immediately", "1-3 months", "3-6 months", "6+ months"]),
  propertyType: z.enum(["house", "apartment", "business", "land"]),
  // Add additional fields
  notes: z.string().optional(),
  contactPreference: z.enum(["email", "phone", "either"]),
  referralSource: z.string().optional(),
  // Checkbox selections
  receiveUpdates: z.boolean().default(false),
  scheduleConsultation: z.boolean().default(false)
});
const CustomerDataCollection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("contact");
  const [appliances, setAppliances] = useState<Array<{
    type: string;
    quantity: number;
    wattage: number;
    hoursPerDay: number;
  }>>([]);
  const [waterPumps, setWaterPumps] = useState<Array<{
    type: string;
    totalHead: number;
    totalDischarge: number;
    hoursPerDay: number;
    wattage: number;
  }>>([]);
  const [irrigationSystem, setIrrigationSystem] = useState({
    hasSystem: false,
    area: 0,
    hoursPerDay: 0
  });
  const [evCharging, setEvCharging] = useState({
    hasEv: false,
    chargingRate: 7,
    // kW
    hoursPerWeek: 5
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      batteryBackupHours: 8,
      budget: "5000-10000",
      installationTimeframe: "1-3 months",
      propertyType: "house",
      notes: "",
      contactPreference: "email",
      referralSource: "",
      receiveUpdates: false,
      scheduleConsultation: false
    }
  });

  // Add a new appliance to the list
  const addAppliance = () => {
    const defaultType = applianceTypes[0].name;
    const defaultWattage = applianceTypes[0].avgWattage;
    setAppliances([...appliances, {
      type: defaultType,
      quantity: 1,
      wattage: defaultWattage,
      hoursPerDay: 4
    }]);
  };

  // Remove an appliance from the list
  const removeAppliance = (index: number) => {
    const newAppliances = [...appliances];
    newAppliances.splice(index, 1);
    setAppliances(newAppliances);
  };

  // Handle change in appliance type
  const handleApplianceTypeChange = (index: number, type: string) => {
    const newAppliances = [...appliances];
    const appliance = applianceTypes.find(a => a.name === type);
    newAppliances[index].type = type;
    newAppliances[index].wattage = appliance ? appliance.avgWattage : 0;
    setAppliances(newAppliances);
  };

  // Update appliance quantity
  const updateApplianceQuantity = (index: number, quantity: number) => {
    const newAppliances = [...appliances];
    newAppliances[index].quantity = quantity;
    setAppliances(newAppliances);
  };

  // Update appliance wattage
  const updateApplianceWattage = (index: number, wattage: number) => {
    const newAppliances = [...appliances];
    newAppliances[index].wattage = wattage;
    setAppliances(newAppliances);
  };

  // Update appliance hours per day
  const updateApplianceHours = (index: number, hours: number) => {
    const newAppliances = [...appliances];
    newAppliances[index].hoursPerDay = hours;
    setAppliances(newAppliances);
  };

  // Add a new water pump
  const addWaterPump = () => {
    const defaultType = pumpTypes[0].name;
    const defaultWattage = pumpTypes[0].avgWattage;
    setWaterPumps([...waterPumps, {
      type: defaultType,
      totalHead: 10,
      // meters
      totalDischarge: 1000,
      // liters per hour
      hoursPerDay: 2,
      wattage: defaultWattage
    }]);
  };

  // Remove a water pump
  const removeWaterPump = (index: number) => {
    const newPumps = [...waterPumps];
    newPumps.splice(index, 1);
    setWaterPumps(newPumps);
  };

  // Handle change in pump type
  const handlePumpTypeChange = (index: number, type: string) => {
    const newPumps = [...waterPumps];
    const pump = pumpTypes.find(p => p.name === type);
    newPumps[index].type = type;
    newPumps[index].wattage = pump ? pump.avgWattage : 0;
    setWaterPumps(newPumps);
  };

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Combine all data
    const formData = {
      ...values,
      appliances,
      waterPumps,
      irrigationSystem,
      evCharging
    };

    // Log form data for now (we'd typically send this to a server)
    console.log("Submitted form data:", formData);

    // Navigate to the design results page with form data
    navigate('/design-results', {
      state: {
        formData
      }
    });

    // Show success toast
    toast({
      title: "Information submitted successfully!",
      description: "We're generating your custom solar power design."
    });
  };

  // Simplified calculation of daily energy consumption for display
  const calculateDailyConsumption = () => {
    let total = 0;

    // Add appliance consumption
    appliances.forEach(appliance => {
      total += appliance.quantity * appliance.wattage * appliance.hoursPerDay;
    });

    // Add water pump consumption
    waterPumps.forEach(pump => {
      total += pump.wattage * pump.hoursPerDay;
    });

    // Add EV charging (convert kW to W)
    if (evCharging.hasEv) {
      total += evCharging.chargingRate * 1000 * (evCharging.hoursPerWeek / 7);
    }

    // Add irrigation (rough estimate based on area)
    if (irrigationSystem.hasSystem) {
      // Estimate 20W per 100 square meters
      total += irrigationSystem.area / 100 * 20 * irrigationSystem.hoursPerDay;
    }
    return Math.round(total);
  };
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-navy-900 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Custom Solar Consultation</h1>
          <p className="text-gray-300">Tell us about your energy needs for a personalized solar solution</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="contact">
                  <User className="mr-2 h-4 w-4" />
                  Contact
                </TabsTrigger>
                <TabsTrigger value="appliances">
                  <Home className="mr-2 h-4 w-4" />
                  Appliances
                </TabsTrigger>
                <TabsTrigger value="water">
                  <Droplet className="mr-2 h-4 w-4" />
                  Water Systems
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <List className="mr-2 h-4 w-4" />
                  System Settings
                </TabsTrigger>
              </TabsList>
              
              {/* Contact Information Tab */}
              <TabsContent value="contact">
                <div className="p-6 rounded-lg shadow-sm bg-slate-950">
                  <h2 className="text-xl font-semibold mb-6 text-slate-50">Contact Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal information */}
                    <FormField control={form.control} name="fullName" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="bg-slate-950">Full Name *</FormLabel>
                          <FormControl>
                            <div className="flex">
                              <User className="text-gray-500 mr-2" />
                              <Input placeholder="John Doe" className="bg-zinc-900" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="email" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="bg-slate-950">Email</FormLabel>
                          <FormControl>
                            <div className="flex">
                              <Mail className="text-gray-500 mr-2" />
                              <Input placeholder="john@example.com" type="email" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="phone" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="bg-slate-950">Phone *</FormLabel>
                          <FormControl>
                            <div className="flex">
                              <Phone className="text-gray-500 mr-2" />
                              <Input placeholder="(+251) 912345678" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="contactPreference" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="bg-slate-950">Preferred Contact Method</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select contact preference" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="email">Email</SelectItem>
                              <SelectItem value="phone">Phone</SelectItem>
                              <SelectItem value="either">Either</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />
                    
                    {/* Address fields */}
                    <div className="md:col-span-2">
                      <h3 className="font-semibold text-lg mb-3 text-slate-50">Property Address</h3>
                    </div>
                    
                    <FormField control={form.control} name="address" render={({
                    field
                  }) => <FormItem className="md:col-span-2">
                          <FormLabel className="bg-slate-950">Street Address</FormLabel>
                          <FormControl>
                            <div className="flex">
                              <MapPin className="text-gray-500 mr-2" />
                              <Input placeholder="123 Main St" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="city" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>City *</FormLabel>
                          <FormControl>
                            <Input placeholder="City" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField control={form.control} name="state" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Subcity/Zone *</FormLabel>
                            <FormControl>
                              <Input placeholder="Subcity/Zone" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      
                      <FormField control={form.control} name="zipCode" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>ZIP Code</FormLabel>
                            <FormControl>
                              <Input placeholder="12345" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                    </div>
                    
                    <FormField control={form.control} name="propertyType" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Property Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select property type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="house">House</SelectItem>
                              <SelectItem value="apartment">Apartment</SelectItem>
                              <SelectItem value="business">Business</SelectItem>
                              <SelectItem value="land">Land</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="referralSource" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>How did you hear about us?</FormLabel>
                          <FormControl>
                            <Input placeholder="Google, friend, social media, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <div className="md:col-span-2">
                      <FormField control={form.control} name="receiveUpdates" render={({
                      field
                    }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Receive updates about solar technology and special offers
                              </FormLabel>
                              <FormDescription>
                                We'll send occasional emails with useful information about solar energy solutions.
                              </FormDescription>
                            </div>
                          </FormItem>} />
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <Button type="button" variant="outline" className="mr-2" onClick={() => navigate(-1)}>
                      Cancel
                    </Button>
                    <Button type="button" onClick={() => setActiveTab("appliances")}>
                      Next
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Appliances Tab */}
              <TabsContent value="appliances">
                <div className="p-6 rounded-lg shadow-sm bg-slate-950">
                  <h2 className="text-xl font-semibold mb-6">Home Appliances</h2>
                  
                  <div className="space-y-6">
                    {/* Appliance List */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium text-lg">Appliance List</h3>
                        <Button type="button" onClick={addAppliance} variant="outline" size="sm">
                          <Plus className="mr-1 h-4 w-4" /> Add Appliance
                        </Button>
                      </div>
                      
                      {appliances.length === 0 && <div className="text-center p-6 bg-gray-50 rounded-md">
                          <p className="text-gray-500">No appliances added yet. Click "Add Appliance" to get started.</p>
                        </div>}
                      
                      {appliances.map((appliance, index) => <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4 p-4 border rounded-md">
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Appliance Type
                            </label>
                            <Select value={appliance.type} onValueChange={value => handleApplianceTypeChange(index, value)}>
                              <SelectTrigger className="bg-slate-950">
                                <SelectValue placeholder="Select an appliance" />
                              </SelectTrigger>
                              <SelectContent>
                                {applianceTypes.map((type, i) => <SelectItem key={i} value={type.name}>
                                    {type.name} (~{type.avgWattage}W)
                                  </SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Quantity
                            </label>
                            <Input type="number" min={1} value={appliance.quantity} onChange={e => updateApplianceQuantity(index, parseInt(e.target.value) || 1)} />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Wattage (W)
                            </label>
                            <Input type="number" min={0} value={appliance.wattage} onChange={e => updateApplianceWattage(index, parseInt(e.target.value) || 0)} className="bg-slate-950" />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Hours/Day
                            </label>
                            <Input type="number" min={0} max={24} step={0.5} value={appliance.hoursPerDay} onChange={e => updateApplianceHours(index, parseFloat(e.target.value) || 0)} />
                          </div>
                          
                          <div className="flex items-end">
                            <Button type="button" variant="ghost" size="icon" onClick={() => removeAppliance(index)} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                              <Trash2 className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>)}
                    </div>
                    
                    {/* EV Charging Section */}
                    <div className="mt-8 border-t pt-6">
                      <h3 className="text-xl font-semibold flex items-center mb-4">
                        <Car className="mr-2 h-5 w-5 text-sunbeam-400" />
                        Electric Vehicle Charging
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Checkbox id="hasEv" checked={evCharging.hasEv} onCheckedChange={checked => setEvCharging(prev => ({
                          ...prev,
                          hasEv: checked === true
                        }))} />
                          <label htmlFor="hasEv" className="ml-2">
                            I have an electric vehicle that needs charging
                          </label>
                        </div>
                        
                        {evCharging.hasEv && <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 mt-2">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Charging Rate (kW)
                              </label>
                              <Select value={evCharging.chargingRate.toString()} onValueChange={value => setEvCharging(prev => ({
                            ...prev,
                            chargingRate: parseFloat(value)
                          }))}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select charging rate" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="3.3">3.3 kW (Level 1)</SelectItem>
                                  <SelectItem value="7">7 kW (Level 2)</SelectItem>
                                  <SelectItem value="11">11 kW (Level 2 - High)</SelectItem>
                                  <SelectItem value="22">22 kW (Level 2 - Commercial)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Hours per Week
                              </label>
                              <Input type="number" min={0} max={168} value={evCharging.hoursPerWeek} onChange={e => setEvCharging(prev => ({
                            ...prev,
                            hoursPerWeek: parseFloat(e.target.value) || 0
                          }))} />
                            </div>
                          </div>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab("contact")}>
                      Previous
                    </Button>
                    <Button type="button" onClick={() => setActiveTab("water")}>
                      Next
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Water Systems Tab */}
              <TabsContent value="water">
                <div className="p-6 rounded-lg shadow-sm bg-slate-950">
                  <h2 className="text-xl font-semibold mb-6">Water Supply & Irrigation</h2>
                  
                  <div className="space-y-8">
                    {/* Water Pumps Section */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium flex items-center">
                          <Droplet className="mr-2 h-5 w-5 text-blue-500" />
                          Water Pumps
                        </h3>
                        <Button type="button" onClick={addWaterPump} variant="outline" size="sm">
                          <Plus className="mr-1 h-4 w-4" /> Add Pump
                        </Button>
                      </div>
                      
                      {waterPumps.length === 0 && <div className="text-center p-6 bg-gray-50 rounded-md">
                          <p className="text-gray-500">No pumps added yet. Click "Add Pump" if you need water pumping systems.</p>
                        </div>}
                      
                      {waterPumps.map((pump, index) => <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 p-4 border rounded-md">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Pump Type
                            </label>
                            <Select value={pump.type} onValueChange={value => handlePumpTypeChange(index, value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select pump type" />
                              </SelectTrigger>
                              <SelectContent>
                                {pumpTypes.map((type, i) => <SelectItem key={i} value={type.name}>
                                    {type.name} (~{type.avgWattage}W)
                                  </SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Total Head (meters)
                            </label>
                            <Input type="number" min={0} value={pump.totalHead} onChange={e => {
                          const newPumps = [...waterPumps];
                          newPumps[index].totalHead = parseFloat(e.target.value) || 0;
                          setWaterPumps(newPumps);
                        }} />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Flow Rate (L/hr)
                            </label>
                            <Input type="number" min={0} value={pump.totalDischarge} onChange={e => {
                          const newPumps = [...waterPumps];
                          newPumps[index].totalDischarge = parseFloat(e.target.value) || 0;
                          setWaterPumps(newPumps);
                        }} />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Hours/Day
                            </label>
                            <Input type="number" min={0} max={24} step={0.5} value={pump.hoursPerDay} onChange={e => {
                          const newPumps = [...waterPumps];
                          newPumps[index].hoursPerDay = parseFloat(e.target.value) || 0;
                          setWaterPumps(newPumps);
                        }} />
                          </div>
                          
                          <div className="flex items-end">
                            <Button type="button" variant="ghost" size="icon" onClick={() => removeWaterPump(index)} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                              <Trash2 className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>)}
                    </div>
                    
                    {/* Irrigation Section */}
                    <div className="space-y-6 pt-6">
                      <h2 className="text-xl font-semibold flex items-center">
                        <Droplet className="mr-2 h-5 w-5 text-sunbeam-400" />
                        Irrigation System
                      </h2>
                      
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Checkbox id="hasIrrigation" checked={irrigationSystem.hasSystem} onCheckedChange={checked => setIrrigationSystem(prev => ({
                          ...prev,
                          hasSystem: checked === true
                        }))} />
                          <label htmlFor="hasIrrigation" className="ml-2">
                            I have an irrigation system that needs power
                          </label>
                        </div>
                        
                        {irrigationSystem.hasSystem && <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 mt-2">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Irrigated Area (square meters)
                              </label>
                              <Input type="number" min={0} value={irrigationSystem.area} onChange={e => setIrrigationSystem(prev => ({
                            ...prev,
                            area: parseFloat(e.target.value) || 0
                          }))} />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Hours per Day
                              </label>
                              <Input type="number" min={0} max={24} step={0.5} value={irrigationSystem.hoursPerDay} onChange={e => setIrrigationSystem(prev => ({
                            ...prev,
                            hoursPerDay: parseFloat(e.target.value) || 0
                          }))} />
                            </div>
                          </div>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab("appliances")}>
                      Previous
                    </Button>
                    <Button type="button" onClick={() => setActiveTab("settings")}>
                      Next
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* System Settings Tab */}
              <TabsContent value="settings">
                <div className="p-6 rounded-lg shadow-sm bg-slate-950">
                  <h2 className="text-xl font-semibold mb-6">System Settings & Preferences</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      {/* Battery Backup Hours */}
                      <div>
                        <FormField control={form.control} name="batteryBackupHours" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Required Battery Backup Time</FormLabel>
                              <div className="space-y-4">
                                <div className="flex justify-between">
                                  <span>Backup Duration: {field.value} hours</span>
                                </div>
                                <FormControl>
                                  <Slider min={1} max={72} step={1} value={[field.value]} onValueChange={([value]) => field.onChange(value)} />
                                </FormControl>
                                <div className="flex justify-between text-xs text-gray-500">
                                  <span>1 hour</span>
                                  <span>24 hours</span>
                                  <span>72 hours</span>
                                </div>
                                <FormDescription>
                                  How many hours do you need your system to run without solar input?
                                </FormDescription>
                              </div>
                              <FormMessage />
                            </FormItem>} />
                      </div>
                      
                      {/* Budget Range */}
                      <FormField control={form.control} name="budget" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Budget Range ($)</FormLabel>
                            <FormControl>
                              <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-col space-y-2">
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="2000-5000" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    $2,000 - $5,000
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="5000-10000" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    $5,000 - $10,000
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="10000-15000" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    $10,000 - $15,000
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="15000-25000" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    $15,000 - $25,000
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="25000+" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    $25,000+
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                    </div>
                    
                    <div className="space-y-6">
                      {/* Installation Timeframe */}
                      <FormField control={form.control} name="installationTimeframe" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Installation Timeframe</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="When would you like to install?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="immediately">As soon as possible</SelectItem>
                                <SelectItem value="1-3 months">Within 1-3 months</SelectItem>
                                <SelectItem value="3-6 months">Within 3-6 months</SelectItem>
                                <SelectItem value="6+ months">6+ months from now</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>} />
                      
                      {/* Notes / Additional Info */}
                      <FormField control={form.control} name="notes" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Additional Notes</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Please share any other details about your requirements or questions you may have." className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormDescription>
                              Any specific requirements, obstacles, or preferences we should know about?
                            </FormDescription>
                            <FormMessage />
                          </FormItem>} />
                      
                      {/* Schedule Consultation */}
                      <FormField control={form.control} name="scheduleConsultation" render={({
                      field
                    }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Schedule a consultation call with our experts
                              </FormLabel>
                              <FormDescription>
                                Our solar specialist will contact you to discuss your needs in detail.
                              </FormDescription>
                            </div>
                          </FormItem>} />
                    </div>
                  </div>
                  
                  {/* Energy Consumption Summary */}
                  <div className="mt-8 p-4 bg-navy-50 rounded-lg">
                    <h3 className="font-semibold text-navy-900 mb-2">Energy Consumption Summary</h3>
                    <div className="flex flex-col md:flex-row md:items-end justify-between">
                      <div>
                        <span className="block text-sm text-gray-600">Estimated Daily Consumption:</span>
                        <span className="text-2xl font-bold text-navy-900">
                          {calculateDailyConsumption()} Wh
                        </span>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="block text-sm text-gray-600">Desired Battery Backup:</span>
                        <span className="text-lg font-semibold text-navy-900">
                          {form.watch("batteryBackupHours")} hours
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setActiveTab("water")}>
                      Previous
                    </Button>
                    <Button type="submit" className="bg-sunbeam-400 hover:bg-sunbeam-500 text-navy-900">
                      Get Your Custom Design
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </form>
        </Form>
      </div>
      
      <Footer />
    </div>;
};
export default CustomerDataCollection;
