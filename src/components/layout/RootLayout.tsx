import { Outlet } from "react-router-dom";
import Header from "./Header";
import ProfilePanel from "./ProfilePanel";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#f2f0ed]">
      <Header />
      <div className="flex flex-col lg:flex-row pt-16">
        {/* Left Profile Panel */}
        <div className="w-full lg:fixed lg:w-[400px] lg:left-12 lg:top-16 lg:h-[calc(100vh-4rem)] overflow-y-auto">
          <ProfilePanel />
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 lg:ml-[calc(400px+3rem)] lg:mr-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
