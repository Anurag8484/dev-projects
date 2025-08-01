import { LuBrain } from "react-icons/lu";

export const Sidebar = () => {
  return (
    <div className="bg-white border-r-1 shadow-lg border-[#E6E8EA] h-screen w-0 overflow-hidden sm:w-76">
      <div className="m-5 flex  items-center gap-1">
        <LuBrain className="size-8 text-[#4E44D2]" />
        <span className="text-xl text-[#212C38] font-bold">Second Brain</span>
      </div>
    </div>
  );
};
