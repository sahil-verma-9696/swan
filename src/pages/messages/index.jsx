import React from "react";
import RightSidebar from "../../components/layout/right-sidebar";
import { Div, H2 } from "../../components/ui/html-tags";

export default function Messages() {
  return (
    <Div className={["w-full flex overflow-y-auto"]}>
      <Main />
      <RightSidebar />
    </Div>
  );
}
function Main() {
  return (
    <Div
      className={["w-[35vw] h-screen border-r border-l border-gray-600 p-2"]}
    >
      <H2 className={["text-2xl font-semibold p-1"]}>Messages</H2>
    </Div>
  );
}
