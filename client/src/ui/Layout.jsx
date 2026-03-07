import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full">
        <DashboardHeader />
        <div className="app-container p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
