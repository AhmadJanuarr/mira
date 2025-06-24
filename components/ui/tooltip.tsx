import { cn } from "@/lib/utils";

export const Tooltip = ({
  children,
  content,
  isOpen = true,
}: {
  children: React.ReactNode;
  content: string;
  isOpen?: boolean;
}) => {
  // Only show tooltip when sidebar is closed
  if (isOpen) {
    return <>{children}</>;
  }

  return (
    <div className="group relative">
      <div
        className={cn(
          "absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50",
          "opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out",
          "bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow-lg",
          "whitespace-nowrap pointer-events-none",
          "before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1",
          "before:w-0 before:h-0 before:border-t-2 before:border-b-2 before:border-r-2",
          "before:border-t-transparent before:border-b-transparent before:border-r-gray-900"
        )}
      >
        {content}
      </div>
      {children}
    </div>
  );
};
