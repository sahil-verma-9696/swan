import React from "react";
import Sidebar from "../sidebar";
import cn from "../../../utility/cn";
import { Outlet } from "react-router";
export default function HomeLayout() {
  return (
    <main
      className={cn(
        "flex w-screen h-screen text-black",
        "dark:bg-[#0f0f0f] dark:text-white"
      )}
    >
      <Sidebar />
      <Outlet />
    </main>
  );
}


