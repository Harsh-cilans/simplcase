"use client";

import { AppContextProvider } from "@/context/AppContext"; // Only use provider here
import "./globals.css";
import { Rubik } from "next/font/google";
import LayoutContent from "@/components/LayoutContent";

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubikSans.variable} antialiased bg-[#F9FAFB]`}>
        <AppContextProvider>
          <LayoutContent>{children}</LayoutContent>
        </AppContextProvider>
      </body>
    </html>
  );
}
