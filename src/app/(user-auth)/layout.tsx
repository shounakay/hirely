import "@/styles/globals.css";

import React from "react";

export const metadata = {
  title: "Hirely",
  description: "App for job seekers",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="h-full">
      <body className="bg-monte-carlo-700 h-full">{children}</body>
    </html>
  );
};

export default AuthLayout;
