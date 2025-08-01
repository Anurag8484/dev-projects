import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";

const App = () => {
  return (
    <>
      <section className="bg-[#f9fbfc]">
        <div className="flex">
          <Sidebar />
          <Topbar />
        </div>
      </section>
    </>
  );
};

export default App;
