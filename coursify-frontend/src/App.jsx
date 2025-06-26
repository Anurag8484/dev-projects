// import "./App.css"
import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Landing } from "./components/Landing";
import { Home } from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
