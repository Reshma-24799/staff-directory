import Link from 'next/link';
import { getEmployees } from "@/lib/api";
import { deleteEmployee } from "./actions";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import AdminAlert from "@/components/AdminAlert";
import Search from '@/components/Search';

export default async function AdminDashboard(props: {
    searchParams?: Promise<{
        search?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const search = searchParams?.search || '';
    const employees = await getEmployees(search);

    return (
        <div>
            <AdminAlert />

            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <div className="w-1/3">
                    <Search placeholder="Search employees..." />
                </div>
                <Link href="/admin/new" className='p-4'>
                    <Button >
                        + Add Employee
                    </Button>
                </Link>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>First Name</TableHead>
                            <TableHead>Last Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {employees.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    No employees found. Start adding some!
                                </TableCell>
                            </TableRow>
                        ) : (
                            employees.map((employee) => (
                                <TableRow key={employee.id}>
                                    <TableCell>{employee.first_name}</TableCell>
                                    <TableCell>{employee.last_name}</TableCell>
                                    <TableCell>{employee.role}</TableCell>
                                    <TableCell>{employee.department}</TableCell>
                                    <TableCell >
                                        <div className="flex gap-2">
                                            <Link href={`/admin/edit/${employee.id}`}>
                                                <Button size="sm" variant={"ghost"} className="bg-blue-600 hover:bg-blue-700 text-white">Edit</Button>
                                            </Link>
                                            <form action={deleteEmployee.bind(null, employee.id)}>
                                                <Button size="sm" variant={"ghost"} className="bg-blue-600 hover:bg-blue-700 text-white">Delete</Button>
                                            </form>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
