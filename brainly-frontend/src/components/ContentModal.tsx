import { useRef } from "react";
import { Button } from "./ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Input } from "./Input";

type ContentModalProps = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

export function ContentModal({ modalOpen, setModalOpen }: ContentModalProps) {
  const linkRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const type = typeRef.current?.value;
    const tagInput = tagRef.current?.value || "";
    const tags = tagInput
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/content/add`,
        {
          link,
          type,
          title,
          tags,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      if (res.status === 200){
        alert('Content Added')
        
      }
    } catch (error) {
      console.error(error);
      
    }
  }

  if (!modalOpen) {
    return null;
  } else {
    return (
      <div className="flex fixed inset-0  z-999 items-center justify-center duration-300     ">
        <div className="  bg-slate-100 p-7 rounded-md shadow-lg outline-1 outline-[#E6E8EA]  flex flex-col gap-5 items-center   ">
          <div className="flex flex-col gap-5 ">
            <Input placeholder="Title" ref={titleRef} />
            <Input placeholder="Tag" ref={tagRef} />
            <Input placeholder="Link" ref={linkRef} />
            <select
              name="type"
              id=""
              title="Select type"
              ref={typeRef}
              className="px-3 py-1  rounded-md outline-1"
            >
              <option value="youtube">Select from below</option>
              <option className="" value="youtube">
                Youtube
              </option>
              <option value="youtube">Twitter</option>
            </select>
          </div>
          <div className=" flex gap-2   items-center">
            <Button
              variant="secondary"
              size="lg"
              text="Add Content"
              onClick={addContent}
              moreStyles="outline-1"
            />
            <Button
              variant="primary"
              size="lg"
              text="Close"
              onClick={() => setModalOpen(false)}
              moreStyles="outline-1"
            />
          </div>
        </div>
      </div>
    );
  }
}
