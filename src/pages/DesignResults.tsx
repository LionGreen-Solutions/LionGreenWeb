
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, ShoppingCart, Zap, Battery, Sun, Settings } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useConsultationSession } from '@/hooks/useConsultationSession';
import { generatePowerRequirements } from '@/lib/powerCalculations';

interface DesignResultsProps {}

const DesignResults: React.FC<DesignResultsProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { generateProductRecommendations, recommendedProducts, loading } = useConsultationSession();
  const [designData, setDesignData] = useState<any>(null);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const state = location.state;
    if (!state?.formData) {
      navigate('/consultation');
      return;
    }

    const { formData } = state;
    
    // Calculate total daily consumption
    let totalConsumption = 0;
    
    // Add appliance consumption
    formData.appliances?.forEach((appliance: any) => {
      totalConsumption += appliance.quantity * appliance.wattage * appliance.hoursPerDay;
    });
    
    // Add water pump consumption
    formData.waterPumps?.forEach((pump: any) => {
      totalConsumption += pump.wattage * pump.hoursPerDay;
    });
    
    // Add EV charging
    if (formData.evCharging?.hasEv) {
      totalConsumption += formData.evCharging.chargingRate * 1000 * (formData.evCharging.hoursPerWeek / 7);
    }
    
    // Add irrigation
    if (formData.irrigationSystem?.hasSystem) {
      totalConsumption += formData.irrigationSystem.area / 100 * 20 * formData.irrigationSystem.hoursPerDay;
    }

    // Generate power requirements
    const requirements = generatePowerRequirements(totalConsumption, formData.batteryBackupHours || 8);
    
    setDesignData({
      ...formData,
      totalConsumption: Math.round(totalConsumption),
      requirements,
      designType: getBudgetCategory(formData.budget)
    });

    // Generate product recommendations
    generateProductRecommendations(formData.budget);
  }, [location.state, navigate, generateProductRecommendations]);

  useEffect(() => {
    // Calculate total cost when recommendations are available
    if (recommendedProducts.length > 0) {
      const total = recommendedProducts.reduce((sum, product) => {
        const price = parseFloat(product.sample_price?.replace(/[^0-9.]/g, '') || '0');
        const quantity = product.recommended_quantity || 1;
        return sum + (price * quantity);
      }, 0);
      setTotalCost(total);
    }
  }, [recommendedProducts]);

  const getBudgetCategory = (budget: string) => {
    switch (budget) {
      case 'under-10k': return 'Basic';
      case '10k-25k': return 'Standard';
      case '25k-50k': return 'Premium';
      case 'over-50k': return 'Professional';
      default: return 'Custom';
    }
  };

  const getBudgetDescription = (budget: string) => {
    switch (budget) {
      case 'under-10k': return 'Cost-effective solution with reliable components';
      case '10k-25k': return 'Balanced performance and value with quality components';
      case '25k-50k': return 'High-performance system with premium components';
      case 'over-50k': return 'Professional-grade system with top-tier components';
      default: return 'Custom solution tailored to your needs';
    }
  };

  if (!designData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500">Loading your custom design...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="bg-navy-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate('/consultation')}
              className="text-white border-white hover:bg-white hover:text-navy-900"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Consultation
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-white">Your Custom Solar Design</h1>
          <p className="text-gray-300">Personalized for {designData.fullName}</p>
        </div>
      </div>

      <div className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Design Overview */}
            <div className="lg:col-span-2 space-y-6">
              {/* System Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    {designData.designType} Solar System Design
                  </CardTitle>
                  <CardDescription>
                    {getBudgetDescription(designData.budget)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Sun className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-600">
                        {Math.ceil(designData.requirements.solarPanelWatts / 1000)}kW
                      </div>
                      <div className="text-sm text-gray-600">Solar Panels</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Battery className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">
                        {Math.ceil(designData.requirements.batteryCapacity / 1000)}kWh
                      </div>
                      <div className="text-sm text-gray-600">Battery Storage</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Settings className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-purple-600">
                        {Math.ceil(designData.requirements.inverterSize / 1000)}kW
                      </div>
                      <div className="text-sm text-gray-600">Inverter</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-orange-600">
                        {designData.totalConsumption}
                      </div>
                      <div className="text-sm text-gray-600">Wh/day</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Products */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Recommended Components
                  </CardTitle>
                  <CardDescription>
                    Products selected based on your budget and energy needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">Generating product recommendations...</p>
                    </div>
                  ) : recommendedProducts.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No product recommendations available</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {recommendedProducts.map((product) => (
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
                              
                              {product.recommendation_reason && (
                                <p className="text-sm text-gray-600 mb-2">{product.recommendation_reason}</p>
                              )}
                              
                              {product.specs && Object.keys(product.specs).length > 0 && (
                                <div className="mb-3">
                                  <div className="flex flex-wrap gap-2">
                                    {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                                      <span key={key} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                        {key}: {String(value)}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              <div className="flex items-center justify-between">
                                <div>
                                  {product.sample_price && (
                                    <p className="font-semibold">
                                      {product.sample_price}
                                      {product.recommended_quantity && product.recommended_quantity > 1 && (
                                        <span className="text-sm text-gray-500 ml-1">each</span>
                                      )}
                                    </p>
                                  )}
                                  {product.recommended_quantity && product.recommended_quantity > 1 && product.sample_price && (
                                    <p className="text-sm text-gray-600">
                                      Subtotal: ${(parseFloat(product.sample_price.replace(/[^0-9.]/g, '') || '0') * product.recommended_quantity).toFixed(2)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            {product.image_url && (
                              <img 
                                src={product.image_url} 
                                alt={product.name}
                                className="w-16 h-16 object-cover rounded ml-4"
                              />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Cost Summary & Actions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Investment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>System Components</span>
                    <span className="font-semibold">${totalCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Installation (Est.)</span>
                    <span className="font-semibold">${(totalCost * 0.2).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Permits & Misc</span>
                    <span className="font-semibold">${(totalCost * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 text-lg font-bold border-t-2">
                    <span>Total Investment</span>
                    <span>${(totalCost * 1.3).toFixed(2)}</span>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-700">
                      <strong>Monthly Savings:</strong> ${Math.round(designData.totalConsumption * 30 * 0.12 / 1000)} - ${Math.round(designData.totalConsumption * 30 * 0.18 / 1000)}
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      Based on local electricity rates
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Download Design Report
                  </Button>
                  <Button variant="outline" className="w-full">
                    Schedule Site Visit
                  </Button>
                  <Button variant="outline" className="w-full">
                    Request Quote
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate('/consultation')}
                  >
                    Modify Requirements
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div><strong>Name:</strong> {designData.fullName}</div>
                  <div><strong>Location:</strong> {designData.city}, {designData.state}</div>
                  <div><strong>Property:</strong> {designData.propertyType}</div>
                  <div><strong>Budget:</strong> {designData.budget}</div>
                  <div><strong>Backup Hours:</strong> {designData.batteryBackupHours}h</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DesignResults;
