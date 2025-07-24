
import { supabase } from '@/integrations/supabase/client';
import { ProductRecommendation } from '@/types/consultation';
import { generatePowerRequirements } from '@/lib/powerCalculations';
import { getSpecValue } from '@/utils/consultationHelpers';

export const getDesignToolProducts = async () => {
  try {
    const { data, error } = await supabase
      .from('product_storage')
      .select('*')
      .eq('show_in_design_tool', true)
      .eq('available', true)
      .order('category, name');

    if (error) throw error;
    
    return data || [];
  } catch (error) {
    console.error('Error fetching design tool products:', error);
    return [];
  }
};

export const generateProductRecommendations = async (
  dailyConsumption: number,
  backupHours: number,
  budgetRange?: string
): Promise<ProductRecommendation[]> => {
  try {
    console.log('Generating recommendations for:', { dailyConsumption, backupHours, budgetRange });
    
    // Calculate power requirements
    const requirements = generatePowerRequirements(dailyConsumption, backupHours);
    
    // Fetch available products from Supabase
    const { data: products, error } = await supabase
      .from('product_storage')
      .select('*')
      .eq('show_in_design_tool', true)
      .eq('available', true);

    if (error) throw error;

    const recommendations: ProductRecommendation[] = [];
    
    // Parse budget range
    const budgetMap: { [key: string]: [number, number] } = {
      'under-10k': [0, 10000],
      '10k-25k': [10000, 25000],
      '25k-50k': [25000, 50000],
      'over-50k': [50000, 100000]
    };
    
    const budget = budgetRange ? budgetMap[budgetRange] || [0, 100000] : [0, 100000];
    
    // Solar Panel Recommendations
    const solarPanels = products.filter(p => p.category === 'solar-panels');
    if (solarPanels.length > 0) {
      const panelCount = Math.ceil(requirements.solarPanelWatts / 300); // Assuming 300W panels
      const suitablePanels = solarPanels.filter(panel => {
        const price = parseFloat(panel.sample_price?.replace(/[^0-9.]/g, '') || '0');
        return price * panelCount <= budget[1] * 0.4; // Allocate 40% of budget to panels
      });
      
      if (suitablePanels.length > 0) {
        recommendations.push({
          ...suitablePanels[0],
          recommended_quantity: panelCount,
          recommendation_reason: `Based on your ${dailyConsumption}Wh daily consumption, you need approximately ${requirements.solarPanelWatts}W of solar panels.`
        });
      }
    }

    // Battery Recommendations
    const batteries = products.filter(p => p.category === 'batteries');
    if (batteries.length > 0) {
      const batteryCount = Math.ceil(requirements.batteryCapacity / 5000); // Assuming 5kWh batteries
      const suitableBatteries = batteries.filter(battery => {
        const price = parseFloat(battery.sample_price?.replace(/[^0-9.]/g, '') || '0');
        return price * batteryCount <= budget[1] * 0.35; // Allocate 35% of budget to batteries
      });
      
      if (suitableBatteries.length > 0) {
        recommendations.push({
          ...suitableBatteries[0],
          recommended_quantity: batteryCount,
          recommendation_reason: `For ${backupHours} hours of backup power, you need ${Math.round(requirements.batteryCapacity / 1000)}kWh of battery storage.`
        });
      }
    }

    // Inverter Recommendations
    const inverters = products.filter(p => p.category === 'inverters');
    if (inverters.length > 0) {
      const suitableInverters = inverters.filter(inverter => {
        const power = getSpecValue(inverter.specs, 'power', 'watts');
        const price = parseFloat(inverter.sample_price?.replace(/[^0-9.]/g, '') || '0');
        return power >= requirements.inverterSize && price <= budget[1] * 0.15; // Allocate 15% to inverter
      });
      
      if (suitableInverters.length > 0) {
        recommendations.push({
          ...suitableInverters[0],
          recommended_quantity: 1,
          recommendation_reason: `You need at least ${requirements.inverterSize}W inverter capacity for your power requirements.`
        });
      }
    }

    // Charge Controller Recommendations
    const chargeControllers = products.filter(p => p.category === 'charge-controllers');
    if (chargeControllers.length > 0) {
      const requiredCurrent = Math.ceil(requirements.solarPanelWatts / 12); // Assuming 12V system
      const suitableControllers = chargeControllers.filter(controller => {
        const current = getSpecValue(controller.specs, 'current', 'amps');
        const price = parseFloat(controller.sample_price?.replace(/[^0-9.]/g, '') || '0');
        return current >= requiredCurrent && price <= budget[1] * 0.1; // Allocate 10% to charge controller
      });
      
      if (suitableControllers.length > 0) {
        recommendations.push({
          ...suitableControllers[0],
          recommended_quantity: 1,
          recommendation_reason: `You need a charge controller rated for at least ${requiredCurrent}A for your solar panel array.`
        });
      }
    }

    console.log('Generated recommendations:', recommendations);
    return recommendations;
    
  } catch (error) {
    console.error('Error generating product recommendations:', error);
    return [];
  }
};
