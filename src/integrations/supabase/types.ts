// export type Json =
//   | string
//   | number
//   | boolean
//   | null
//   | { [key: string]: Json | undefined }
//   | Json[]

// export type Database = {
//   // Allows to automatically instanciate createClient with right options
//   // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
//   __InternalSupabase: {
//     PostgrestVersion: "12.2.3 (519615d)"
//   }
//   public: {
//     Tables: {
//       appliance_types: {
//         Row: {
//           avg_wattage: number
//           category: string | null
//           created_at: string | null
//           description: string | null
//           id: string
//           name: string
//         }
//         Insert: {
//           avg_wattage: number
//           category?: string | null
//           created_at?: string | null
//           description?: string | null
//           id?: string
//           name: string
//         }
//         Update: {
//           avg_wattage?: number
//           category?: string | null
//           created_at?: string | null
//           description?: string | null
//           id?: string
//           name?: string
//         }
//         Relationships: []
//       }
//       consultation_appliances: {
//         Row: {
//           appliance_type: string
//           consultation_session_id: string | null
//           created_at: string | null
//           daily_consumption_wh: number | null
//           hours_per_day: number
//           id: string
//           quantity: number
//           wattage: number
//         }
//         Insert: {
//           appliance_type: string
//           consultation_session_id?: string | null
//           created_at?: string | null
//           daily_consumption_wh?: number | null
//           hours_per_day: number
//           id?: string
//           quantity?: number
//           wattage: number
//         }
//         Update: {
//           appliance_type?: string
//           consultation_session_id?: string | null
//           created_at?: string | null
//           daily_consumption_wh?: number | null
//           hours_per_day?: number
//           id?: string
//           quantity?: number
//           wattage?: number
//         }
//         Relationships: [
//           {
//             foreignKeyName: "consultation_appliances_consultation_session_id_fkey"
//             columns: ["consultation_session_id"]
//             isOneToOne: false
//             referencedRelation: "consultation_sessions"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//       consultation_ev_charging: {
//         Row: {
//           charging_rate_kw: number | null
//           consultation_session_id: string | null
//           created_at: string | null
//           daily_consumption_wh: number | null
//           has_ev: boolean | null
//           hours_per_week: number | null
//           id: string
//         }
//         Insert: {
//           charging_rate_kw?: number | null
//           consultation_session_id?: string | null
//           created_at?: string | null
//           daily_consumption_wh?: number | null
//           has_ev?: boolean | null
//           hours_per_week?: number | null
//           id?: string
//         }
//         Update: {
//           charging_rate_kw?: number | null
//           consultation_session_id?: string | null
//           created_at?: string | null
//           daily_consumption_wh?: number | null
//           has_ev?: boolean | null
//           hours_per_week?: number | null
//           id?: string
//         }
//         Relationships: [
//           {
//             foreignKeyName: "consultation_ev_charging_consultation_session_id_fkey"
//             columns: ["consultation_session_id"]
//             isOneToOne: false
//             referencedRelation: "consultation_sessions"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//       consultation_irrigation: {
//         Row: {
//           area_sqm: number | null
//           consultation_session_id: string | null
//           created_at: string | null
//           daily_consumption_wh: number | null
//           has_system: boolean | null
//           hours_per_day: number | null
//           id: string
//         }
//         Insert: {
//           area_sqm?: number | null
//           consultation_session_id?: string | null
//           created_at?: string | null
//           daily_consumption_wh?: number | null
//           has_system?: boolean | null
//           hours_per_day?: number | null
//           id?: string
//         }
//         Update: {
//           area_sqm?: number | null
//           consultation_session_id?: string | null
//           created_at?: string | null
//           daily_consumption_wh?: number | null
//           has_system?: boolean | null
//           hours_per_day?: number | null
//           id?: string
//         }
//         Relationships: [
//           {
//             foreignKeyName: "consultation_irrigation_consultation_session_id_fkey"
//             columns: ["consultation_session_id"]
//             isOneToOne: false
//             referencedRelation: "consultation_sessions"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//       consultation_sessions: {
//         Row: {
//           address: string | null
//           battery_backup_hours: number | null
//           budget: string | null
//           city: string | null
//           contact_preference: string | null
//           created_at: string | null
//           customer_id: string | null
//           email: string | null
//           full_name: string | null
//           id: string
//           installation_timeframe: string | null
//           notes: string | null
//           phone: string | null
//           property_type: string | null
//           receive_updates: boolean | null
//           referral_source: string | null
//           schedule_consultation: boolean | null
//           session_id: string
//           state: string | null
//           status: string | null
//           updated_at: string | null
//           zip_code: string | null
//         }
//         Insert: {
//           address?: string | null
//           battery_backup_hours?: number | null
//           budget?: string | null
//           city?: string | null
//           contact_preference?: string | null
//           created_at?: string | null
//           customer_id?: string | null
//           email?: string | null
//           full_name?: string | null
//           id?: string
//           installation_timeframe?: string | null
//           notes?: string | null
//           phone?: string | null
//           property_type?: string | null
//           receive_updates?: boolean | null
//           referral_source?: string | null
//           schedule_consultation?: boolean | null
//           session_id: string
//           state?: string | null
//           status?: string | null
//           updated_at?: string | null
//           zip_code?: string | null
//         }
//         Update: {
//           address?: string | null
//           battery_backup_hours?: number | null
//           budget?: string | null
//           city?: string | null
//           contact_preference?: string | null
//           created_at?: string | null
//           customer_id?: string | null
//           email?: string | null
//           full_name?: string | null
//           id?: string
//           installation_timeframe?: string | null
//           notes?: string | null
//           phone?: string | null
//           property_type?: string | null
//           receive_updates?: boolean | null
//           referral_source?: string | null
//           schedule_consultation?: boolean | null
//           session_id?: string
//           state?: string | null
//           status?: string | null
//           updated_at?: string | null
//           zip_code?: string | null
//         }
//         Relationships: [
//           {
//             foreignKeyName: "consultation_sessions_customer_id_fkey"
//             columns: ["customer_id"]
//             isOneToOne: false
//             referencedRelation: "customers"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//       consultation_water_pumps: {
//         Row: {
//           consultation_session_id: string | null
//           created_at: string | null
//           daily_consumption_wh: number | null
//           hours_per_day: number
//           id: string
//           pump_type: string
//           total_discharge: number | null
//           total_head: number | null
//           wattage: number
//         }
//         Insert: {
//           consultation_session_id?: string | null
//           created_at?: string | null
//           daily_consumption_wh?: number | null
//           hours_per_day: number
//           id?: string
//           pump_type: string
//           total_discharge?: number | null
//           total_head?: number | null
//           wattage: number
//         }
//         Update: {
//           consultation_session_id?: string | null
//           created_at?: string | null
//           daily_consumption_wh?: number | null
//           hours_per_day?: number
//           id?: string
//           pump_type?: string
//           total_discharge?: number | null
//           total_head?: number | null
//           wattage?: number
//         }
//         Relationships: [
//           {
//             foreignKeyName: "consultation_water_pumps_consultation_session_id_fkey"
//             columns: ["consultation_session_id"]
//             isOneToOne: false
//             referencedRelation: "consultation_sessions"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//       customers: {
//         Row: {
//           address: string | null
//           city: string | null
//           created_at: string | null
//           email: string
//           first_name: string
//           id: string
//           last_name: string
//           phone: string | null
//           state: string | null
//           updated_at: string | null
//           zip_code: string | null
//         }
//         Insert: {
//           address?: string | null
//           city?: string | null
//           created_at?: string | null
//           email: string
//           first_name: string
//           id?: string
//           last_name: string
//           phone?: string | null
//           state?: string | null
//           updated_at?: string | null
//           zip_code?: string | null
//         }
//         Update: {
//           address?: string | null
//           city?: string | null
//           created_at?: string | null
//           email?: string
//           first_name?: string
//           id?: string
//           last_name?: string
//           phone?: string | null
//           state?: string | null
//           updated_at?: string | null
//           zip_code?: string | null
//         }
//         Relationships: []
//       }
//       design_purchases: {
//         Row: {
//           amount_paid: number | null
//           created_at: string | null
//           customer_id: string | null
//           download_token: string | null
//           downloaded_at: string | null
//           id: string
//           payment_method: string | null
//           payment_status: string | null
//           purchase_session_id: string | null
//           solar_system_design_id: string | null
//           transaction_id: string | null
//         }
//         Insert: {
//           amount_paid?: number | null
//           created_at?: string | null
//           customer_id?: string | null
//           download_token?: string | null
//           downloaded_at?: string | null
//           id?: string
//           payment_method?: string | null
//           payment_status?: string | null
//           purchase_session_id?: string | null
//           solar_system_design_id?: string | null
//           transaction_id?: string | null
//         }
//         Update: {
//           amount_paid?: number | null
//           created_at?: string | null
//           customer_id?: string | null
//           download_token?: string | null
//           downloaded_at?: string | null
//           id?: string
//           payment_method?: string | null
//           payment_status?: string | null
//           purchase_session_id?: string | null
//           solar_system_design_id?: string | null
//           transaction_id?: string | null
//         }
//         Relationships: [
//           {
//             foreignKeyName: "design_purchases_customer_id_fkey"
//             columns: ["customer_id"]
//             isOneToOne: false
//             referencedRelation: "customers"
//             referencedColumns: ["id"]
//           },
//           {
//             foreignKeyName: "design_purchases_solar_system_design_id_fkey"
//             columns: ["solar_system_design_id"]
//             isOneToOne: false
//             referencedRelation: "solar_system_designs"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//       orders: {
//         Row: {
//           appliances: Json | null
//           battery_backup_hours: number | null
//           budget_range: string | null
//           consultation_session_id: string | null
//           contact_preference: string | null
//           created_at: string
//           customer_address: string | null
//           customer_city: string | null
//           customer_email: string | null
//           customer_full_name: string
//           customer_phone: string | null
//           customer_state: string | null
//           customer_zip_code: string | null
//           ev_charging: Json | null
//           generated_design: Json | null
//           id: string
//           installation_timeframe: string | null
//           irrigation_system: Json | null
//           notes: string | null
//           order_status: string | null
//           property_type: string | null
//           receive_updates: boolean | null
//           recommended_products: Json | null
//           referral_source: string | null
//           schedule_consultation: boolean | null
//           total_daily_consumption_wh: number | null
//           updated_at: string
//           water_pumps: Json | null
//         }
//         Insert: {
//           appliances?: Json | null
//           battery_backup_hours?: number | null
//           budget_range?: string | null
//           consultation_session_id?: string | null
//           contact_preference?: string | null
//           created_at?: string
//           customer_address?: string | null
//           customer_city?: string | null
//           customer_email?: string | null
//           customer_full_name: string
//           customer_phone?: string | null
//           customer_state?: string | null
//           customer_zip_code?: string | null
//           ev_charging?: Json | null
//           generated_design?: Json | null
//           id?: string
//           installation_timeframe?: string | null
//           irrigation_system?: Json | null
//           notes?: string | null
//           order_status?: string | null
//           property_type?: string | null
//           receive_updates?: boolean | null
//           recommended_products?: Json | null
//           referral_source?: string | null
//           schedule_consultation?: boolean | null
//           total_daily_consumption_wh?: number | null
//           updated_at?: string
//           water_pumps?: Json | null
//         }
//         Update: {
//           appliances?: Json | null
//           battery_backup_hours?: number | null
//           budget_range?: string | null
//           consultation_session_id?: string | null
//           contact_preference?: string | null
//           created_at?: string
//           customer_address?: string | null
//           customer_city?: string | null
//           customer_email?: string | null
//           customer_full_name?: string
//           customer_phone?: string | null
//           customer_state?: string | null
//           customer_zip_code?: string | null
//           ev_charging?: Json | null
//           generated_design?: Json | null
//           id?: string
//           installation_timeframe?: string | null
//           irrigation_system?: Json | null
//           notes?: string | null
//           order_status?: string | null
//           property_type?: string | null
//           receive_updates?: boolean | null
//           recommended_products?: Json | null
//           referral_source?: string | null
//           schedule_consultation?: boolean | null
//           total_daily_consumption_wh?: number | null
//           updated_at?: string
//           water_pumps?: Json | null
//         }
//         Relationships: [
//           {
//             foreignKeyName: "orders_consultation_session_id_fkey"
//             columns: ["consultation_session_id"]
//             isOneToOne: false
//             referencedRelation: "consultation_sessions"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//       product_storage: {
//         Row: {
//           available: boolean | null
//           category: string
//           created_at: string | null
//           description: string | null
//           featured: boolean | null
//           id: string
//           image_url: string | null
//           name: string
//           sample_price: string | null
//           show_in_design_tool: boolean | null
//           show_in_storefront: boolean | null
//           specs: Json | null
//           type: string | null
//           updated_at: string | null
//         }
//         Insert: {
//           available?: boolean | null
//           category: string
//           created_at?: string | null
//           description?: string | null
//           featured?: boolean | null
//           id?: string
//           image_url?: string | null
//           name: string
//           sample_price?: string | null
//           show_in_design_tool?: boolean | null
//           show_in_storefront?: boolean | null
//           specs?: Json | null
//           type?: string | null
//           updated_at?: string | null
//         }
//         Update: {
//           available?: boolean | null
//           category?: string
//           created_at?: string | null
//           description?: string | null
//           featured?: boolean | null
//           id?: string
//           image_url?: string | null
//           name?: string
//           sample_price?: string | null
//           show_in_design_tool?: boolean | null
//           show_in_storefront?: boolean | null
//           specs?: Json | null
//           type?: string | null
//           updated_at?: string | null
//         }
//         Relationships: []
//       }
//       pump_types: {
//         Row: {
//           avg_wattage: number
//           created_at: string | null
//           description: string | null
//           id: string
//           name: string
//         }
//         Insert: {
//           avg_wattage: number
//           created_at?: string | null
//           description?: string | null
//           id?: string
//           name: string
//         }
//         Update: {
//           avg_wattage?: number
//           created_at?: string | null
//           description?: string | null
//           id?: string
//           name?: string
//         }
//         Relationships: []
//       }
//       solar_system_designs: {
//         Row: {
//           consultation_session_id: string | null
//           created_at: string | null
//           design_details: Json | null
//           design_name: string
//           design_status: string | null
//           estimated_budget_max: number | null
//           estimated_budget_min: number | null
//           id: string
//           price: number | null
//           recommended_battery_capacity_wh: number
//           recommended_inverter_size_watts: number
//           recommended_solar_panel_watts: number
//           system_specifications: Json | null
//           total_daily_consumption_wh: number
//           updated_at: string | null
//         }
//         Insert: {
//           consultation_session_id?: string | null
//           created_at?: string | null
//           design_details?: Json | null
//           design_name: string
//           design_status?: string | null
//           estimated_budget_max?: number | null
//           estimated_budget_min?: number | null
//           id?: string
//           price?: number | null
//           recommended_battery_capacity_wh: number
//           recommended_inverter_size_watts: number
//           recommended_solar_panel_watts: number
//           system_specifications?: Json | null
//           total_daily_consumption_wh: number
//           updated_at?: string | null
//         }
//         Update: {
//           consultation_session_id?: string | null
//           created_at?: string | null
//           design_details?: Json | null
//           design_name?: string
//           design_status?: string | null
//           estimated_budget_max?: number | null
//           estimated_budget_min?: number | null
//           id?: string
//           price?: number | null
//           recommended_battery_capacity_wh?: number
//           recommended_inverter_size_watts?: number
//           recommended_solar_panel_watts?: number
//           system_specifications?: Json | null
//           total_daily_consumption_wh?: number
//           updated_at?: string | null
//         }
//         Relationships: [
//           {
//             foreignKeyName: "solar_system_designs_consultation_session_id_fkey"
//             columns: ["consultation_session_id"]
//             isOneToOne: false
//             referencedRelation: "consultation_sessions"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//     }
//     Views: {
//       [_ in never]: never
//     }
//     Functions: {
//       [_ in never]: never
//     }
//     Enums: {
//       [_ in never]: never
//     }
//     CompositeTypes: {
//       [_ in never]: never
//     }
//   }
// }

