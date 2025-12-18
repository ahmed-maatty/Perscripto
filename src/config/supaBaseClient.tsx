import { createClient } from "@supabase/supabase-js";

const supaBaseUrl = import.meta.env.VITE_SUPA_BASE_URL;
const supaBaseKey = import.meta.env.VITE_SUPA_BASE_KEY;

const supaBase = createClient(supaBaseUrl , supaBaseKey);

export default supaBase;