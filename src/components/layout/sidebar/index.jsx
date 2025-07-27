import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import User from "./components/User";
import NavItems from "./components/NavItems";
import { Button, Div, Navigations } from "../../ui/html-tags";
import CreatePost from "../../create-post";
import CreatePostBtn from "../../create-post/create-post-btn";

export default React.memo(function Sidebar() {
  console.log("Sidebar re-rendered");

  return (
    <aside className="flex-1 flex justify-end p-2 max-sm:fixed z-10 bg-black max-sm:bottom-0 max-sm:w-full max-sm:p-0 max-sm:left-0">
      <Div className={["flex flex-col gap-4 py-2"]}>
        <Link to="/home" className="max-sm:hidden">
          <img className="size-18" src="./swan-logo.png" alt="" />
        </Link>
        <Div className={["flex-1 space-y-4","max-sm:relative max-sm:w-screen max-sm:px-2"]}>
          <Navigations className={["max-sm:flex gap-2 m-0 max-sm:justify-between"]}>
            <NavItems />
          </Navigations>
          <CreatePostBtn />
        </Div>
        <User />
      </Div>
    </aside>
  );
});
