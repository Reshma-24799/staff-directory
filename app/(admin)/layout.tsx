import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex  min-h-screen bg-gray-100">
            <aside className="w-64 bg-gray-900 text-white">
                <div className="p-6">
                    <h2 className="text-lg font-bold">
                        Admin Panel
                    </h2>
                </div>
                <nav className="flex flex-col mt-6 space-y-2 px-4">
                    <Link href="/admin" className="rounded px-4 py-2 hover:bg-gray-800">
                        Dashboard
                    </Link>
                    <Link href="/admin/new" className="rounded px-4 py-2 hover:bg-gray-800">
                        Add new employee
                    </Link>
                    <Link href="/" className="mt-8 rounded px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white">
                        Back to Public Site
                    </Link>
                </nav>
            </aside>

            <main className="flex-1 p-8">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                    {children}
                </div>
            </main>
        </div>
    )
}