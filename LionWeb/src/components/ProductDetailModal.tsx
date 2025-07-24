
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap, Shield, Award } from 'lucide-react';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    specs?: any;
  } | null;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  const handleAddToCart = () => {
    console.log(`Adding ${product.name} to cart`);
    // Cart functionality will be implemented separately
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <p className="text-gray-600">{product.description}</p>

            {/* Price */}
            <div className="text-2xl font-bold text-blue-600">{product.price}</div>

            {/* Key Specs */}
            {product.specs && (
              <div className="space-y-2">
                <h4 className="font-semibold">Specifications:</h4>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {product.specs.wattage && (
                    <div className="flex items-center text-gray-600">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>Power: {product.specs.wattage}W</span>
                    </div>
                  )}
                  {product.specs.warranty && (
                    <div className="flex items-center text-gray-600">
                      <Shield className="w-4 h-4 mr-2" />
                      <span>Warranty: {product.specs.warranty}</span>
                    </div>
                  )}
                  {product.specs.efficiency && (
                    <div className="flex items-center text-gray-600">
                      <Award className="w-4 h-4 mr-2" />
                      <span>Efficiency: {product.specs.efficiency}</span>
                    </div>
                  )}
                  {product.specs.type && (
                    <div className="flex items-center text-gray-600">
                      <Award className="w-4 h-4 mr-2" />
                      <span>Type: {product.specs.type}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
