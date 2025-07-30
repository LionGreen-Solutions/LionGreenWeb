
// import { useState, useEffect } from 'react';
// import { supabase } from '@/integrations/supabase/client';
// import { ApplianceData, ConsultationSession } from '@/types/consultation';

// export const useApplianceManagement = (
//   sessionData: ConsultationSession | null,
//   saveSessionData: (data: Partial<ConsultationSession>) => Promise<ConsultationSession>
// ) => {
//   const [appliances, setAppliances] = useState<ApplianceData[]>([]);

//   useEffect(() => {
//     if (sessionData?.id) {
//       loadAppliances(sessionData.id);
//     }
//   }, [sessionData?.id]);

//   const loadAppliances = async (sessionId: string) => {
//     try {
//       const { data: applianceData } = await supabase
//         .from('consultation_appliances')
//         .select('*')
//         .eq('consultation_session_id', sessionId);
      
//       if (applianceData) {
//         setAppliances(applianceData);
//       }
//     } catch (error) {
//       console.error('Error loading appliances:', error);
//     }
//   };

//   const addAppliance = async (appliance: Omit<ApplianceData, 'id'>): Promise<void> => {
//     try {
//       console.log('Adding appliance:', appliance);
      
//       // Ensure session exists
//       let currentSession = sessionData;
//       if (!currentSession?.id) {
//         console.log('No session found, creating new session...');
//         currentSession = await saveSessionData({});
//       }

//       if (!currentSession?.id) {
//         throw new Error('No active session');
//       }

//       console.log('Using session ID:', currentSession.id);

//       // Don't include daily_consumption_wh since it's a generated column
//       const applianceData = {
//         consultation_session_id: currentSession.id,
//         appliance_type: appliance.appliance_type,
//         quantity: appliance.quantity,
//         wattage: appliance.wattage,
//         hours_per_day: appliance.hours_per_day
//         // daily_consumption_wh is removed - it's calculated automatically by the database
//       };

//       console.log('Inserting appliance data:', applianceData);

//       const { data, error } = await supabase
//         .from('consultation_appliances')
//         .insert(applianceData)
//         .select()
//         .single();

//       if (error) {
//         console.error('Error inserting appliance:', error);
//         throw error;
//       }
      
//       console.log('Appliance added successfully:', data);
//       setAppliances(prev => [...prev, data]);
//     } catch (error) {
//       console.error('Error adding appliance:', error);
//       throw error;
//     }
//   };

//   const removeAppliance = async (applianceId: string) => {
//     try {
//       console.log('Removing appliance:', applianceId);
      
//       const { error } = await supabase
//         .from('consultation_appliances')
//         .delete()
//         .eq('id', applianceId);

//       if (error) {
//         console.error('Error removing appliance:', error);
//         throw error;
//       }
      
//       console.log('Appliance removed successfully');
//       setAppliances(prev => prev.filter(a => a.id !== applianceId));
//     } catch (error) {
//       console.error('Error removing appliance:', error);
//       throw error;
//     }
//   };

//   const getTotalDailyConsumption = () => {
//     return appliances.reduce((total, appliance) => {
//       return total + (appliance.daily_consumption_wh || 0);
//     }, 0);
//   };

//   return {
//     appliances,
//     addAppliance,
//     removeAppliance,
//     getTotalDailyConsumption
//   };
// };
