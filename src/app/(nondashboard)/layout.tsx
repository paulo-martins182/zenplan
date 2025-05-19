"use client";

import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { useGetAuthUserQuery } from "@/state/api";
import React from "react";
import FooterSection from "./landing/(nonsections)/FooterSection";

function layout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: authUser } = useGetAuthUserQuery();
  console.log("authUser", authUser);

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

export default layout;
