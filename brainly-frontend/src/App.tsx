import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";

const App = () => {
  return (
    <>
      <section className="bg-[#f9fbfc]">
        <div className="flex">
          <Sidebar />
          <Home />
        </div>
      </section>
    </>
  );
};

export default App;
