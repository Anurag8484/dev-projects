import { Sidebar } from "../components/Sidebar";
import { Home } from "./Home";

export function Dashboard(){
    return (
      <div className="flex bg-[#f9fbfc]">
        <Sidebar />
        <Home />
      </div>
    );
}