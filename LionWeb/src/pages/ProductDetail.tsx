
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useProducts, Product } from '@/hooks/useProducts';
import { ShoppingCart, ArrowLeft, Zap, Shield, Award, Package, Ruler, Weight } from 'lucide-react';
import { Loader2 } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        setLoading(true);
        const productData = await getProductById(id);
        setProduct(productData);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, getProductById]);

  const handleAddToCart = () => {
    if (product) {
      console.log(`Adding ${quantity} x ${product.name} to cart`);
      // Cart functionality will be implemented separately
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2">Loading product...</span>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
            <p className="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
            <Link 
              to="/products" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const specs = product.specs || {};

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link 
              to="/products" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="aspect-w-16 aspect-h-12 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image_url || '/placeholder.svg'}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Price */}
                <div className="text-3xl font-bold text-blue-600 mb-6">
                  {product.sample_price || 'Contact for price'}
                </div>

                {/* Key Specifications */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {specs.wattage && (
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Zap className="w-5 h-5 text-blue-600 mr-2" />
                      <div>
                        <div className="text-sm text-gray-600">Power Output</div>
                        <div className="font-semibold">{specs.wattage}W</div>
                      </div>
                    </div>
                  )}
                  
                  {specs.type && (
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <Award className="w-5 h-5 text-green-600 mr-2" />
                      <div>
                        <div className="text-sm text-gray-600">Technology</div>
                        <div className="font-semibold capitalize">{specs.type}</div>
                      </div>
                    </div>
                  )}
                  
                  {specs.warranty && (
                    <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <Shield className="w-5 h-5 text-purple-600 mr-2" />
                      <div>
                        <div className="text-sm text-gray-600">Warranty</div>
                        <div className="font-semibold">{specs.warranty}</div>
                      </div>
                    </div>
                  )}
                  
                  {specs.weight && (
                    <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                      <Weight className="w-5 h-5 text-orange-600 mr-2" />
                      <div>
                        <div className="text-sm text-gray-600">Weight</div>
                        <div className="font-semibold">{specs.weight}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                </div>

                {/* Technical Specifications */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
                  <div className="grid gap-2">
                    {specs.dimensions && (
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Dimensions</span>
                        <span className="font-medium">{specs.dimensions}</span>
                      </div>
                    )}
                    {specs.efficiency_10_years && (
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">10-Year Efficiency</span>
                        <span className="font-medium">{specs.efficiency_10_years}</span>
                      </div>
                    )}
                    {specs.efficiency_25_years && (
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">25-Year Efficiency</span>
                        <span className="font-medium">{specs.efficiency_25_years}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
