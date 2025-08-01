import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { DeleteIcon } from "./icons/DeleteIcon";
import { ShareIcon } from "./icons/ShareIcon";
import copy from "copy-to-clipboard";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div className="">
      {type === "youtube" && (
        <div className="bg-white py-5 px-2 max-w-70 min-w-75 min-h-90 no-scrollbar max-h-100 outline-1 overflow-auto rounded-xl outline-[#E6E8EA]  shadow-md">
          <div className="flex justify-between">
            <div className="flex gap-1 font-[500] items-center ">
              <FaYoutube className="text-[#62686D]" />
              <span className="">{title}</span>
            </div>
            <div className="flex gap-5  text-[#A1A4AC] ">
              <ShareIcon size="sm" onClick={() => copy(link)} />
              <DeleteIcon size="sm" />
            </div>
          </div>
          <div className="flex my-3 justify-center ">
            <iframe
              className="rounded-xl"
              src={`https://www.youtube.com/embed/${new URL(
                link
              ).searchParams.get("v")}`}
              width={270}
              title={"YouTube Video Player"}
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      )}

      {type === "twitter" && (
        <div className="bg-white py-5 px-2 max-w-70 min-w-75 min-h-90 no-scrollbar max-h-100 outline-1 overflow-auto rounded-xl outline-[#E6E8EA]  shadow-md">
          <div className="flex justify-between">
            <div className="flex gap-2 font-[500] items-center">
              <FaXTwitter className="text-[#62686D]" />
              <span className="">{title}</span>
            </div>
            <div className="flex gap-5  text-[#A1A4AC]">
              <ShareIcon size="sm" onClick={() => copy(link)} />
              <DeleteIcon size="sm" />
            </div>
          </div>
          <div className="flex justify-center">
            <blockquote className="twitter-tweet ">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          </div>
        </div>
      )}
    </div>
  );
}
