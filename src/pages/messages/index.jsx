import React, { useEffect } from "react";
import RightSidebar, {
  Conversations,
  DataNotFound,
} from "../../components/layout/right-sidebar";
import { Div, H2 } from "../../components/ui/html-tags";
import Header from "./components/header";
import UserBanner from "./components/user-banner";
import ChatArea from "./components/chat-area";
import InputArea from "./components/input-area";
import { useDispatch } from "react-redux";
import { setRightSidePannel } from "../../store/appSlice";

export default function Messages() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRightSidePannel("messages"));
    return () => {
      dispatch(setRightSidePannel("all"));
    };
  });
  return (
    <Div className={["w-full flex overflow-y-auto"]}>
      <Div
        className={[
          "w-[40vw] h-screen",
          "flex flex-col",
          "border-r border-l border-gray-600",
        ]}
      >
        <Header />
        <div className="flex-1 overflow-y-auto">
          <UserBanner />
          {/* <ChatArea /> */}
        </div>
        <InputArea />
      </Div>
    </Div>
  );
}

function Main() {
  return (
    <Div className={["w-[40vw] h-screen border-r border-l border-gray-600 "]}>
      <H2 className={["text-2xl font-semibold px-4 py-2"]}>Messages</H2>

      <DataNotFound
        heading={"Select a message"}
        subheading={
          "Choose from your existing conversations, start a new one, or just keep swimming."
        }
        btnText={"New message"}
      />
    </Div>
  );
}
