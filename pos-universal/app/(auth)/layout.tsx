import React from 'react';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <nav className="mb-6 flex gap-6">
        <Link href="/login" className="text-blue-600 hover:underline dark:text-blue-400">Login</Link>
        <Link href="/register" className="text-blue-600 hover:underline dark:text-blue-400">Register</Link>
        <Link href="/dashboard" className="text-blue-600 hover:underline dark:text-blue-400">Dashboard</Link>
        <Link href="/profile" className="text-blue-600 hover:underline dark:text-blue-400">Profile</Link>
        <Link href="/error" className="text-blue-600 hover:underline dark:text-blue-400">Error</Link>
      </nav>
      <main className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded shadow-md">
        {children}
      </main>
    </div>
  );
}
