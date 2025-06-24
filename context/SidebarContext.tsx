"use client";
import { createContext, useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>{children}</SidebarContext.Provider>;
}
