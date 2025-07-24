import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Battery, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
interface StaticMobilityProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  features: string[];
  specs: {
    [key: string]: string | number;
  };
  stock: number;
  bestSeller?: boolean;
  isNew?: boolean;
  discount?: number;
  range?: number;
  maxSpeed?: number;
  chargingTime?: number;
}
interface StaticMobilityProductCardProps {
  product: StaticMobilityProduct;
}
const StaticMobilityProductCard = ({
  product
}: StaticMobilityProductCardProps) => {
  const {
    addItem
  } = useCart();
  const handleAddToCart = () => {
    // Calculate discounted price if applicable
    const finalPrice = product.discount ? product.price * (1 - product.discount / 100) : product.price;
    addItem({
      id: product.id,
      name: product.name,
      price: finalPrice,
      image: product.image,
      quantity: 1,
      category: product.category
    });
  };

  // Calculate discounted price if applicable
  const finalPrice = product.discount ? product.price * (1 - product.discount / 100) : product.price;

  // Helper function to get display speed in mph (some products might be in km/h)
  const getSpeedDisplay = (speed: number | undefined) => {
    if (!speed) return "";

    // If it's a very low number, it's likely already in mph
    if (speed <= 35) return `${speed} mph`;

    // Otherwise it might be in km/h, convert to mph
    const mphSpeed = Math.round(speed * 0.621371);
    return `${mphSpeed} mph`;
  };

  // Convert km range to miles for display
  const getRangeDisplay = (range: number | undefined) => {
    if (!range) return "";

    // Convert km to miles (all our new products use km)
    const milesRange = Math.round(range * 0.621371);
    return `${milesRange} miles`;
  };
  return <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 group">
      <div className="relative overflow-hidden">
        {/* Product image */}
        <Link to={`/mobility/${product.id}`}>
          <img src={product.image} alt={product.name} className="w-full h-48 object-center group-hover:scale-105 transition-transform duration-500 object-contain" />
        </Link>
        
        {/* Product badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.bestSeller && <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
              BEST SELLER
            </span>}
          {product.isNew && <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
              NEW
            </span>}
          {product.discount && <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
              {product.discount}% OFF
            </span>}
        </div>
      </div>
      
      <div className="p-4">
        {/* Product category */}
        <div className="text-xs text-gray-500 uppercase mb-1 font-medium">
          {product.category.replace('-', ' ')}
        </div>
        
        {/* Product name */}
        <Link to={`/mobility/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors mb-1 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "#34B85E" : "none"} className={i < Math.floor(product.rating) ? "text-green-500" : "text-gray-300"} />)}
          <span className="text-xs text-gray-600 ml-1">({product.rating})</span>
        </div>

        {/* Key specs */}
        <div className="flex flex-wrap gap-3 mb-3 text-xs text-gray-600 bg-gray-50 p-2 rounded-md">
          {product.range && <div className="flex items-center gap-1">
              <Battery size={12} className="text-green-600" />
              <span>{getRangeDisplay(product.range)}</span>
            </div>}
          {product.maxSpeed && <div className="flex items-center gap-1">
              <Zap size={12} className="text-green-600" />
              <span>{getSpeedDisplay(product.maxSpeed)}</span>
            </div>}
          {product.chargingTime && <div className="flex items-center gap-1">
              <Clock size={12} className="text-green-600" />
              <span>{product.chargingTime}h charge</span>
            </div>}
        </div>
        
        {/* Price */}
        <div className="flex items-baseline mb-3">
          <span className="text-lg font-bold text-gray-800">
            ${finalPrice.toFixed(2)}
          </span>
          {product.discount && <span className="text-sm text-gray-500 line-through ml-2">
              ${product.price.toFixed(2)}
            </span>}
        </div>
        
        {/* Add to cart button */}
        <Button onClick={handleAddToCart} className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2">
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </div>
    </div>;
};
export default StaticMobilityProductCard;