import { Manager, Tenant } from "@/types/prismaTypes";
import { fetchAuthSession, getCurrentUser } from "@aws-amplify/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers) => {
         const session = await fetchAuthSession();
          const {idToken} = session?.tokens ?? {};

          if(idToken){
            headers.set("Authorization", `Bearer ${idToken}`);
          }
    }
  }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (build) => ({
    getAuthUser: build.query<User, void>({
      queryFn: async (_, _queryApi, _extraoptions, fetchWithBQ) => {
        try{
          const session = await fetchAuthSession();
          const {idToken} = session?.tokens ?? {};

          const user = await  getCurrentUser();
          const userRole = idToken?.payload["custom:role"] as string;

          const endpoint = userRole === "manager" ? `/manager/${user.userId}` : `/tentants/${user.userId}`;

          // eslint-disable-next-line prefer-const
          let userDetailsResponse = await fetchWithBQ(endpoint);

          //caso não exista nenhum user, criar novo user

          return {
            data: {
              cognitoInfo: {
                ...user
              },
              userInfo: userDetailsResponse.data as Tenant | Manager,
              userRole
            }
          }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }catch(err: any){
          return {
            error: err.message || "Error fetching user"
          }
        }
      }
    })


 
  }),
});

export const {} = api;
