import { ReactNode } from "react";
import React from "react";
import Header from "./Header";
import ProfilePanel from "./ProfilePanel";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#f2f0ed]">
      <Header />

      <div className="flex">
        {/* Left Profile Panel - Fixed */}
        <div className="fixed w-[400px] left-12 top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <ProfilePanel />
        </div>

        {/* Right Content Area - Flexible sizing */}
        <div className="flex-1 ml-[calc(400px+3rem)] mr-16">
          <div className="max-w-5xl mx-auto">
            {React.Children.map(children, (child, index) => (
              <>
                {index > 0 && (
                  <div className="h-px bg-gray-200 mx-auto w-full" />
                )}
                <section className="min-h-screen">
                  <div className="bg-white shadow-sm w-full mt-24">
                    <div className="px-12 py-16">{child}</div>
                  </div>
                </section>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
