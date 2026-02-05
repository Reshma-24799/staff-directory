import { createEmployee } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from 'next/link';

export default function NewEmployeePage() {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-6">
                <Link href="/admin" className="text-sm text-gray-500 hover:underline">
                    ← Back to Dashboard
                </Link>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Add New Employee</CardTitle>
                    <CardDescription>Enter the details of the new staff member.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={createEmployee} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <Input name="first_name" placeholder="Jane" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <Input name="last_name" placeholder="Doe" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input name="email" type="email" placeholder="jane@example.com" required />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Role</label>
                                <Input name="role" placeholder="Software Engineer" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Department</label>
                                <Input name="department" placeholder="Engineering" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Skills (comma separated)</label>
                            <Input name="skills" placeholder="React, Node.js, SQL" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Bio</label>
                            <Input name="bio" placeholder="Short biography..." />
                        </div>

                        <div className="pt-4 flex justify-end gap-2">
                            <Link href="/admin">
                                <Button variant="outline">Cancel</Button>
                            </Link>
                            <Button type="submit">Create Employee</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
