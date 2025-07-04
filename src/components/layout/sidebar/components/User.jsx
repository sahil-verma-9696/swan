import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { Button, Div, Image, Span } from "../../../ui/html-tags";

export default function User() {
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
          <Image
            className={["size-full"]}
            src="https://images.unsplash.com/photo-1615322678402-04b477522be7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG5hcnV0b3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </Span>
        <Span className={["flex flex-col shrink-0 flex-1"]}>
          <Span className={["font-semibold"]}>Sekh Sahb</Span>
          <Span className={["text-xs"]}>@Sekh Sahb</Span>
        </Span>
        <BsThreeDots />
      </Button>
      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </Div>
  );
}

function Menu({ setShowMenu }) {  
  return (
    <Div
      className={[
        "border border-gray-400",
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
