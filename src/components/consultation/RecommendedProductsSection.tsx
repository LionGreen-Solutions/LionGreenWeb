
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Info } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  sample_price?: string;
  image_url?: string;
  recommended_quantity?: number;
  recommendation_reason?: string;
  specs?: any;
}

interface RecommendedProductsSectionProps {
  products: Product[];
  loading: boolean;
}

const RecommendedProductsSection: React.FC<RecommendedProductsSectionProps> = ({
  products,
  loading
}) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'solar-panels': return 'bg-blue-100 text-blue-800';
      case 'batteries': return 'bg-green-100 text-green-800';
      case 'inverters': return 'bg-yellow-100 text-yellow-800';
      case 'charge-controllers': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCategory = (category: string) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recommended Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            <span className="ml-2">Generating recommendations...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (products.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recommended Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Info className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 mb-2">No product recommendations available</p>
            <p className="text-sm text-gray-400">
              Add appliances and set a budget to see product recommendations
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          Recommended Products
        </CardTitle>
        <p className="text-sm text-gray-600">
          Based on your energy needs and budget range
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">{product.name}</h4>
                  <Badge className={getCategoryColor(product.category)}>
                    {formatCategory(product.category)}
                  </Badge>
                </div>
                {product.sample_price && (
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">
                      {product.sample_price}
                    </p>
                    {product.recommended_quantity && product.recommended_quantity > 1 && (
                      <p className="text-sm text-gray-500">
                        Qty: {product.recommended_quantity}
                      </p>
                    )}
                  </div>
                )}
              </div>
              
              {product.image_url && (
                <div className="mb-3">
                  <img 
                    src={product.image_url} 
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
              )}
              
              {product.recommendation_reason && (
                <div className="mb-3 p-3 bg-blue-50 rounded-md">
                  <p className="text-sm text-blue-800">
                    <Info className="h-4 w-4 inline mr-1" />
                    {product.recommendation_reason}
                  </p>
                </div>
              )}
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button size="sm" className="flex-1">
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendedProductsSection;
