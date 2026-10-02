import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://jnzwiixtjugauxdbtqfe.supabase.co";

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpuendpaXh0anVnYXV4ZGJ0cWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzMjI4MDYsImV4cCI6MjA5MDg5ODgwNn0.G3_x6v90AmjH1Ww5l1hELJy2Dk2aAoC3XpPRrRKCpEY";

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or anon key is missing");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
