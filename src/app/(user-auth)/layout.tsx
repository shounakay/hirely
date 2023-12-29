import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";

import React from "react";
import { cookies } from "next/headers";

export const metadata = {
  title: "Hirely",
  description: "App for job seekers",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-monte-carlo-700">
        <TRPCReactProvider cookies={cookies().toString()}>{children}</TRPCReactProvider>
      </body>
    </html>
  );
};

export default AuthLayout;
