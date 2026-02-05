import { createClient } from '@/utils/supabase/server';
import { Employee } from './types';

export async function getEmployees(search?: string): Promise<Employee[]> {
    const supabase = await createClient();
    let query = supabase
        .from('employees')
        .select('*')
        .order('joined_at', { ascending: false });

    if (search) {
        query = query.or(`first_name.ilike.%${search}%,last_name.ilike.%${search}%,role.ilike.%${search}%,department.ilike.%${search}%`);
    }
    const { data, error } = await query;
    if (error) {
        console.error('Error fetching employees:', error);
        return [];
    }

    return data as Employee[];
}
