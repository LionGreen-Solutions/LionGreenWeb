
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ProductCategory from "./pages/ProductCategory";
import Service from "./pages/Service";
import FAQ from "./pages/FAQ";
import Mobility from "./pages/Mobility";
import MobilityDetail from "./pages/MobilityDetail";
import PowerStations from "./pages/PowerStations";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CardRefill from "./pages/CardRefill";
import CardRefillSuccess from "./pages/CardRefillSuccess";
import SolarConsultation from "./pages/SolarConsultation";
import CustomerDataCollection from "./pages/CustomerDataCollection";
import DesignResults from "./pages/DesignResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} /> */}
              <Route path="/category/:category" element={<ProductCategory />} />
              <Route path="/service" element={<Service />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/mobility" element={<Mobility />} />
              <Route path="/mobility/:id" element={<MobilityDetail />} />
              <Route path="/power-stations" element={<PowerStations />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/card-refill" element={<CardRefill />} />
              <Route path="/card-refill-success" element={<CardRefillSuccess />} />
              <Route path="/consultation" element={<SolarConsultation />} />
              <Route path="/customer-data" element={<CustomerDataCollection />} />
              <Route path="/design-results" element={<DesignResults />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
