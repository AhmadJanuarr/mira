import { LuPanelLeft } from "react-icons/lu";

export const SidebarToggle = ({
  toggleSidebar,
  customIconStyle,
}: {
  toggleSidebar: () => void;
  customIconStyle: string;
}) => {
  return (
    <button className="cursor-pointer" onClick={toggleSidebar}>
      <LuPanelLeft className={`${customIconStyle} transition-all duration-300 ease-in-out`} />
    </button>
  );
};
