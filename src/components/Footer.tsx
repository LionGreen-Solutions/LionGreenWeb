
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/95 backdrop-blur-sm text-foreground pt-16 pb-8 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/442509e2-9f49-4bce-a9ce-17831e3e6975.png" 
                alt="Lion Green Solutions Logo" 
                className="h-12 mr-2" 
              />
            </Link>
            <p className="text-primary mb-3 font-display font-medium italic">
              "Energy is free!"
            </p>
            <p className="text-muted-foreground mb-6">
              Empowering Ethiopia with sustainable energy solutions. Solar power systems, electric mobility, and energy consulting services.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <p className="text-muted-foreground">Bole Sub-City, Addis Ababa, Ethiopia</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <a href="tel:+251913829749" className="text-muted-foreground hover:text-primary">+251 913 829 749</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <a href="mailto:info@liongreen.et" className="text-muted-foreground hover:text-primary">info@liongreen.et</a>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <p className="text-muted-foreground">Monday - Saturday: 8:30 AM - 5:30 PM</p>
              </div>
            </div>
          </div>
          
          {/* Products & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground border-b border-primary pb-2">Products & Services</h3>
            <ul className="space-y-3">
              <li><Link to="/products/solar-systems" className="text-muted-foreground hover:text-primary flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Solar Energy Systems</Link></li>
              <li><Link to="/products/batteries" className="text-muted-foreground hover:text-primary flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Battery Storage</Link></li>
              <li><Link to="/products/water-pumps" className="text-muted-foreground hover:text-primary flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Solar Water Pumps</Link></li>
              <li><Link to="/mobility" className="text-muted-foreground hover:text-primary flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Electric Mobility</Link></li>
              <li><Link to="/consultation" className="text-muted-foreground hover:text-primary flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Solar Consultation</Link></li>
              <li><Link to="/installation" className="text-muted-foreground hover:text-primary flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Professional Installation</Link></li>
              <li><Link to="/maintenance" className="text-muted-foreground hover:text-primary flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Maintenance Services</Link></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground border-b border-primary pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>About Us</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Blog & Resources</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Featured Projects</Link></li>
              <li><Link to="/partners" className="text-muted-foreground hover:text-primary flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Our Partners</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Contact Us</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>FAQs</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground border-b border-primary pb-2">Stay Connected</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates on sustainable energy solutions and special offers.
            </p>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-secondary/50 text-foreground w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full py-2 rounded-md mt-2 transition duration-300">
                Subscribe
              </button>
            </div>
            
            {/* Social media */}
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com/liongreensolutions" target="_blank" rel="noreferrer" className="bg-secondary/50 text-muted-foreground hover:text-primary p-2 rounded-full transition duration-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-secondary/50 text-muted-foreground hover:text-primary p-2 rounded-full transition duration-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com/company/liongreensolutions" target="_blank" rel="noreferrer" className="bg-secondary/50 text-muted-foreground hover:text-primary p-2 rounded-full transition duration-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://youtube.com/@liongreensolutions" target="_blank" rel="noreferrer" className="bg-secondary/50 text-muted-foreground hover:text-primary p-2 rounded-full transition duration-300">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section with certifications and copyright */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Lion Green Solutions Ethiopia. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
              <Link to="/sitemap" className="text-muted-foreground hover:text-primary">Sitemap</Link>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <p className="text-xs text-muted-foreground text-center">
              Committed to empowering Ethiopia with sustainable energy solutions. Licensed and regulated under Ethiopian authorities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
