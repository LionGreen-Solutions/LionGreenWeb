
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you for your message. We'll respond shortly!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg border shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 text-gray-900"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 text-gray-900"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Solar Installation">Solar Installation</option>
                      <option value="Electric Mobility">Electric Mobility</option>
                      <option value="Support">Product Support</option>
                      <option value="Partnership">Partnership Opportunity</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 text-gray-900"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  <Send size={16} className="ml-2" />
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg border shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Our Address</p>
                      <p className="text-gray-600">Bole Sub-City, Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Phone Number</p>
                      <a href="tel:+251913829749" className="text-gray-600 hover:text-green-600">+251 913 829 749</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Email Address</p>
                      <a href="mailto:info@liongreen.et" className="text-gray-600 hover:text-green-600">info@liongreen.et</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Monday - Saturday: 8:30 AM - 5:30 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Our Location</h2>
                <div className="w-full h-64 bg-gray-100 rounded-lg border flex items-center justify-center">
                  <p className="text-gray-500">Interactive map will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
