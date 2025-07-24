
export interface ConsultationSession {
  id?: string;
  session_id: string;
  full_name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  property_type?: string;
  budget?: string;
  installation_timeframe?: string;
  battery_backup_hours?: number;
  contact_preference?: string;
  referral_source?: string;
  notes?: string;
  receive_updates?: boolean;
  schedule_consultation?: boolean;
  status?: string;
}

export interface ApplianceData {
  id?: string;
  appliance_type: string;
  quantity: number;
  wattage: number;
  hours_per_day: number;
  daily_consumption_wh?: number;
}

export interface ProductRecommendation {
  id: string;
  name: string;
  category: string;
  type?: string;
  description?: string;
  specs: any;
  sample_price?: string;
  image_url?: string;
  recommended_quantity?: number;
  recommendation_reason?: string;
}
