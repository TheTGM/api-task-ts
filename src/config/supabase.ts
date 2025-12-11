import { createClient } from "@supabase/supabase-js"
import config from '../config/config.ts';

const supabaseUrl = config.url;
const supabaseKey = config.key;
if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase credentials are required');
}
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;