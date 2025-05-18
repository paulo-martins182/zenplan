"use client";

import Auth from "@/app/(auth)/AuthProvider";
import StoreProvider from "@/state/redux";
import { Authenticator } from "@aws-amplify/ui-react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Authenticator.Provider>
        <Auth>{children}</Auth>
      </Authenticator.Provider>
    </StoreProvider>
  );
};

export default Providers;
