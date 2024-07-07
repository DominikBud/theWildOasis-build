import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ujcolscyqenbayrghcek.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqY29sc2N5cWVuYmF5cmdoY2VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1NjU1OTYsImV4cCI6MjAyMzE0MTU5Nn0.ZbRUxIT9LWZoZJlfRs22Le02IIlA7JyXc6RWthKHcSY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
