export function Download() {
  return (
    <div className="mt-35">
      <div className="flex justify-center text-4xl font-bold my-5">
        <span>Download the extension</span>
      </div>
      <div className=" text-[#9194A1] flex flex-col items-center mb-25 ">
        <span className="">
          We've got more browsers in the pipeline. Please do let us know if
        </span>
        <span>you've got a favourite you'd like us to prioritize.</span>
      </div>
      <div className="flex justify-center  gap-8">
        <div className=" rounded-xl shadow-lg min-h-80 min-w-80 ">
          <div className="flex gap-5 flex-col items-center  py-10 border-b-6  border-[#DBDFF5] border-dotted">
            <img
              src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-chrome.svg"
              alt=""
              className="size-23"
            />
            <span className="text-xl font-bold">Add to Chrome</span>
            <span className="text-sm">Minimum Version 62</span>
          </div>
          <div className=" py-4 flex justify-center ">
            <div className=" flex  bg-[#5368DF] px-7 hover:bg-white hover:text-[#5368DF] hover:border-[#5368DF] border-2 cursor-pointer text-white rounded-md  py-3 justify-center">
              Add & Install Extension
            </div>
          </div>
        </div>
        <div className=" rounded-xl shadow-lg min-h-80 min-w-80 translate-y-6">
          <div className="flex gap-5 flex-col items-center  py-10 border-b-6  border-[#DBDFF5] border-dotted">
            <img
              src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-firefox.svg"
              alt=""
              className="size-23"
            />
            <span className="text-xl font-bold">Add to Firefox</span>
            <span className="text-sm">Minimum Version 55</span>
          </div>
          <div className=" py-4 flex justify-center ">
            <div className=" flex  bg-[#5368DF] px-7 hover:bg-white hover:text-[#5368DF] hover:border-[#5368DF] border-2 cursor-pointer text-white rounded-md  py-3 justify-center">
              Add & Install Extension
            </div>
          </div>
        </div>
        <div className=" rounded-xl shadow-lg min-h-80 min-w-80 translate-y-12 ">
          <div className="flex gap-5 flex-col items-center  py-10 border-b-6  border-[#DBDFF5] border-dotted">
            <img
              src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-opera.svg"
              alt=""
              className="size-23"
            />
            <span className="text-xl font-bold">Add to Opera</span>
            <span className="text-sm">Minimum Version 46</span>
          </div>
          <div className=" py-4 flex justify-center ">
            <div className=" flex  bg-[#5368DF] px-7 hover:bg-white hover:text-[#5368DF] hover:border-[#5368DF] border-2 cursor-pointer text-white rounded-md  py-3 justify-center">
              Add & Install Extension
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
