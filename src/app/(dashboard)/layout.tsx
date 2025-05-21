import Navbar from "@/components/Navbar";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div>
        <Navbar />

        <div
          style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
          className="min-h-screen bg-primary-100 w-full"
        >
          <main className="flex">
            <Sidebar />
            <div className="flex-grow transition-all duration-300 ">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
