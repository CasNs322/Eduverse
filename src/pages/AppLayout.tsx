import { Children } from "react";
import { Header } from "../components/Header/Header";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="AppLayout">
      <Header />
      <Outlet />
    </div>
  );
}
