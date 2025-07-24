import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { mobilityProducts } from "@/lib/mobilityData";

const Mobility = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-800 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">EcoFlow Mobility Products</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover sustainable electric bikes and mobility solutions.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-600 mb-4">EcoFlow Mobility Line</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reliable, clean, and modern mobility for urban & off-road adventures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {mobilityProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full flex flex-col justify-between">
                  <div className="aspect-square bg-gray-50 p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardHeader className="pb-1 px-3 pt-3">
                    <CardTitle className="text-sm text-green-600 leading-tight">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-3 pb-3">
                    <p className="text-xs text-gray-500 mb-2 truncate">{product.description}</p>
                    <p className="text-xl font-semibold text-green-600">
            {product.basePrice.toLocaleString()} <span className="text-sm text-gray-700">ETB</span>
          </p>
                    <Link to={`/mobility/${product.id}`}>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-xs py-1 h-7" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mobility;
