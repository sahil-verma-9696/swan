import React, { useEffect } from "react";
import { Div } from "../../components/ui/html-tags";
import Header from "./components/header";
import UserBanner from "./components/user-banner";
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
    <Div className={["flex-2 flex overflow-y-auto"]}>
      <Div
        className={[
          "w-full h-screen",
          "flex flex-col",
          "border-r border-l border-gray-600",
        ]}
      >
        <Header />
        <div className="flex-1 overflow-y-auto">
          <UserBanner />
        </div>
        <InputArea />
      </Div>
    </Div>
  );
}