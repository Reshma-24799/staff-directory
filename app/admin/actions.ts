'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function createEmployee(formData: FormData) {
    const supabase = await createClient()

    const rawFormData = {
        first_name: formData.get('first_name') as string,
        last_name: formData.get('last_name') as string,
        email: formData.get('email') as string,
        role: formData.get('role') as string,
        department: formData.get('department') as string,
        skills: (formData.get('skills') as string)?.split(',').map(s => s.trim()) || [],
        bio: formData.get('bio') as string,
    }

    const { error } = await supabase
        .from('employees')
        .insert(rawFormData)

    if (error) {
        console.error('Error creating employee:', error)
        throw new Error('Failed to create employee')
    }

    revalidatePath('/admin')
    revalidatePath('/employees')
    redirect('/admin?success=added')
}

export async function deleteEmployee(id: string) {
    const supabase = await createClient()

    const { error } = await supabase
        .from('employees')
        .delete()
        .eq('id', id)

    if (error) {
        console.error('Error deleting employee:', error)
        throw new Error('Failed to delete employee')
    }

    revalidatePath('/admin')
    revalidatePath('/employees')
    redirect('/admin?success=deleted')
}

export async function updateEmployee(id: string, formData: FormData) {
    const supabase = await createClient()

    const rawFormData = {
        first_name: formData.get('first_name') as string,
        last_name: formData.get('last_name') as string,
        email: formData.get('email') as string,
        role: formData.get('role') as string,
        department: formData.get('department') as string,
        skills: (formData.get('skills') as string)?.split(',').map(s => s.trim()) || [],
        bio: formData.get('bio') as string,
    }

    const { error } = await supabase
        .from('employees')
        .update(rawFormData)
        .eq('id', id)

    if (error) {
        console.error('Error updating employee:', error)
        throw new Error('Failed to update employee')
    }

    revalidatePath('/admin')
    revalidatePath('/employees')
    redirect('/admin?success=updated')
}
