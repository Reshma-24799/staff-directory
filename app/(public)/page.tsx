import Link from 'next/link';
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight ">
        Welcome to the Directory
      </h1>
      <p className="mt-4 max-w-lg text-lg ">
        Find contact information, skills, and profiles for everyone in the organization.
      </p>
      <div className="mt-8 flex gap-4">
        <Link 
          href="/employees" 
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium  transition-colors hover:bg-blue-700"
        >
          View Employees
        </Link>
      </div>
    </div>
  );
}