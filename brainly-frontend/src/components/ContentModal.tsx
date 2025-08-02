import { Button } from "./ui/Button";

type ContentModalProps = {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
};

export function ContentModal({modalOpen, setModalOpen}: ContentModalProps){

  if (!modalOpen){
    return null;
  }else{
    return (
      <div className="flex fixed inset-0  z-999 items-center justify-center duration-300     ">
          <div className="  bg-slate-100 p-7 rounded-md shadow-lg outline-1 outline-[#E6E8EA]  flex flex-col gap-5 items-center   ">
            <div className="flex flex-col gap-5 ">
              <input className="outline-1 px-3 py-1 overflow-hidden rounded-md" type="text" name="Link" placeholder="Paste the Link" id="" />
              <select name="type" id="" title="Select type" className="px-3 py-1  rounded-md outline-1">
                <option value="youtube">Select from below</option>
                <option className="" value="youtube">Youtube</option>
                <option value="youtube">Twitter</option>
              </select>
            </div>
            <div className=" flex gap-2   items-center">
              <Button variant="secondary" size="lg" text="Add Content" onClick={()=>{}} moreStyles="outline-1"  />
              <Button variant="primary" size="lg" text="Close" onClick={()=>setModalOpen(false)} moreStyles="outline-1"  />
            </div>
          </div>
      </div>
    );

  }


}