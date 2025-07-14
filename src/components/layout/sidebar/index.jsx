import React from "react";
import { Link } from "react-router-dom"; // ✅
import User from "./components/User";
import NavItems from "./components/NavItems";
import { Button, Div, Navigations } from "../../ui/html-tags";
import CreatePost from "../../create-post";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  console.log("Sidebar re-rendered");
  const [showCreatePost, setShowCreatePost] = React.useState(false);
  const user = {
    name: "John Doe",
  };

  const location = useLocation();
  if (location.pathname === "/") return null;

  function handleShowCreatePost() {
    setShowCreatePost(true);
  }
  function handleCloseCreatePost() {
    setShowCreatePost(false);
  }

  return (
    <aside className={["w-[25vw] shrink-0 flex justify-end p-2 "]}>
      <Div className={["flex flex-col gap-4 py-2"]}>
        <Link to="/home">
          <img className="size-18" src="./swan-logo.png" alt="" />
        </Link>
        <Div className={["flex-1 space-y-4"]}>
          <Navigations>
            <NavItems />
          </Navigations>
          <Button
            onClick={handleShowCreatePost}
            className={[
              "w-full px-4 py-1 rounded-2xl cursor-pointer",
              "bg-[#01b0e2] hover:bg-[#78d4ed]",
              "flex items-center gap-2 justify-center",
              "text-white font-semibold text-2xl",
            ]}
          >
            Post
          </Button>
        </Div>
        <User {...user} />
      </Div>
      {showCreatePost && <CreatePost close={handleCloseCreatePost} />}
    </aside>
  );
}
