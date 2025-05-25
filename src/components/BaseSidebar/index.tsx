"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import { Menu, Text } from "lucide-react";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navManagerLinks, NavTenantLinks } from "./navLinks";

const BaseSidebar = ({ userType }: BaseSidebarProps) => {
  const pathname = usePathname();
  const { toggleSidebar, open } = useSidebar();

  const navLinks = userType === "manager" ? navManagerLinks : NavTenantLinks;

  return (
    <Sidebar
      collapsible="icon"
      className="fixed left-0 bg-white shadow-lg"
      style={{
        top: `${NAVBAR_HEIGHT}px`,
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <SidebarHeader className="relative">
        <SidebarMenu>
          <SidebarMenuItem>
            <div
              className={cn(
                "flex min-h-[56px] w-full items-center pt-3 mb-3",
                open ? "justify-between px-6" : "justify-center"
              )}
            >
              {open ? (
                <>
                  <h1 className="text-xl font-bold text-gray-800">
                    {userType === "manager" ? "Manager View" : "Renter View"}
                  </h1>
                  <button
                    className="hover:bg-gray-100 p-2 rounded-md cursor-pointer "
                    onClick={() => toggleSidebar()}
                  >
                    <span className="bg-secondary-600 p-1 rounded-sm  absolute -right-5 top-5 ">
                      <Text className="h-6 w-6 text-white " />
                    </span>
                  </button>
                </>
              ) : (
                <button
                  className="hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                  onClick={() => toggleSidebar()}
                >
                  <span className="bg-secondary-600 p-1  rounded-sm absolute left-0 top-5 ">
                    <Menu className="h-6 w-6 text-white " />
                  </span>
                </button>
              )}
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu className="px-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "flex items-center px-4 py-6 ",
                    isActive
                      ? "text-white bg-secondary-600 hover:bg-secondary-800 hover:text-white"
                      : "text-gray-700 hover:bg-secondary-800 hover:text-white",
                    open ? "" : "ml-[-9px]"
                  )}
                >
                  <Link href={link.href} className="w-full" scroll={false}>
                    <div className="flex items-center gap-3">
                      <link.icon
                        className={cn(`h-5 w-5 `, open ? "" : "ml-[-2px]")}
                      />
                      <span className={`font-medium `}>{link.label}</span>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default BaseSidebar;
