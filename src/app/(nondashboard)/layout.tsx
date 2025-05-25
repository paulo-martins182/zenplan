"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { useGetAuthUserQuery } from "@/state/api";
import FooterSection from "./landing/(nonsections)/FooterSection";

function Layout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();

  const router = useRouter();
  const pathname = usePathname();
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    const authUserRole = authUser?.userRole?.toLowerCase();
    const validateRole = authUserRole === "manager";

    if ((validateRole && pathname.startsWith("/search")) || pathname === "/") {
      router.push("/managers/properties", { scroll: false });
    } else {
      setLoadingPage(false);
    }
  }, [authUser, pathname, router]);

  if (authLoading || loadingPage) return <p>Loading...</p>;

  if (!authUser?.userRole) return null;

  return (
    <div className="h-full w-full">
      <Navbar />
      <div
        className={`h-full flex w-full flex-col pt-[${NAVBAR_HEIGHT}px]`}
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        {children}
      </div>

      <FooterSection />
    </div>
  );
}

export default Layout;
