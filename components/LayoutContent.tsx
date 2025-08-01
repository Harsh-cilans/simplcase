"use client";

import { useAppContext } from "@/context/AppContext";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { sidebarOpen, setSidebarOpen } = useAppContext(); //  Now safe

  return (
    <div className="flex min-h-screen">
      {/* LCMS Logo for Mobile (Toggle Sidebar) */}
      <button
        className="fixed sm:hidden top-4 left-4 z-50 px-4 py-1 rounded-full shadow-lg text-[#1A2A42] text-2xl font-bold"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        LCMS
      </button>
      {/* Sidebar */}
      <div
        className={`fixed sm:relative z-40 top-20 sm:top-0 transition-transform duration-300 ease-in-out
          sm:w-[356px] w-[260px] bg-white shadow-md
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
      >
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:-z-10"
          style={{
            backgroundImage: "url('/bg.svg')",
            height: "135%",
            width: "100%",
          }}
        />
        <div className="absolute inset-0 bg-[#F9FAFB] opacity-60 -z-10" />
          <Header />
          <Navbar />
        {/* Scrollable content */}
        <main className="flex-1 px-2 sm:px-5 pt-12 pb-6">{children}</main>
      </div>
    </div>
  );
}
