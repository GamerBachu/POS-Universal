import React from 'react';

export default function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <main className="w-full max-w-lg p-6 bg-white dark:bg-gray-800 rounded shadow">
        {children}
      </main>
    </div>
  );
}
