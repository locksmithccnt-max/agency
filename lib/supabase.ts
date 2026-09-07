import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Public client — used for booking form submissions
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client — used server-side only, bypasses RLS
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string | null;
  status: "new" | "confirmed" | "completed" | "cancelled";
  created_at: string;
};
