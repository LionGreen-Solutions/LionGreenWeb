
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Battery, Bike, Phone, CreditCard, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const {
    items
  } = useCart();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <nav className="bg-card/95 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img alt="Lion Green Solutions Logo" className="h-12 w-auto object-contain" src="/lovable-uploads/442509e2-9f49-4bce-a9ce-17831e3e6975.png" />
              <span className="sr-only">Lion Green</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary font-medium px-2 py-1 rounded-md transition duration-200">Home</Link>
            {/* <Link to="/products" className="text-foreground hover:text-primary font-medium px-2 py-1 rounded-md transition duration-200">Products</Link> */}
            <Link to="/power-stations" className="text-foreground hover:text-primary font-medium px-2 py-1 rounded-md transition duration-200 flex items-center">
              <Zap className="mr-1 h-4 w-4 text-primary" />
              Power Stations
            </Link>
            <Link to="/mobility" className="text-foreground hover:text-primary font-medium px-2 py-1 rounded-md transition duration-200 flex items-center">
              <Bike className="mr-1 h-4 w-4 text-primary" />
              Mobility
            </Link>
            <Link to="/card-refill" className="text-foreground hover:text-primary font-medium px-2 py-1 rounded-md transition duration-200 flex items-center">
              <CreditCard className="mr-1 h-4 w-4 text-primary" />
              RFID Refill
            </Link>
            <Link to="/consultation" className="text-foreground hover:text-primary font-medium px-2 py-1 rounded-md transition duration-200 flex items-center">
              <Battery className="mr-1 h-4 w-4 text-primary" />
              Solar Consultation
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary font-medium px-2 py-1 rounded-md transition duration-200">About</Link>
            <Link to="/contact" className="text-foreground hover:text-primary font-medium px-2 py-1 rounded-md transition duration-200">Contact</Link>
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-3">
            <a href="tel:+251913829749" className="hidden sm:flex items-center">
              <Button variant="outline" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground border-none flex gap-2 items-center">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+251 913 829 749</span>
              </Button>
            </a>

            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                    {totalItems}
                  </span>}
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden text-foreground hover:text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-sm">
            <Link to="/" className="block px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary rounded-md" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            {/* <Link to="/products" className="block px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary rounded-md" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link> */}
            <Link to="/power-stations" className="block px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary rounded-md flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Zap className="mr-2 h-4 w-4 text-primary" />
              Power Stations
            </Link>
            <Link to="/mobility" className="block px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary rounded-md flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Bike className="mr-2 h-4 w-4 text-primary" />
              Mobility
            </Link>
            <Link to="/card-refill" className="block px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary rounded-md flex items-center" onClick={() => setIsMenuOpen(false)}>
              <CreditCard className="mr-2 h-4 w-4 text-primary" />
              RFID Refill
            </Link>
            <Link to="/consultation" className="block px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary rounded-md flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Battery className="mr-2 h-4 w-4 text-primary" />
              Solar Consultation
            </Link>
            <Link to="/about" className="block px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary rounded-md" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary rounded-md" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <a href="tel:+251913829749" className="block px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary rounded-md" onClick={() => setIsMenuOpen(false)}>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+251 913 829 749</span>
              </div>
            </a>
          </div>
        </div>}
    </nav>
  );
};

export default Navbar;
