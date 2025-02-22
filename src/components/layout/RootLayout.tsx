import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#f2f0ed]">
      <Header />
      <Outlet />
    </div>
  );
}
