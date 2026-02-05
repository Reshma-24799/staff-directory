import { updateEmployee } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from 'next/link';
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function EditEmployeePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const supabase = await createClient();
    const { data: employee } = await supabase
        .from('employees')
        .select('*')
        .eq('id', id)
        .single();

    if (!employee) {
        redirect('/admin');
    }

    const updateEmployeeWithId = updateEmployee.bind(null, employee.id);

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-6">
                <Link href="/admin" className="text-sm text-gray-500 hover:underline">
                    ← Back to Dashboard
                </Link>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Edit Employee</CardTitle>
                    <CardDescription>Update details for {employee.first_name} {employee.last_name}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={updateEmployeeWithId} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <Input name="first_name" defaultValue={employee.first_name} required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <Input name="last_name" defaultValue={employee.last_name} required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input name="email" type="email" defaultValue={employee.email} required />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Role</label>
                                <Input name="role" defaultValue={employee.role} required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Department</label>
                                <Input name="department" defaultValue={employee.department} required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Skills (comma separated)</label>
                            <Input name="skills" defaultValue={employee.skills?.join(', ')} />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Bio</label>
                            <Input name="bio" defaultValue={employee.bio} />
                        </div>

                        <div className="mt-4 flex justify-end gap-2">
                            <Link href="/admin">
                                <Button variant="outline">Cancel</Button>
                            </Link>
                            <Button type="submit">Update Employee</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
