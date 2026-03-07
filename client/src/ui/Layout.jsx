import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full p-4">
        <Outlet />
      </main>
    </div>
  );
}
