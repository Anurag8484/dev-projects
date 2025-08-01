import { Button } from "./ui/Button";
import { FaPlus } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";

export const Topbar = () => {
  return (
    <section>
      <div className=" flex items-center m-6 justify-between">
        <h1 className="font-bold text-2xl">
          All Notes
        </h1>
        <div className="flex">
          <Button
            onClick={() => {}}
            startIcon={<FaPlus className="" />}
            variant="secondary"
            text="Add Content"
            size="md"
          />
          <Button
            onClick={() => {}}
            startIcon={<FiShare2 className="size-5" />}
            variant="primary"
            text="Share Brain"
            size="sm"
          />
        </div>
      </div>
    </section>
  );
};

