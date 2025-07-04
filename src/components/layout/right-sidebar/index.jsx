import React from "react";
import { User } from "../../../data/dummy";
import { Button, Div, H2, Image, Input, Span } from "../../ui/html-tags";
export default function RightSidebar() {
  return (
    <Div className={["w-[35vw] p-4"]}>
      <Div className={["w-[70%] mx-auto space-y-4"]}>
        <Input
          className={["border border-gray-400", "p-2 rounded-lg", "w-full"]}
          type="text"
          placeholder="Search on Swan"
        />
        <Div
          className={[
            "flex flex-col gap-2",
            "border border-gray-400 rounded-lg p-2",
          ]}
        >
          <H2 className={["text-2xl font-semibold p-1"]}>Who to Follow</H2>
          <UserComp user={User} />
          <UserComp user={User} />
          <UserComp user={User} />
          <UserComp user={User} />
        </Div>
      </Div>
    </Div>
  );
}

function UserComp({ user }) {
  return (
    <Div
      className={[
        "flex gap-2 items-center",
        "hover:bg-gray-200 ",
        "dark:hover:bg-gray-800",
        "p-2 rounded-2xl",
      ]}
    >
      <Image
        className={["size-16 object-cover rounded-full"]}
        src={User.image}
        alt=""
      />
      <Div className={["flex flex-1 flex-col"]}>
        <Span className={["text-xl font-semibold"]}>{User.name}</Span>
        <Span className={["text-sm font-thin"]}>{User.username}</Span>
      </Div>

      <Button
        className={["px-5 py-1 bg-[#01b0e2] text-white rounded-3xl text-2xl"]}
      >
        Follow
      </Button>
    </Div>
  );
}
