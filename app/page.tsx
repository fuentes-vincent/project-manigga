import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Project Manigga</h1>
      <div className="flex space-x-4">
        <Link href="/login" className="bg-blue-500 text-white p-2 rounded-lg">
          Go to Login
        </Link>
        <Link href="/dashboard" className="bg-green-500 text-white p-2 rounded-lg">
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
