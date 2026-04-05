import 'server-only'

import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let supabaseClient: SupabaseClient<any> | null = null

export function getServiceSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase environment variables')
  }

  if (!supabaseClient) {
    supabaseClient = createClient<any>(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
      db: {
        schema: 'public',
      },
    })
  }

  return supabaseClient
}
