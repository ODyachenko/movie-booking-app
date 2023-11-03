import { createClient } from '@supabase/supabase-js';

const supabaseUrl: any = process.env.PROJECT_URL;
const supabaseKey: any = process.env.API_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
