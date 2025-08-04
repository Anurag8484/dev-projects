import { Button } from "../components/ui/Button";
import { ShareIcon } from "../components/icons/ShareIcon";
import { PlusIcon } from "../components/icons/PlusIcon";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import { ContentModal } from "../components/ContentModal";
import { useContent } from "../hooks/useContent";

export const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(()=>{
    refresh();
  }, [modalOpen])

  return (
    <section className={`w-full duration-300 `}>
      <ContentModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className={` ${modalOpen ? "blur-sm" : ""}`}>
        <div className="flex flex-col md:flex-row justify-start gap-2 items-center md:justify-between md:items-start m-6">
          <h1 className="font-bold text-2xl">All Notes</h1>
          <div className="flex gap-6">
            <Button
              onClick={() => {}}
              startIcon={<ShareIcon size="lg" />}
              variant="primary"
              text="Share Brain"
              size="sm"
            />
            <Button
              onClick={() => setModalOpen(true)}
              startIcon={<PlusIcon size="lg" />}
              variant="secondary"
              text="Add Content"
              size="md"
            />
          </div>
        </div>
        <div className="grid justify-center md:grid-cols-3 gap-10">
          {contents.map(({type,title,link}, index)=> <Card key={index} type={type} link={link} title={title} />)}
        </div>
      </div>
    </section>
  );
};
