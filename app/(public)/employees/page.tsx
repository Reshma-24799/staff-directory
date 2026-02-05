import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getEmployees } from "@/lib/api";

import Search from "@/components/Search";

export default async function EmployeesPage(props: {
    searchParams?: Promise<{
        search?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const search = searchParams?.search || '';
    const employees = await getEmployees(search);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Our Team</h1>
                <div className="w-1/3">
                    <Search placeholder="Search employees..." />
                </div>
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
                                <TableCell colSpan={5} className="text-center h-24">
                                    No employees found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            employees.map((employee) => (
                                <TableRow key={employee.id}>
                                    <TableCell>{employee.first_name}</TableCell>
                                    <TableCell>{employee.last_name}</TableCell>
                                    <TableCell>{employee.role}</TableCell>
                                    <TableCell>{employee.department}</TableCell>
                                    <TableCell>
                                        <Link
                                            href={`/employees/${employee.id}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            View Profile
                                        </Link>
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