import Link from "next/link";
import { signout } from "@/app/login/actions";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex  min-h-screen ">
            <aside className="w-64 bg-gray-900 text-white">
                <div className="flex space-x-8 p-6">
                    <h2 className="text-lg font-bold">
                        Admin Panel
                    </h2>
                    <ThemeToggle />
                </div>
                <nav className="flex flex-col mt-6 space-y-2 px-4">
                    <Link href="/admin" className="rounded px-4 py-4 hover:bg-gray-800">
                        Dashboard
                    </Link>
                    <Link href="/admin/new" className="rounded px-4 py-4 hover:bg-gray-800">
                        Add new employee
                    </Link>
                    <Link href="/" className=" rounded px-4 py-4  hover:bg-gray-800 ">
                        Back to Public Site
                    </Link>
                    <form action={signout}>
                        <button className="mt-2 w-full text-left rounded px-4 py-2 hover:bg-gray-800 ">
                            Logout
                        </button>
                    </form>
                </nav>
            </aside>

            <main className="flex-1 p-8">
                <div className="rounded-lg  p-6 shadow-sm ">
                    {children}
                </div>
            </main>
        </div>
    )
}