// type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

// type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

// export type Tables<
//   DefaultSchemaTableNameOrOptions extends
//     | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
//     | { schema: keyof DatabaseWithoutInternals },
//   TableName extends DefaultSchemaTableNameOrOptions extends {
//     schema: keyof DatabaseWithoutInternals
//   }
//     ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
//         DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
//     : never = never,
// > = DefaultSchemaTableNameOrOptions extends {
//   schema: keyof DatabaseWithoutInternals
// }
//   ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
//       DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
//       Row: infer R
//     }
//     ? R
//     : never
//   : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
//         DefaultSchema["Views"])
//     ? (DefaultSchema["Tables"] &
//         DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
//         Row: infer R
//       }
//       ? R
//       : never
//     : never

// export type TablesInsert<
//   DefaultSchemaTableNameOrOptions extends
//     | keyof DefaultSchema["Tables"]
//     | { schema: keyof DatabaseWithoutInternals },
//   TableName extends DefaultSchemaTableNameOrOptions extends {
//     schema: keyof DatabaseWithoutInternals
//   }
//     ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
//     : never = never,
// > = DefaultSchemaTableNameOrOptions extends {
//   schema: keyof DatabaseWithoutInternals
// }
//   ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
//       Insert: infer I
//     }
//     ? I
//     : never
//   : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
//     ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
//         Insert: infer I
//       }
//       ? I
//       : never
//     : never

