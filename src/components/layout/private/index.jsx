import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Sidebar from "../sidebar";
import RightSidePannel from "./RightSidePannelRenderer";

import cn from "../../../utility/cn";

export default function HomeLayout() {
  console.log("HomeLayout re-rendered");
  return (
    <main
      className={cn(
        "flex w-screen h-screen text-black",
        "dark:bg-[#0f0f0f] dark:text-white"
      )}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <Sidebar />
      <Outlet />
      <div className="max-sm:hidden">
        <RightSidePannel />
      </div>
    </main>
  );
}
