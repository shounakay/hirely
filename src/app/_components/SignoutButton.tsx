"use client";

import { signOut } from "next-auth/react";
import React from "react";

export const SignoutButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      onClick={() => signOut()}
      className="rounded-md bg-rose-500 px-2 py-1 text-base text-neutral-200"
    >
      {children}
    </button>
  );
};
