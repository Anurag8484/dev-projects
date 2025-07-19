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
      <div className="flex   my-25">
        <div className=" flex flex-col gap-10 w-160   ">
          <span className="text-[60px] font-bold leading-15">
            A Simple Bookmark Manager
          </span>
          <span className="text-2xl text-[#9CA3AF] w-120 ">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </span>
          <div className="flex gap-5">
            <span className="bg-[#5368DF] text-white font-bold py-4 rounded-md px-3 hover:bg-white hover:shadow-lg hover:text-[#5368DF] border-2 border-[#5368DF] cursor-pointer">
              Get It On Chrome
            </span>
            <span className="bg-[#D1D5DB] text-black font-bold py-4 rounded-md px-3 hover:text-[#4B5563] hover:bg-white hover:shadow-lg  border-2 border-[#D1D5DB] cursor-pointer">
              Get It On Firefox
            </span>
          </div>
        </div>
        <div className="relative min-w-160">
          <div className="bg-[#5368DF] absolute top-15 right-0 translate-x-47 translate-y-30 h-75 w-141 rounded-bl-[150px] rounded-tl-[150px]"></div>
          <div className="">
            <img
              src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg"
              alt=""
              className="z-920 relative w-160 translate-x-8 -translate-y-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
