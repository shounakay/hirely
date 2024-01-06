import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import React from "react";
import { montserrat } from "../(hirely)/layout";
import { signOut } from "next-auth/react";
import { SignoutButton } from "./SignoutButton";

export const NavHeader = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await getServerAuthSession();
  console.log("home page", session);
  return (
    <main className="min-h-full">
      <header className="bg-downy-500">
        <nav className="min-h-max w-full p-4">
          <div className="xss:hidden items-center justify-between md:flex">
            <ul className="text-xl font-medium ">
              <li>
                <Link href="/" className={`${montserrat.variable} text-2xl`}>
                  hirely
                </Link>
              </li>
            </ul>
            <ul className="flex items-center gap-6 text-xl">
              <li>
                <Link href="/jobs" className="font-medium text-neutral-800">
                  All Jobs
                </Link>
              </li>
              {session?.user.email ? (
                <>
                  <li>
                    <Link
                      href="/profile/:id"
                      className="font-medium text-neutral-800"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/api/auth/signout">
                      <SignoutButton>Sign out</SignoutButton>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/auth/signin">
                      <button className=" rounded-md bg-neutral-900 px-2 py-1 text-neutral-50 hover:bg-neutral-300 hover:text-neutral-700">
                        Sign in
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/auth/signup">
                      <button className="rounded-md bg-neutral-900 px-2 py-1 text-neutral-50 hover:bg-neutral-300 hover:text-neutral-700">
                        Join Now
                      </button>
                    </Link>
                  </li>{" "}
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
      {children}
    </main>
  );
};