// export type TablesUpdate<
//   DefaultSchemaTableNameOrOptions extends
//     | keyof DefaultSchema["Tables"]
//     | { schema: keyof DatabaseWithoutInternals },
//   TableName extends DefaultSchemaTableNameOrOptions extends {
//     schema: keyof DatabaseWithoutInternals
//   }
//     ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
//     : never = never,
// > = DefaultSchemaTableNameOrOptions extends {
//   schema: keyof DatabaseWithoutInternals
// }
//   ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
//       Update: infer U
//     }
//     ? U
//     : never
//   : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
//     ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
//         Update: infer U
//       }
//       ? U
//       : never
//     : never

// export type Enums<
//   DefaultSchemaEnumNameOrOptions extends
//     | keyof DefaultSchema["Enums"]
//     | { schema: keyof DatabaseWithoutInternals },
//   EnumName extends DefaultSchemaEnumNameOrOptions extends {
//     schema: keyof DatabaseWithoutInternals
//   }
//     ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
//     : never = never,
// > = DefaultSchemaEnumNameOrOptions extends {
//   schema: keyof DatabaseWithoutInternals
// }
//   ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
//   : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
//     ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
//     : never

// export type CompositeTypes<
//   PublicCompositeTypeNameOrOptions extends
//     | keyof DefaultSchema["CompositeTypes"]
//     | { schema: keyof DatabaseWithoutInternals },
//   CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
//     schema: keyof DatabaseWithoutInternals
//   }
//     ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
//     : never = never,
// > = PublicCompositeTypeNameOrOptions extends {
//   schema: keyof DatabaseWithoutInternals
// }
//   ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
//   : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
//     ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
//     : never

// export const Constants = {
//   public: {
//     Enums: {},
//   },
// } as const
