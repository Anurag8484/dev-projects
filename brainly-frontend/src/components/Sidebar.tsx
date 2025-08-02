import { LuBrain } from "react-icons/lu";
import { SidebarItem } from "./SidebarItem";
import { YouTubeIcon } from "./icons/YoutubeIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

export const Sidebar = () => {
  return (
    <div className="bg-white border-r-1 shadow-lg border-[#E6E8EA] min-h-screen w-0 overflow-hidden sm:min-w-71 sm:mr-10">
      <div className="m-5 flex  items-center gap-1">
        <LuBrain className="size-8 text-[#4E44D2]" />
        <span className="text-xl text-[#212C38] font-bold">Second Brain</span>
      </div>
      <div className="mt-15 mx-5 flex flex-col gap-5  text-[#3B4047]">
        <SidebarItem icon={<YouTubeIcon />} text="YouTube" />
        <SidebarItem icon={<TwitterIcon />} text="Twitter" />
      </div>
    </div>
  );
};
