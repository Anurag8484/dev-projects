import { Sidebar } from "./components/Sidebar";
import { Auth } from "./pages/Auth";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <>

      <section className="bg-[#f9fbfc]">
        <div className="flex">
          <Auth />
          {/* <Sidebar /> */}
          {/* <Home /> */}
        </div>
      </section>
    </>
  );
};

export default App;
