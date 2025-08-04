import axios from "axios";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";

interface Content {
  _id: string;
  type: "youtube" | "twitter";
  title: string;
  link: string;
  tags?: [];
}
export function SharedBrain() {
  const { hash } = useParams<{ hash: string }>();

  const [username, setUsername] = useState<string>("");
  const [contents, setContents] = useState<Content[]>([]);

  function fetchData() {
    try {
      axios
        .get(`${BACKEND_URL}/api/v1/brain/shared/${hash}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setUsername(res.data.username);
            setContents(res.data.contents);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [hash]);

  return (
    <div className="flex bg-[#f9fbfc]">
      <Sidebar />
      <section className={`w-full duration-300 `}>
        <div className="flex flex-col md:flex-row justify-start gap-2 items-center md:justify-between md:items-start m-6">
          <h1 className="font-bold text-2xl">{username}'s Brain</h1>
          <div className="flex gap-6"></div>
        </div>
        <div className="grid justify-center md:grid-cols-3 gap-10">
          {contents.map(({ _id, type, title, link }, index) => (
            <Card
              key={index}
              id={_id}
              type={type}
              link={link}
              title={title}
              isShared={true}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
