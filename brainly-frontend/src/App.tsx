import { Auth } from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SharedBrain } from "./pages/SharedBrain";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/shared/:hash" element={<SharedBrain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
