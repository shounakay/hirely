import Link from "next/link";
import React from "react";

export const NavHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-full">
      <header>
        <nav className="bg-niagara-400 text-niagara-900 min-h-max w-full p-4">
          <ul className="flex flex-row justify-between text-xl font-medium">
            <Link href="/">HIRELY</Link>
            <ul className="flex justify-between gap-8">
              <Link href="/jobs">ALL JOBS</Link>
              <Link href="/signin">LOGIN / SIGNUP</Link>
            </ul>
          </ul>
        </nav>
      </header>
      {children}
    </main>
  );
};
