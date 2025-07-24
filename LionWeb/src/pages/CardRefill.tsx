import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Calendar, Clock, MapPin, Phone, Smartphone, Check, User, Home, Building, CreditCard } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const formSchema = z.object({
  fullName: z.string().min(3, {
    message: "Full name must be at least 3 characters."
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits."
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters."
  }),
  area: z.string({
    required_error: "Please select an area of Addis Ababa."
  }),
  cardNumber: z.string().min(8, {
    message: "Card number must be at least 8 characters."
  }),
  refillAmount: z.string().min(1, {
    message: "Please enter a refill amount."
  }),
  serviceType: z.string().default("standard"),
  pickupDate: z.string().optional(),
  pickupTime: z.string().optional()
});

const CardRefill = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      address: "",
      area: "",
      cardNumber: "",
      refillAmount: "",
      serviceType: "standard",
      pickupDate: "",
      pickupTime: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Your RFID card refill order has been submitted successfully!", {
        description: "Our service representative will contact you shortly."
      });
      setIsSubmitting(false);
      navigate("/card-refill-success");
    }, 2000);
    console.log(values);
  };

  return <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-800 to-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">RFID Card Refill Service</h1>
              <p className="text-xl mb-8">
                Fast and convenient electricity card refilling service for Ethiopian Electric Utility customers in Addis Ababa
              </p>
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Order Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2 h-4 w-4" /> Call Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12 text-slate-950">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-slate-950">1. Order Refill Service</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-950">Fill out the form with your details, card number, and desired refill amount.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-slate-950">2. Card Pickup</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-950">Our service representative will pick up your card from your location at the scheduled time.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-slate-950">3. Refill & Return</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-950">We refill your card at the EEU shop and return it to you promptly.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Order Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-center mb-8 text-slate-950">Request Card Refill Service</h2>
              <p className="text-center text-gray-600 mb-8">Fill out the form below to order our RFID card refill service.</p>
              
              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-green-50 border-b border-green-100">
                  <CardTitle className="text-slate-950">RFID Card Refill Order Form</CardTitle>
                  <CardDescription className="text-slate-950">Please provide accurate information to ensure smooth service delivery.</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="fullName" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                        
                        <FormField control={form.control} name="phoneNumber" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+251 91 XXX XXXX" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                      </div>
                      
                      <FormField control={form.control} name="address" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Detailed Address</FormLabel>
                            <FormControl>
                              <Input placeholder="House number, Building, Street, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      
                      <FormField control={form.control} name="area" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Area in Addis Ababa</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select area" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="bole">Bole</SelectItem>
                                <SelectItem value="kirkos">Kirkos</SelectItem>
                                <SelectItem value="arada">Arada</SelectItem>
                                <SelectItem value="yeka">Yeka</SelectItem>
                                <SelectItem value="addis-ketema">Addis Ketema</SelectItem>
                                <SelectItem value="lideta">Lideta</SelectItem>
                                <SelectItem value="gulele">Gulele</SelectItem>
                                <SelectItem value="kolfe-keranio">Kolfe Keranio</SelectItem>
                                <SelectItem value="nifas-silk-lafto">Nifas Silk-Lafto</SelectItem>
                                <SelectItem value="akaky-kaliti">Akaky Kaliti</SelectItem>
                                <SelectItem value="lemi-kura">Lemi Kura</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>} />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="cardNumber" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>RFID Card Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your card number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                        
                        <FormField control={form.control} name="refillAmount" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Refill Amount (Birr)</FormLabel>
                              <FormControl>
                                <Input type="number" min="50" placeholder="E.g., 100, 200, 500" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                      </div>
                      
                      <FormField control={form.control} name="serviceType" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Service Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select service type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="standard">Standard (24 hours)</SelectItem>
                                <SelectItem value="express">Express (Same day)</SelectItem>
                                <SelectItem value="priority">Priority (3-4 hours)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>} />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="pickupDate" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Preferred Pickup Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                        
                        <FormField control={form.control} name="pickupTime" render={({
                        field
                      }) => <FormItem>
                              <FormLabel>Preferred Pickup Time</FormLabel>
                              <FormControl>
                                <Input type="time" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                      </div>
                      
                      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                        {isSubmitting ? "Processing..." : "Submit Order"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12 text-slate-950">Service Fees</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Standard Service</CardTitle>
                  <div className="text-4xl font-bold text-green-600 my-4">40 Birr</div>
                  <CardDescription>24-hour turnaround time</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Card pickup from your location</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Card refill at EEU shop</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Card return within 24 hours</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Select Standard</Button>
                </CardFooter>
              </Card>
              
              <Card className="border-2 border-green-500 shadow-lg relative">
                <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">Popular</div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Express Service</CardTitle>
                  <div className="text-4xl font-bold text-green-600 my-4">60 Birr</div>
                  <CardDescription>Same-day service</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Card pickup from your location</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Card refill at EEU shop</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Same-day card return</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>SMS notifications</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Select Express</Button>
                </CardFooter>
              </Card>
              
              <Card className="border border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Priority Service</CardTitle>
                  <div className="text-4xl font-bold text-green-600 my-4">100 Birr</div>
                  <CardDescription>3-4 hours turnaround time</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Immediate card pickup</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Priority refill at EEU shop</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Express card return (3-4 hours)</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>SMS & call notifications</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>Dedicated customer support</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Select Priority</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 bg-slate-950">
            <h2 className="text-3xl font-display font-bold text-center mb-12">FAQs</h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does the RFID card refill service work?</AccordionTrigger>
                  <AccordionContent>
                    Our service is simple: you place an order through our website or call center, providing your card details
                    and desired refill amount. Our service representative will pick up your card from your location,
                    take it to the nearest EEU shop for refilling, and return it to you promptly.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>What areas in Addis Ababa do you cover?</AccordionTrigger>
                  <AccordionContent>
                    We currently offer our services across all sub-cities in Addis Ababa, including Bole, Kirkos, Arada,
                    Yeka, Addis Ketema, Lideta, Gulele, Kolfe Keranio, Nifas Silk-Lafto, Akaky Kaliti, and Lemi Kura.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>What is the minimum refill amount?</AccordionTrigger>
                  <AccordionContent>
                    The minimum refill amount is 50 Birr. There is no maximum limit - you can refill your card with any amount
                    based on your electricity consumption needs.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>How long does it take to get my card back?</AccordionTrigger>
                  <AccordionContent>
                    The turnaround time depends on the service type you choose: Standard service takes up to 24 hours,
                    Express service ensures same-day return, and Priority service gets your card back within 3-4 hours.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept various payment methods including mobile money (Telebirr), bank transfers, credit/debit cards,
                    and cash on delivery. You can pay for both the refill amount and our service fee through any of these methods.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>Is my card safe with your service?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. We take security very seriously. Our service representatives are thoroughly vetted and
                    trained. You'll receive a digital receipt when your card is picked up, and you can track the status
                    of your refill service through our website or via SMS notifications.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Refill Your RFID Card?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Save time and energy by using our convenient refill service. We'll handle the refill process while you focus on what matters most.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
                Order Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-4 w-4" /> Call +251 913 829 749
              </Button>
            </div>
          </div>
        </section>

        {/* Cross-Selling Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-4 text-slate-950">Explore Our Energy Solutions</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Discover how our range of products can help you become energy independent and reduce your electricity bills.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    Solar Energy Systems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Generate your own electricity with our high-efficiency solar panel systems. Reduce your dependency on the grid and save money.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Explore Solar Products
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    Battery Storage Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Store excess energy for use during outages or peak hours. Our battery systems ensure continuous power for your home or business.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Battery Options
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                      </svg>
                    </div>
                    E-Mobility Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Embrace sustainable transportation with our electric bikes and motorbikes. Clean, efficient, and economical for daily commuting.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Discover E-Mobility
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};

export default CardRefill;
