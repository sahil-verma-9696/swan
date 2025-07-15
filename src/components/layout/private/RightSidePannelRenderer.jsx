import React from "react";
import { useSelector } from "react-redux";
import RightSidebar from "../right-sidebar";
import Conversations from "../right-sidebar/Conversation";

const RightSidebarPannelMap = {
  messages: Conversations,
  all: RightSidebar,
};

function RightSidePannelRenderer() {
  const panelKey = useSelector((state) => state.app.RightSidePannel);
  const PanelComponent = RightSidebarPannelMap[panelKey];
  return <PanelComponent />;
}

export default React.memo(RightSidePannelRenderer);
