
import { useState } from 'react';
import { ProductRecommendation } from '@/types/consultation';
import { useSessionManagement } from './useSessionManagement';
import { useApplianceManagement } from './useApplianceManagement';
import { getDesignToolProducts, generateProductRecommendations as generateRecommendations } from '@/services/productRecommendationService';

export const useConsultationSession = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<ProductRecommendation[]>([]);
  
  const {
    sessionId,
    sessionData,
    loading,
    setLoading,
    saveSessionData
  } = useSessionManagement();

  const {
    appliances,
    addAppliance,
    removeAppliance,
    getTotalDailyConsumption
  } = useApplianceManagement(sessionData, saveSessionData);

  const generateProductRecommendations = async (budgetRange?: string) => {
    try {
      setLoading(true);
      
      const dailyConsumption = getTotalDailyConsumption();
      const backupHours = sessionData?.battery_backup_hours || 8;
      
      const recommendations = await generateRecommendations(dailyConsumption, backupHours, budgetRange);
      
      setRecommendedProducts(recommendations);
      return recommendations;
      
    } catch (error) {
      console.error('Error generating product recommendations:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    sessionId,
    sessionData,
    appliances,
    loading,
    recommendedProducts,
    saveSessionData,
    addAppliance,
    removeAppliance,
    getTotalDailyConsumption,
    getDesignToolProducts,
    generateProductRecommendations
  };
};

// Export types for backward compatibility
export type { ConsultationSession, ApplianceData, ProductRecommendation } from '@/types/consultation';
