import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Project Manigga</h1>
      <a href="/login" className="text-blue-500 hover:underline">
        Go to Login
      </a>
    </main>
  );
}
