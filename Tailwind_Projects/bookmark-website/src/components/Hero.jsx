import { IoBookmark } from "react-icons/io5";

export function Hero() {
  return (
    <div className="m-13">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <span className="bg-[#5267DF]  flex items-center justify-center  rounded-4xl text-[15px] text-white size-7">
            <IoBookmark className="" />
          </span>
          <span className="font-bold text-[#232A45] text-lg">BOOKMARK</span>
        </div>
        <div className="gap-13 flex items-center text-[#9194A1]">
          <span className="cursor-pointer hover:text-[#FA5657]">FEATURES</span>
          <span className="cursor-pointer hover:text-[#FA5657]">DOWNLOAD</span>
          <span className="cursor-pointer hover:text-[#FA5657]">FAQ</span>
          <span className="bg-[#FA5657] px-8 py-2.5 border-2 rounded-[8px] text-white hover:bg-white hover:border-2 hover:text-[#FA5657] hover:shadow-lg cursor-pointer  hover:border-[#FA5657]">
            LOGIN
          </span>
        </div>
      </div>
    </div>
  );
}
