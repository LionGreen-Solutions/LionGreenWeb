import { useParams, Link } from "react-router-dom";
import { mobilityProducts } from "@/lib/mobilityData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const MobilityDetail = () => {
  const { id } = useParams();
  const product = mobilityProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Navbar />
        <div className="flex-grow flex items-center justify-center text-center text-red-500 text-xl py-20">
          Product not found.
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />

      {/* 
        Image section intentionally removed due to blinking issue.
        Uncomment and fix later if needed.
      */}

      <main className="container mx-auto px-4 py-12">
        {/* Product Info - Full Width */}
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-green-400 text-center">
            {product.name}
          </h1>

          {/* Price */}
          <p className="text-xl font-semibold text-green-300 text-center">
            {product.basePrice.toLocaleString()}{" "}
            <span className="text-sm text-gray-300">ETB</span>
          </p>

          {/* Description */}
          {product.description && (
            <div>
              <h2 className="font-semibold text-lg">Description</h2>
              <p className="text-sm">{product.description}</p>
            </div>
          )}

          {/* Specifications */}
          {product.specs && (
            <div>
              <h2 className="font-semibold text-lg">Specifications</h2>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {Object.entries(product.specs).map(([key, value]) =>
                  value ? (
                    <li key={key}>
                      <strong>
                        {key.replace(/([A-Z])/g, " $1")}:
                      </strong>{" "}
                      {Array.isArray(value) ? value.join(", ") : value}
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}

          {/* Features */}
          {product.features?.length > 0 && (
            <div>
              <h2 className="font-semibold text-lg">Features</h2>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Battery Options */}
          {product.batteryOptions?.length > 0 && (
            <div>
              <h2 className="font-semibold text-lg">Battery Options</h2>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {product.batteryOptions.map((battery, index) => (
                  <li key={index}>
                    <strong>Type:</strong> {battery.type},{" "}
                    <strong>Capacity:</strong> {battery.capacity},{" "}
                    <strong>Price:</strong>{" "}
                    {battery.price.toLocaleString()} ETB
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Add to Cart */}
          <div className="pt-4 text-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Add to Cart
            </Button>
          </div>

          {/* Back Link */}
          <div className="text-center">
            <Link
              to="/mobility"
              className="inline-flex items-center gap-1 mt-4 text-green-400 hover:underline text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Mobility
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MobilityDetail;
