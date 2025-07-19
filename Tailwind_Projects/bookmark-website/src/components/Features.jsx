import { useState } from "react";

export function Features() {
  const [activeTabs, setActiveTabs] = useState({
    bookmarking: true,
    searching: false,
    sharing: false,
  });

  function toggleTab(key) {
    setActiveTabs({
      bookmarking: false,
      searching: false,
      sharing: false,
      [key]: true,
    });
  }
  return (
    <section>
      <div className="flex  justify-center">
        <span className="text-4xl font-bold">Features</span>
      </div>
      <div className="flex  justify-center my-6">
        <span className="text-center w-111 text-[#9194AA]  ">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </span>
      </div>
      <div className="flex relative justify-center  my-10 ">
        <div className="flex justify-around  py-6 px-7   border-b-2 border-[#E5E7EB] gap-21 ">
          <div
            onClick={() => toggleTab("bookmarking")}
            className={`translate-y-6 ${
              activeTabs.bookmarking
                ? "text-red-500 border-red-500"
                : "border-white"
            }  cursor-pointer pb-6 border-b-3  hover:border-b-3`}
          >
            Simple Bookmarking
          </div>
          <div
            onClick={() => toggleTab("searching")}
            className={`translate-y-6 ${
              activeTabs.searching
                ? "text-red-500 border-red-500"
                : "border-white"
            } cursor-pointer pb-6 border-b-3  hover:border-b-3`}
          >
            Speedy Searching
          </div>
          <div
            onClick={() => toggleTab("sharing")}
            className={`translate-y-6 ${
              activeTabs.sharing
                ? "text-red-500 border-red-500"
                : "border-white"
            }  cursor-pointer pb-6 border-b-3  hover:border-b-3`}
          >
            Easy Sharing
          </div>
        </div>
      </div>
      <div className="relative mt-15 ">
        <div className=" bg-[#5368DF] translate-x-0 translate-y-20  absolute top-15 left-0   h-74 w-137 rounded-br-[150px] rounded-tr-[150px]"></div>
        {activeTabs.bookmarking ? (
          <div className="flex gap-55 relative">
            <img
              src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg"
              alt=""
              className=" translate-x-33  "
            />
            <div className="flex flex-col gap-10">
              <span className=" text-3xl font-bold">Bookmark in one click</span>
              <span className="text-[#9194A1] w-115">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </span>
              <div className="flex">
                <span className="bg-[#5368DF] py-3 rounded-md border-2 hover:border-[#5368DF] hover:bg-white cursor-pointer hover:text-[#5368DF] text-white font-bold px-5">
                  More Info
                </span>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {activeTabs.searching ? (
          <div className="flex gap-70 relative">
            <img
              src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-2.svg"
              alt=""
              className=" translate-x-36   "
            />
            <div className="flex flex-col gap-10">
              <span className=" text-3xl font-bold">Intelligent search</span>
              <span className="text-[#9194A1] w-115">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </span>
              <div className="flex">
                <span className="bg-[#5368DF] py-3 rounded-md border-2 hover:border-[#5368DF] hover:bg-white cursor-pointer hover:text-[#5368DF] text-white font-bold px-5">
                  More Info
                </span>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {activeTabs.sharing ? (
          <div className="flex gap-80 relative">
            <img
              src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-3.svg"
              alt=""
              className=" translate-x-33 "
            />
            <div className="flex flex-col gap-10">
              <span className=" text-3xl font-bold">Share your bookmarks</span>
              <span className="text-[#9194A1] w-115">
                Easily share your bookmarks and collections with others. Create
                a shareable a link that you can send at the click of a button.
              </span>
              <div className="flex">
                <span className="bg-[#5368DF] py-3 rounded-md border-2 hover:border-[#5368DF] hover:bg-white cursor-pointer hover:text-[#5368DF] text-white font-bold px-5">
                  More Info
                </span>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
