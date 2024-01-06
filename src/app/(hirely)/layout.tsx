import "@/styles/globals.css";
import {
  Courgette,
  Inter,
  Montserrat,
  PT_Sans,
  Raleway,
} from "next/font/google";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "@/trpc/react";
import { NavHeader } from "../_components/NavHeader";
import { Footer } from "../_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-montserrat",
  // display:
});

export const pt_sans = PT_Sans({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "700"],
  variable: "--font-pt_sans",
});

export const courgette = Courgette({
  variable: "--font-courgette",
  subsets: ["latin"],
  weight: "400",
});

export const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hirely",
  description: "A Platform for Job Seekers",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`font-sans ${raleway.variable} flex h-full flex-col`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <NavHeader>
            <Footer>{children}</Footer>
          </NavHeader>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
