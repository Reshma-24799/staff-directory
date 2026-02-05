import { createClient } from '@/utils/supabase/server';
import { Employee } from './types';

export async function getEmployees(): Promise<Employee[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('employees')
        .select('*')
        .order('joined_at', { ascending: false });

    if (error) {
        console.error('Error fetching employees:', error);
        return [];
    }

    return data as Employee[];
}
