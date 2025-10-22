import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ondewguchkubmojsylfe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uZGV3Z3VjaGt1Ym1vanN5bGZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2NDU3NjQsImV4cCI6MjA3NTIyMTc2NH0.MSPT0AwOpi3KUi90IaKyAHtRtYnp98qMWhMhVEHYXNs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
