import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Project Manigga</h1>
      <button className="bg-blue-500 text-white p-2 rounded-lg">
        <a href="/login" className="text-white-500">
          Go to Login
        </a>
      </button>
    </main>
  );
}
