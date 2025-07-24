
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Zap, Shield, Award } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  specs?: any;
  product?: any; // For compatibility with old usage
  onViewDetails?: () => void; // New prop for modal
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  description, 
  price, 
  image, 
  specs = {},
  product,
  onViewDetails
}) => {
  // Handle both new direct props and old product object
  const productData = product || { id, name, description, price, image, specs };
  
  const handleAddToCart = () => {
    console.log(`Adding ${productData.name} to cart`);
    // Cart functionality will be implemented separately
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
        <img
          src={productData.image}
          alt={productData.name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{productData.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{productData.description}</p>

        {/* Key Specs */}
        {productData.specs && (
          <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
            {productData.specs.wattage && (
              <div className="flex items-center text-gray-600">
                <Zap className="w-3 h-3 mr-1" />
                <span>{productData.specs.wattage}W</span>
              </div>
            )}
            {productData.specs.warranty && (
              <div className="flex items-center text-gray-600">
                <Shield className="w-3 h-3 mr-1" />
                <span>{productData.specs.warranty}</span>
              </div>
            )}
            {productData.specs.type && (
              <div className="flex items-center text-gray-600 col-span-2">
                <Award className="w-3 h-3 mr-1" />
                <span className="capitalize">{productData.specs.type}</span>
              </div>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600">{productData.price}</div>
          <div className="flex gap-2">
            {onViewDetails ? (
              <button
                onClick={handleViewDetails}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
              >
                View Details
              </button>
            ) : (
              <Link 
                to={`/products/${productData.id}`}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
              >
                View Details
              </Link>
            )}
            <button
              onClick={handleAddToCart}
              className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              title="Add to Cart"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
