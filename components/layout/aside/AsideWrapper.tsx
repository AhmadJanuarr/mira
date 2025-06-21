import { HorizontalRule } from "@/components/crossline/CrossLine";
import { Button } from "@/components/ui/button";
import { PiCheckSquare, PiGear, PiMoon, PiUser } from "react-icons/pi";

export const AsideWrapper = () => {
  return (
    <aside className="relative w-72 min-h-screen flex flex-col justify-between bg-[#f9fafb] border-r-4 border-black shadow-[12px_0_0_#18181b] p-0 overflow-hidden">
      <div className="px-8 pt-10 pb-2 z-10 relative">
        <div className="flex items-center gap-3  border-2 border-black px-4 py-2 rounded-lg shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
          <span className="size-5 border-2 border-black bg-[#a78bfa] rounded-full" />
          <h1 className="text-2xl font-bold">MiraTasks</h1>
        </div>
        <HorizontalRule />
        <nav className="flex flex-col gap-3">
          <Button className="bg-[#a78bfa] text-white">
            <PiCheckSquare className="text-2xl" />
            Dashboard
          </Button>
          <Button>
            <PiCheckSquare className="text-2xl" />
            Tasks
          </Button>
        </nav>
      </div>
      <div className="px-8 pb-10 flex flex-col z-10 relative">
        <div className="flex flex-col gap-2 mb-2">
          <Button>
            <PiGear className="text-xl" />
            Settings
          </Button>
          <Button variant="default" className="bg-[#f472b6] text-white">
            <PiUser className="text-xl" />
            Profile
          </Button>
        </div>
        <HorizontalRule />
        <Button className="bg-zinc-700 text-white">
          <PiMoon className="text-xl text-white" />
          Dark mode
        </Button>
        <div className="text-xs text-[#71717a] font-extrabold mt-4 select-none text-center uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Mira App
        </div>
      </div>
    </aside>
  );
};
