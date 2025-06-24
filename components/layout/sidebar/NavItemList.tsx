"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { LuChevronRight } from "react-icons/lu";
import { PiCalendar, PiCheckSquare, PiFolder, PiHouse } from "react-icons/pi";
import Link from "next/link";
import { Tooltip } from "@/components/ui/tooltip";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

const NavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: PiHouse,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: PiFolder,
  },
  {
    label: "Tasks",
    href: "/tasks",
    icon: PiCheckSquare,
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: PiCalendar,
  },
];
export const NavItemList = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="flex flex-col gap-1">
      {NavItems.map((item) => (
        <Tooltip key={item.label} content={item.label} isOpen={isOpen}>
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center justify-between hover:bg-primary rounded-md p-2 hover:text-text-dark border-2 border-transparent hover:border-bg-dark",
              isActive(item.href) && "bg-primary text-text-dark border-bg-dark"
            )}
          >
            <div className="flex items-center gap-3 text-sm font-medium ">
              <item.icon className="w-5 h-5" />
              <p className={`${isOpen ? "opacity-100 " : "opacity-0 transition-all duration-500"} `}>{item.label}</p>
            </div>
            <LuChevronRight className={`transition-all duration-300 ${isOpen ? "size-5" : "size-0"}`} />
          </Link>
        </Tooltip>
      ))}
    </nav>
  );
};
