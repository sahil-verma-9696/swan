import React from "react";
import RightSidebar from "../../components/layout/right-sidebar";
import { Div, H2 } from "../../components/ui/html-tags";

export default function Notifications() {
  console.log("Notifications re-rendered");
  return (
    <Div className={["flex-2 flex overflow-y-auto"]}>
      <Div
        className={["w-full h-screen border-r border-l border-gray-600 p-2"]}
      >
        <H2 className={["text-2xl font-semibold p-1"]}>Notifications</H2>
      </Div>
    </Div>
  );
}
