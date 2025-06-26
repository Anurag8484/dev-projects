import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Landing } from "./Landing";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
