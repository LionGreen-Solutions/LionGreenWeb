import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/data';
import { useCart } from '../context/CartContext';
import ServiceBanner from './ServiceBanner';
interface ProductFeatureProps {
  product: Product;
  reverse?: boolean;
}
const ProductFeature = ({
  product,
  reverse = false
}: ProductFeatureProps) => {
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
  return <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
      {/* Product Image */}
      <div className="w-full md:w-1/2">
        <div className="relative overflow-hidden rounded-lg">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          {product.bestSeller && <div className="absolute top-4 left-4 bg-green-500 text-white font-bold px-3 py-1 rounded-md">
              BEST SELLER
            </div>}
          {product.isNew && <div className="absolute top-4 left-4 bg-green-400 text-white font-bold px-3 py-1 rounded-md">
              NEW ARRIVAL
            </div>}
        </div>
      </div>
      
      {/* Product Details */}
      <div className="w-full md:w-1/2">
        <h3 className="text-sm font-medium uppercase text-green-600 mb-2">
          {product.category.replace('-', ' ')}
        </h3>
        <h2 className="text-3xl font-bold mb-4 text-slate-50">
          {product.name}
        </h2>
        <p className="mb-6 text-slate-50">
          {product.description}
        </p>
        
        {/* Key Features */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-slate-50">Key Features</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-4">
            {product.features.slice(0, 4).map((feature, index) => <li key={index} className="flex items-center text-sm text-gray-700 bg-gray-950">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {feature}
              </li>)}
          </ul>
        </div>
        
        {/* Service Banner */}
        <ServiceBanner className="mb-6" />
        
        {/* Price and CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-2xl font-bold text-gray-800 bg-slate-50">
            ${product.price.toFixed(2)}
          </div>
          
          <div className="flex gap-3">
            <Button onClick={handleAddToCart} className="bg-green-500 hover:bg-green-600 text-white">
              <ShoppingCart size={18} className="mr-2" />
              Add to Cart
            </Button>
            
            <Link to={`/products/${product.id}`}>
              <Button variant="outline" className="border-gray-800 text-slate-50 bg-gray-900 hover:bg-gray-800">
                View Details
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default ProductFeature;