import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            <nav className="border-b p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link className="text-xl font-bold text-blue-600" href="/">Staff Directory</Link>
                    <div className="flex items-center space-x-4">
                        <Link href="/employees" className="hover:underline">
                            Browse
                        </Link>
                        <ThemeToggle />
                        <Link href="/admin" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                            Admin Login
                        </Link>
                    </div>
                </div>
            </nav>
            <main className="container mx-auto p-8">
                {children}
            </main>
        </div>
    )
}