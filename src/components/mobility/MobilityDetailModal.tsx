import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import { MobilityProduct } from "@/lib/mobilityData";
import { useCart } from "@/context/CartContext";

interface MobilityDetailModalProps {
  product: MobilityProduct;
  children: React.ReactNode;
}

const MobilityDetailModal = ({ product, children }: MobilityDetailModalProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    const finalPrice = product.discount 
      ? product.basePrice * (1 - product.discount / 100) 
      : product.basePrice;
      
    addItem({
      id: product.id,
      name: product.name,
      price: finalPrice,
      image: product.image,
      quantity: 1,
      category: product.category
    });
  };

  const finalPrice = product.discount 
    ? product.basePrice * (1 - product.discount / 100) 
    : product.basePrice;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-80 object-contain rounded-lg"
            />
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {product.bestSeller && (
                <Badge variant="secondary" className="bg-green-600 text-white">
                  BEST SELLER
                </Badge>
              )}
              {product.isNew && (
                <Badge variant="secondary" className="bg-blue-600 text-white">
                  NEW
                </Badge>
              )}
              {product.discount && (
                <Badge variant="secondary" className="bg-red-600 text-white">
                  {product.discount}% OFF
                </Badge>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">{product.category.replace('-', ' ')}</p>
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-green-600">
                  from ${product.basePrice.toFixed(2)}
                </span>
                {product.discount && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.basePrice.toFixed(2)}
                  </span>
                )}
              </div>
              
              {/* Battery Options */}
              {product.batteryOptions && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Battery Options:</h4>
                  <div className="space-y-2">
                    {product.batteryOptions.map((option, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>{option.type} - {option.capacity}</span>
                        <span className="font-semibold">${option.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-1 gap-3">
              <h4 className="font-semibold text-lg">Specifications:</h4>
              <div className="grid grid-cols-1 gap-2 text-sm">
                {product.specs.weight && (
                  <div className="flex justify-between">
                    <span className="font-medium">Weight:</span>
                    <span>{product.specs.weight}</span>
                  </div>
                )}
                {product.specs.dimensions && (
                  <div className="flex justify-between">
                    <span className="font-medium">Dimensions:</span>
                    <span>{product.specs.dimensions}</span>
                  </div>
                )}
                {product.specs.motor && (
                  <div className="flex justify-between">
                    <span className="font-medium">Motor:</span>
                    <span>{product.specs.motor}</span>
                  </div>
                )}
                {product.specs.battery && (
                  <div className="flex justify-between">
                    <span className="font-medium">Battery:</span>
                    <span>{product.specs.battery}</span>
                  </div>
                )}
                {product.specs.tires && (
                  <div className="flex justify-between">
                    <span className="font-medium">Tires:</span>
                    <span>{product.specs.tires}</span>
                  </div>
                )}
                {product.specs.absorber && (
                  <div className="flex justify-between">
                    <span className="font-medium">Absorber:</span>
                    <span>{product.specs.absorber}</span>
                  </div>
                )}
                {product.specs.maxSpeed && (
                  <div className="flex justify-between">
                    <span className="font-medium">Max Speed:</span>
                    <span>{product.specs.maxSpeed}</span>
                  </div>
                )}
                {product.specs.loadCapacity && (
                  <div className="flex justify-between">
                    <span className="font-medium">Load Capacity:</span>
                    <span>{product.specs.loadCapacity}</span>
                  </div>
                )}
                {product.specs.chargingTime && (
                  <div className="flex justify-between">
                    <span className="font-medium">Charging Time:</span>
                    <span>{product.specs.chargingTime}</span>
                  </div>
                )}
                {product.specs.optionalColors && (
                  <div className="flex justify-between">
                    <span className="font-medium">Optional Colors:</span>
                    <span>{product.specs.optionalColors.join(', ')}</span>
                  </div>
                )}
                {product.specs.packagingSize && (
                  <div className="flex justify-between">
                    <span className="font-medium">Packaging Size:</span>
                    <span>{product.specs.packagingSize}</span>
                  </div>
                )}
                {product.specs.containerQty && (
                  <div className="flex justify-between">
                    <span className="font-medium">40ft Container QTY:</span>
                    <span>{product.specs.containerQty}</span>
                  </div>
                )}
                {product.specs.warranty && (
                  <div className="flex justify-between">
                    <span className="font-medium">Warranty:</span>
                    <span>{product.specs.warranty}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold mb-2">Features:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Add to Cart Button */}
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobilityDetailModal;