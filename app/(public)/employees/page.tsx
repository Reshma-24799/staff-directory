import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Employee, employees } from "@/lib/db";

async function getEmployees(): Promise<Employee[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return employees;
}
//mock data 
const EMPLOYEES = await getEmployees();

export default function EmployeesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Our Team</h1>
              {/* implement search later */}
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>First Name</TableHead>
                            <TableHead>Last Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {EMPLOYEES.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell className="font-medium">{employee.firstName}</TableCell>
                                <TableCell className="font-medium">{employee.lastName}</TableCell>
                                <TableCell>{employee.role}</TableCell>
                                <TableCell>{employee.department}</TableCell>
                                <TableCell className="text-right">
                                    <Link
                                        href={`/employees/${employee.id}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        View Profile
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}