
// import { useState, useEffect } from 'react';
// import { supabase } from '@/integrations/supabase/client';
// import { ConsultationSession } from '@/types/consultation';
// import { generateSessionId } from '@/utils/consultationHelpers';

// export const useSessionManagement = () => {
//   const [sessionId, setSessionId] = useState<string>('');
//   const [sessionData, setSessionData] = useState<ConsultationSession | null>(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Generate or retrieve session ID
//     let storedSessionId = localStorage.getItem('consultation_session_id');
//     if (!storedSessionId) {
//       storedSessionId = generateSessionId();
//       localStorage.setItem('consultation_session_id', storedSessionId);
//     }
//     setSessionId(storedSessionId);
//     loadSessionData(storedSessionId);
//   }, []);

//   const loadSessionData = async (sessionId: string) => {
//     try {
//       setLoading(true);
      
//       // Load session data
//       const { data: session } = await supabase
//         .from('consultation_sessions')
//         .select('*')
//         .eq('session_id', sessionId)
//         .maybeSingle();
      
//       if (session) {
//         setSessionData(session);
//       }
//     } catch (error) {
//       console.log('No existing session found, starting fresh');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const saveSessionData = async (data: Partial<ConsultationSession>) => {
//     try {
//       setLoading(true);
      
//       // Remove country_code from the data if it exists since it's not a valid column
//       const { country_code, ...sessionPayload } = data as any;
      
//       const finalPayload = {
//         session_id: sessionId,
//         ...sessionPayload,
//         updated_at: new Date().toISOString()
//       };

//       console.log('Saving session data:', finalPayload);

//       const { data: savedSession, error } = await supabase
//         .from('consultation_sessions')
//         .upsert(finalPayload, { 
//           onConflict: 'session_id',
//           ignoreDuplicates: false 
//         })
//         .select()
//         .single();

//       if (error) {
//         console.error('Error saving session:', error);
//         throw error;
//       }
      
//       console.log('Session saved successfully:', savedSession);
//       setSessionData(savedSession);
//       return savedSession;
//     } catch (error) {
//       console.error('Error saving session:', error);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     sessionId,
//     sessionData,
//     loading,
//     setLoading,
//     saveSessionData
//   };
// };
