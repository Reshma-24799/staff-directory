import Link from 'next/link';

export default function ErrorPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold text-red-600">Something went wrong</h1>
            <p className="mt-4 text-gray-600">Sorry, there was an authentication error.</p>
            <Link href="/login" className="mt-8 rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
                Try Logging In Again
            </Link>
        </div>
    )
}
