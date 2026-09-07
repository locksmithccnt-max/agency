import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Lazy singletons — createClient is deferred until first use so the build
// phase never calls it with undefined env vars.
let _client: SupabaseClient | null = null;
let _adminClient: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (!_client) {
    _client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  return _client;
}

function getAdminClient(): SupabaseClient {
  if (!_adminClient) {
    _adminClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
  }
  return _adminClient;
}

export const supabase = new Proxy({} as SupabaseClient, {
  get(_t, p) { return (getClient() as Record<string, unknown>)[p as string]; },
});

export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(_t, p) { return (getAdminClient() as Record<string, unknown>)[p as string]; },
});

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
