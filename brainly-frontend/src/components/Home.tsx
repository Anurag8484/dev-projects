import { Button } from "./ui/Button";
import { ShareIcon } from "./icons/ShareIcon";
import { PlusIcon } from "./icons/PlusIcon";
import { Card } from "./Card";
import { useState } from "react";
import { ContentModal } from "./ContentModal";

export const Home = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <section className={`w-full `}>
      <ContentModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className={` ${modalOpen ? "blur-sm" : ""}`}>
        <div className="flex flex-col md:flex-row justify-start gap-2 items-center md:justify-between md:items-start      m-6">
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
              onClick={() => {}}
              startIcon={<PlusIcon size="lg" />}
              variant="secondary"
              text="Add Content"
              size="md"
            />
          </div>
        </div>
        <div className="grid justify-center md:grid-cols-3 gap-10">
          <Card
            title="Today's thought"
            type="twitter"
            link="https://x.com/RadhaKeliKunj/status/1950537459428987039"
          />
          <Card
            title="Today's thought"
            type="twitter"
            link="https://x.com/RadhaKeliKunj/status/1950537459428987039"
          />
          <Card
            title="100xDevs Motivation"
            type="youtube"
            link="https://www.youtube.com/watch?v=w7PkMQyevUo&ab_channel=HarkiratSingh"
          />
        </div>
      </div>
    </section>
  );
};
