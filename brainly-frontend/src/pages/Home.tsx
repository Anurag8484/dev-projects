import { Button } from "../components/ui/Button";
import { ShareIcon } from "../components/icons/ShareIcon";
import { PlusIcon } from "../components/icons/PlusIcon";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import { ContentModal } from "../components/ContentModal";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";
import copy from "copy-to-clipboard";

export const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(()=>{
    refresh();
  }, [modalOpen])

  function shareBrain(){
    console.log("c1");
    
    try {
      axios.post(`${BACKEND_URL}/api/v1/brain/share`,{share: true},{
        headers:{
          'token': localStorage.getItem('token')
        }
      }).then((response)=>{
        if (response.status===200){
          copy(`http://localhost:5173/shared/${response.data.link}`)
          alert(
            `Link Copied to Clipboard:http://localhost:5173/api/v1/brain/shared/${response.data.link} `
          );
        }
      })
    } catch (error) {
      console.error(error);
      
    }
  }

  return (
    <section className={`w-full duration-300 `}>
      <ContentModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className={` ${modalOpen ? "blur-sm" : ""}`}>
        <div className="flex flex-col md:flex-row justify-start gap-2 items-center md:justify-between md:items-start m-6">
          <h1 className="font-bold text-2xl">All Notes</h1>
          <div className="flex gap-6">
            <Button
              onClick={shareBrain}
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
          {contents.map(({_id, type,title,link}, index)=> <Card key={index} id={_id} type={type} link={link} title={title} />)}
        </div>
      </div>
    </section>
  );
};
