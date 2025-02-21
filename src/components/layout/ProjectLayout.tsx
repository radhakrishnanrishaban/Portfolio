import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function ProjectLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
