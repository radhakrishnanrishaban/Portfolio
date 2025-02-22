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

      <div className="flex flex-col lg:flex-row">
        {/* Left Profile Panel - Fixed on desktop, scrollable on mobile */}
        <div className="w-full lg:fixed lg:w-[400px] lg:left-12 lg:top-16 lg:h-[calc(100vh-4rem)] overflow-y-auto">
          <ProfilePanel />
        </div>

        {/* Right Content Area - Flexible sizing */}
        <div className="flex-1 px-4 lg:ml-[calc(400px+3rem)] lg:mr-16">
          <div className="max-w-5xl mx-auto">
            {React.Children.map(children, (child, index) => (
              <>
                {index > 0 && (
                  <div className="h-px bg-gray-200 mx-auto w-full" />
                )}
                <section className="min-h-screen">
                  <div className="bg-white shadow-sm w-full mt-8 lg:mt-24">
                    <div className="px-4 py-8 lg:px-12 lg:py-16">{child}</div>
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
