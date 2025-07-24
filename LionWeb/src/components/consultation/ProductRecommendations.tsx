
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Info } from 'lucide-react';
import { ProductRecommendation } from '@/hooks/useConsultationSession';

interface ProductRecommendationsProps {
  recommendations: ProductRecommendation[];
  loading: boolean;
  onGenerateRecommendations: (budget?: string) => void;
  budget?: string;
}

const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({
  recommendations,
  loading,
  onGenerateRecommendations,
  budget
}) => {
  const calculateTotalCost = () => {
    return recommendations.reduce((total, product) => {
      const price = parseFloat(product.sample_price?.replace(/[^0-9.]/g, '') || '0');
      const quantity = product.recommended_quantity || 1;
      return total + (price * quantity);
    }, 0);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          Recommended Products
        </CardTitle>
        <CardDescription>
          Based on your energy consumption and budget, here are our recommended components
        </CardDescription>
      </CardHeader>
      <CardContent>
        {recommendations.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">
              Generate product recommendations based on your energy needs and budget
            </p>
            <Button 
              onClick={() => onGenerateRecommendations(budget)}
              disabled={loading}
            >
              {loading ? 'Generating...' : 'Generate Recommendations'}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {recommendations.map((product) => (
              <div key={product.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{product.name}</h4>
                      <Badge variant="secondary">{product.category}</Badge>
                      {product.recommended_quantity && product.recommended_quantity > 1 && (
                        <Badge variant="outline">
                          Qty: {product.recommended_quantity}
                        </Badge>
                      )}
                    </div>
                    
                    {product.description && (
                      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                    )}
                    
                    {product.recommendation_reason && (
                      <div className="flex items-start gap-2 mb-3 p-2 bg-blue-50 rounded">
                        <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-blue-700">{product.recommendation_reason}</p>
                      </div>
                    )}
                    
                    {product.specs && Object.keys(product.specs).length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs font-medium text-gray-500 mb-1">Specifications:</p>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                            <span key={key} className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {key}: {String(value)}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {product.image_url && (
                    <img 
                      src={product.image_url} 
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded ml-4"
                    />
                  )}
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div>
                    {product.sample_price && (
                      <p className="font-semibold text-lg">
                        {product.sample_price}
                        {product.recommended_quantity && product.recommended_quantity > 1 && (
                          <span className="text-sm text-gray-500 ml-1">each</span>
                        )}
                      </p>
                    )}
                    {product.recommended_quantity && product.recommended_quantity > 1 && product.sample_price && (
                      <p className="text-sm text-gray-600">
                        Total: ${(parseFloat(product.sample_price.replace(/[^0-9.]/g, '') || '0') * product.recommended_quantity).toFixed(2)}
                      </p>
                    )}
                  </div>
                  
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
            
            {recommendations.length > 0 && (
              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-lg">
                      Estimated Total: ${calculateTotalCost().toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Prices may vary based on installation and additional components
                    </p>
                  </div>
                  <Button onClick={() => onGenerateRecommendations(budget)}>
                    Refresh Recommendations
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductRecommendations;
