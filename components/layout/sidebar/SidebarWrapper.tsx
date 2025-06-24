"use client";
import { SidebarToggle } from "@/components/layout/sidebar/SidebarToggle";
import { NavItemList } from "./NavItemList";
import { useSidebar } from "@/hooks/useSidebar";

export const SidebarWrapper = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <aside
      className={`relative min-h-screen flex flex-col border-r-5 border-bg-dark justify-between bg-secondary-background shadow-sm transition-all duration-400 ease-in-out  ${
        isOpen ? "w-72" : "w-16"
      }`}
    >
      <div className="relative pt-8">
        <div className="mb-8 px-1">
          <div
            className={`flex items-center hover:bg-primary hover:text-text-dark border-2  hover:border-bg-dark rounded-md overflow-hidden transition-all duration-300 py-3  ${
              isOpen
                ? "justify-between border-transparent px-2"
                : "justify-end bg-primary text-text-dark border-bg-dark border-2 rounded-lg px-3"
            }`}
          >
            <div
              className={`text-sm font-bold flex items-center gap-2 transition-all duration-300 ${
                isOpen ? "opacity-100" : "hidden"
              }`}
            >
              <img src="/elements/element-user.png" className={`size-6 rounded-full bg-primary `} />
              <p>Ahmad...</p>
            </div>
            <SidebarToggle toggleSidebar={toggleSidebar} customIconStyle={isOpen ? "size-6" : "size-6"} />
          </div>
        </div>
        <div className="flex flex-col gap-6 px-2">
          <div className="space-y-4">
            <p
              className={`text-xs font-medium text-foreground/60 uppercase tracking-wider px-8 transition-all duration-500 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              Navigation
            </p>
            <NavItemList isOpen={isOpen} />
          </div>
        </div>
      </div>
    </aside>
  );
};
