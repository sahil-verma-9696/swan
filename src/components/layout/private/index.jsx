import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import cn from "../../../utility/cn";
import { useSelector } from "react-redux";
import RightSidebar, { Conversations } from "../right-sidebar";
import { Toaster } from "react-hot-toast";

const RightSidebarPannelMap = {
  messages: Conversations,
  all: RightSidebar,
};

export default function HomeLayout() {
  console.log("HomeLayout re-rendered");
  const RightSidePannel =
    RightSidebarPannelMap[useSelector((state) => state.app.RightSidePannel)];

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
      {/* <RightSidePannel /> */}
    </main>
  );
}
