import { employees } from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";


interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function EmployeeDetailPage({ params }: PageProps) {
    const { id } = await params;
    const employee = employees.find((e) => e.id === id);

    if (!employee) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-3xl px-4">
            <div className="py-6">
                <Link href="/employees" className="text-sm font-medium flex items-center py-4">
                    &larr; Back to Directory
                </Link>
            </div>

            <Card className="overflow-hidden ">
                <CardHeader className=" text-center border-b pb-8 pt-8 items-center">
                    <CardTitle className="text-3xl font-bold">
                        {employee.firstName} {employee.lastName}
                    </CardTitle>
                    <CardDescription className="flex flex-col items-center gap-1 mt-2">
                        <span className="text-lg font-medium ">{employee.role}</span>
                        <span className="text-lg ">{employee.department}</span>
                    </CardDescription>
                </CardHeader>

                <CardContent className="p-8 space-y-8">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-semibold mb-1">Email : {employee.email}</h3>
                            <h3 className="text-lg font-semibold  uppercase tracking-wider mb-1">Joined :  {new Date(employee.joinedAt).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })} 
                            </h3>
                            <h3 className="text-lg font-semibold mb-3">Bio :  {employee.bio}</h3>
                            <h3 className="text-lg font-semibold mb-3">Skills : {employee.skills.join(', ')}</h3>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
