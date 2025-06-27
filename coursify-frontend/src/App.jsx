// import "./App.css"
import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Landing } from "./components/Landing";
import { AdminHome } from "./components/AdminHome";
import { UserHome } from "./components/UserHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/admin/home" element={<AdminHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
