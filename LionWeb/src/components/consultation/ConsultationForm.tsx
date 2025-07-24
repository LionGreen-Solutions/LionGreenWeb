import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useConsultationSession } from '@/hooks/useConsultationSession';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import ApplianceSelector from './ApplianceSelector';
import SystemDesignSummary from './SystemDesignSummary';
import RecommendedProductsSection from './RecommendedProductsSection';

const ConsultationForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    sessionData,
    appliances,
    loading,
    recommendedProducts,
    saveSessionData,
    addAppliance,
    removeAppliance,
    getTotalDailyConsumption,
    generateProductRecommendations
  } = useConsultationSession();

  const [formData, setFormData] = useState({
    full_name: sessionData?.full_name || '',
    email: sessionData?.email || '',
    phone: sessionData?.phone || '',
    country_code: '+251', // Default to Ethiopia
    address: sessionData?.address || '',
    city: sessionData?.city || '',
    state: sessionData?.state || '',
    zip_code: sessionData?.zip_code || '',
    property_type: sessionData?.property_type || '',
    budget: sessionData?.budget || '',
    installation_timeframe: sessionData?.installation_timeframe || '',
    battery_backup_hours: sessionData?.battery_backup_hours || 8,
    contact_preference: sessionData?.contact_preference || '',
    referral_source: sessionData?.referral_source || '',
    notes: sessionData?.notes || '',
    receive_updates: sessionData?.receive_updates || false,
    schedule_consultation: sessionData?.schedule_consultation || false
  });

  const countryCodes = [
    { code: '+251', country: 'Ethiopia' },
    { code: '+1', country: 'United States' },
    { code: '+44', country: 'United Kingdom' },
    { code: '+91', country: 'India' },
    { code: '+86', country: 'China' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+81', country: 'Japan' },
    { code: '+61', country: 'Australia' },
    { code: '+27', country: 'South Africa' }
  ];

  // Auto-generate recommendations when appliances or budget changes
  useEffect(() => {
    if (appliances.length > 0 && formData.budget) {
      const timer = setTimeout(() => {
        generateProductRecommendations(formData.budget);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [appliances.length, formData.budget, generateProductRecommendations]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const requiredFields = ['full_name', 'phone', 'city', 'state'];
    const missingFields = requiredFields.filter(field => !formData[field]?.trim());
    
    if (missingFields.length > 0) {
      toast.error(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateForm()) return;
    
    try {
      const phoneWithCountryCode = `${formData.country_code}${formData.phone}`;
      // Remove country_code from the data being saved since it's not a database column
      const { country_code, ...dataToSave } = formData;
      await saveSessionData({ ...dataToSave, phone: phoneWithCountryCode });
      toast.success('Consultation data saved successfully!');
    } catch (error) {
      console.error('Error saving:', error);
      toast.error('Error saving consultation data');
    }
  };

  const handleGetCustomDesign = async () => {
    console.log('Get Custom Design clicked');
    
    if (!validateForm()) return;
    
    if (appliances.length === 0) {
      toast.error('Please add at least one appliance to generate a custom design');
      return;
    }
    
    try {
      const phoneWithCountryCode = `${formData.country_code}${formData.phone}`;
      // Remove country_code from the data being saved
      const { country_code, ...dataToSave } = formData;
      const savedSession = await saveSessionData({ 
        ...dataToSave, 
        phone: phoneWithCountryCode, 
        status: 'design_generated' 
      });
      
      // Generate recommendations before navigating
      const recommendations = await generateProductRecommendations(formData.budget);
      
      const completeFormData = {
        ...formData,
        phone: phoneWithCountryCode,
        appliances: appliances.map(app => ({
          appliance_type: app.appliance_type,
          quantity: app.quantity,
          wattage: app.wattage,
          hours_per_day: app.hours_per_day,
          daily_consumption_wh: app.daily_consumption_wh
        })),
        waterPumps: [],
        evCharging: { hasEv: false },
        irrigationSystem: { hasSystem: false },
        totalDailyConsumption: getTotalDailyConsumption(),
        recommendedProducts: recommendations
      };
      
      console.log('Navigating to design-results with data:', completeFormData);
      
      navigate('/design-results', {
        state: { formData: completeFormData }
      });
      
      toast.success('Custom design generated successfully!');
    } catch (error) {
      console.error('Error generating design:', error);
      toast.error('Error generating custom design');
    }
  };

  const handleSubmit = async () => {
    console.log('Submit consultation clicked');
    
    if (!validateForm()) return;
    
    try {
      const phoneWithCountryCode = `${formData.country_code}${formData.phone}`;
      
      // Remove country_code from the data being saved
      const { country_code, ...dataToSave } = formData;
      
      // Save to consultation_sessions first
      const savedSession = await saveSessionData({ 
        ...dataToSave, 
        phone: phoneWithCountryCode, 
        status: 'submitted' 
      });

      console.log('Session saved:', savedSession);

      // Create order in orders table - convert data to plain objects for JSON compatibility
      const orderData = {
        consultation_session_id: savedSession.id,
        customer_full_name: formData.full_name,
        customer_email: formData.email,
        customer_phone: phoneWithCountryCode,
        customer_address: formData.address,
        customer_city: formData.city,
        customer_state: formData.state,
        customer_zip_code: formData.zip_code,
        property_type: formData.property_type,
        budget_range: formData.budget,
        installation_timeframe: formData.installation_timeframe,
        battery_backup_hours: formData.battery_backup_hours,
        contact_preference: formData.contact_preference,
        referral_source: formData.referral_source,
        notes: formData.notes,
        receive_updates: formData.receive_updates,
        schedule_consultation: formData.schedule_consultation,
        total_daily_consumption_wh: getTotalDailyConsumption(),
        appliances: appliances.map(app => ({
          appliance_type: app.appliance_type,
          quantity: app.quantity,
          wattage: app.wattage,
          hours_per_day: app.hours_per_day,
          daily_consumption_wh: app.daily_consumption_wh
        })),
        water_pumps: [],
        ev_charging: { hasEv: false },
        irrigation_system: { hasSystem: false },
        recommended_products: recommendedProducts.map(prod => ({
          id: prod.id,
          name: prod.name,
          category: prod.category,
          type: prod.type,
          description: prod.description,
          specs: prod.specs,
          sample_price: prod.sample_price,
          image_url: prod.image_url,
          recommended_quantity: prod.recommended_quantity,
          recommendation_reason: prod.recommendation_reason
        })),
        order_status: 'submitted'
      };

      console.log('Creating order with data:', orderData);

      const { data: orderResult, error: orderError } = await supabase
        .from('orders')
        .insert(orderData)
        .select()
        .single();

      if (orderError) {
        console.error('Order creation error:', orderError);
        throw orderError;
      }

      console.log('Order created successfully:', orderResult);

      toast.success('Consultation submitted successfully! We will contact you soon.');
      
      // Reset form or redirect as needed
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting:', error);
      toast.error('Error submitting consultation. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Solar Consultation Form</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="full_name">Full Name *</Label>
              <Input
                id="full_name"
                value={formData.full_name}
                onChange={(e) => handleInputChange('full_name', e.target.value)}
                required
                className="border-2"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <div className="flex gap-2">
                <Select value={formData.country_code} onValueChange={(value) => handleInputChange('country_code', value)}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((item) => (
                      <SelectItem key={item.code} value={item.code}>
                        {item.code} {item.country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="912345678"
                  required
                  className="border-2 flex-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="property_type">Property Type</Label>
              <Select value={formData.property_type} onValueChange={(value) => handleInputChange('property_type', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  required
                  className="border-2"
                />
              </div>
              <div>
                <Label htmlFor="state">State/Region *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  required
                  className="border-2"
                />
              </div>
              <div>
                <Label htmlFor="zip_code">Zip Code</Label>
                <Input
                  id="zip_code"
                  value={formData.zip_code}
                  onChange={(e) => handleInputChange('zip_code', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="budget">Budget Range</Label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-25k">Under 25,000 ETB</SelectItem>
                  <SelectItem value="25k-50k">25,000 - 50,000 ETB</SelectItem>
                  <SelectItem value="50k-100k">50,000 - 100,000 ETB</SelectItem>
                  <SelectItem value="over-100k">Over 100,000 ETB</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="installation_timeframe">Installation Timeframe</Label>
              <Select value={formData.installation_timeframe} onValueChange={(value) => handleInputChange('installation_timeframe', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="1-3-months">1-3 months</SelectItem>
                  <SelectItem value="3-6-months">3-6 months</SelectItem>
                  <SelectItem value="6-12-months">6-12 months</SelectItem>
                  <SelectItem value="future">Future planning</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="battery_backup_hours">Battery Backup Hours</Label>
            <Input
              id="battery_backup_hours"
              type="number"
              min="1"
              max="72"
              value={formData.battery_backup_hours}
              onChange={(e) => handleInputChange('battery_backup_hours', parseInt(e.target.value))}
            />
          </div>

          <div>
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="Any specific requirements or questions?"
            />
          </div>

          {/* Preferences */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="receive_updates"
                checked={formData.receive_updates}
                onCheckedChange={(checked) => handleInputChange('receive_updates', checked)}
              />
              <Label htmlFor="receive_updates">Receive updates about solar technology and offers</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="schedule_consultation"
                checked={formData.schedule_consultation}
                onCheckedChange={(checked) => handleInputChange('schedule_consultation', checked)}
              />
              <Label htmlFor="schedule_consultation">Schedule a follow-up consultation</Label>
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={handleSave} variant="outline" disabled={loading}>
              Save Draft
            </Button>
            <Button onClick={handleSubmit} variant="outline" disabled={loading}>
              Submit Consultation
            </Button>
            <Button 
              onClick={handleGetCustomDesign} 
              disabled={loading || appliances.length === 0}
              className="bg-green-600 hover:bg-green-700"
            >
              Get Your Custom Design
            </Button>
          </div>
        </CardContent>
      </Card>

      <ApplianceSelector
        appliances={appliances}
        onAddAppliance={addAppliance}
        onRemoveAppliance={removeAppliance}
      />

      {appliances.length > 0 && (
        <SystemDesignSummary
          dailyConsumption={getTotalDailyConsumption()}
          backupHours={formData.battery_backup_hours}
          budget={formData.budget}
          appliances={appliances}
        />
      )}

      <RecommendedProductsSection
        products={recommendedProducts}
        loading={loading}
      />
    </div>
  );
};

export default ConsultationForm;
