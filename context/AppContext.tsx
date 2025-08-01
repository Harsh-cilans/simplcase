"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Define the context shape
interface AppContextType {
  router: ReturnType<typeof useRouter>;
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  dropDown: boolean;
  setDropDown: (value: boolean) => void;
  doc: string;
  setDoc: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
  totalPages: number;
  showAddTask: boolean; // Optional property for Add Task button visibility
  setShowAddTask: (value: boolean) => void; // Optional setter for Add Task button visibility
}

// 2. Create the context with a default value of null (we'll assert non-null later)
const AppContext = createContext<AppContextType | null>(null);

// 3. Custom hook to use context safely
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }
  return context;
};

// 4. Define the provider and props
interface AppProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppProviderProps) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [doc, setDoc] = useState("1");
  const [page, setPage] = useState(1);
  const totalPages: number = 10;
  // Optional properties for Add Task button visibility
  const [showAddTask, setShowAddTask] = useState(false); // Default to true

  const value: AppContextType = {
    router,
    sidebarOpen,
    setSidebarOpen,
    dropDown,
    setDropDown,
    doc,
    setDoc,
    page,
    setPage,
    totalPages,
    showAddTask,
    setShowAddTask,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
