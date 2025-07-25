// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rpiguzkeyaktfxgewlzv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwaWd1emtleWFrdGZ4Z2V3bHp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1OTEwODYsImV4cCI6MjA2MzE2NzA4Nn0.jjdM6VlN7ERKahkCXiwbX-bgpDwpg3ToKYHBTLzB7iU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});