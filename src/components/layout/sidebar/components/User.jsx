import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { Button, Div, Image, Span } from "../../../ui/html-tags";
import { useSelector } from "react-redux";

export default function User() {
  const { user_name, user_handle, user_profile } = useSelector(
    (state) => state.auth.user
  );
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu((prev) => !prev);
  return (
    <Div className={["relative"]}>
      <Button
        onClick={toggleMenu}
        className={[
          "w-70 px-4 py-2 rounded-4xl cursor-pointer",
          "flex gap-2 items-center shrink-0",
          "hover:bg-gray-200",
          "dark:hover:bg-gray-800",
        ]}
      >
        <Span className={["size-14 rounded-full overflow-hidden shrink-0"]}>
          <Image className={["size-full"]} src={user_profile} alt="" />
        </Span>
        <Span className={["flex flex-col shrink-0 flex-1"]}>
          <Span className={["font-semibold"]}>{user_name}</Span>
          <Span className={["text-xs"]}>{user_handle}</Span>
        </Span>
        <BsThreeDots />
      </Button>
      {showMenu && <LogoutMenu setShowMenu={setShowMenu} />}
    </Div>
  );
}

function LogoutMenu({ setShowMenu }) {
  return (
    <Div
      className={[
        "border border-gray-600",
        "p-1 rounded-2xl",
        "absolute -top-2",
        "bg-white w-full",
        "-translate-y-full",
        "dark:bg-[#0f0f0f] dark:border-gray-600",
      ]}
    >
      <Button
        className={[
          "px-2 py-2 w-full rounded-2xl cursor-pointer",
          "text-red-500 flex items-center gap-2",
          "hover:bg-red-100",
          "dark:hover:bg-gray-800",
        ]}
      >
        <BiLogOut />
        <Span>Logout</Span>
      </Button>
    </Div>
  );
}
