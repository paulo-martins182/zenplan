"use client";

import React, { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import BaseSidebar from "@/components/BaseSidebar";
import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { useGetAuthUserQuery } from "@/state/api";
import { usePathname, useRouter } from "next/navigation";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const [loadingPage, setLoadingPage] = React.useState(true);

  useEffect(() => {
    if (authUser) {
      const userRole = authUser.userRole?.toLowerCase();
      if (
        (userRole === "manager" && pathname.startsWith("/tenants")) ||
        (userRole === "tenant" && pathname.startsWith("/managers"))
      ) {
        router.push(
          userRole === "manager"
            ? "/managers/properties"
            : "/tenants/favorites",
          { scroll: false }
        );
      } else {
        setLoadingPage(false);
      }
    }
  }, [authUser, router, pathname]);

  if (authLoading || loadingPage) return <p>Loading...</p>;

  if (!authUser?.userRole) return null;

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-primary-100 w-full">
        <Navbar />

        <div style={{ paddingTop: `${NAVBAR_HEIGHT + 20}px` }}>
          <main className="flex">
            <BaseSidebar userType={authUser?.userRole} />
            <div className="w-full flex-grow transition-all duration-300 pl-5">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
