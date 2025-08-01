import { Button } from "./ui/Button";
import { FaPlus } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";

export const Topbar = () => {
  return (
      <div className="flex flex-col md:flex-row justify-start gap-5 items-center md:justify-between md:items-start  w-screen  m-6">
        <h1 className="font-bold text-2xl">
          All Notes
        </h1>
        <div className="flex gap-6">
          <Button
            onClick={() => {}}
            startIcon={<FiShare2 className="size-5" />}
            variant="primary"
            text="Share Brain"
            size="sm"
          />
          <Button
            onClick={() => {}}
            startIcon={<FaPlus className="" />}
            variant="secondary"
            text="Add Content"
            size="md"
          />
        </div>
      </div>
  );
};

