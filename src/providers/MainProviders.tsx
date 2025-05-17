'use client";';

import React from "react";
import StoreProvider from "@/state/redux";

function MainProviders({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}

export default MainProviders;
