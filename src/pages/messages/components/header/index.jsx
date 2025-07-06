import React from "react";
import { Div, H2, Image, Span } from "../../../../components/ui/html-tags";
import { User } from "../../../../data/dummy";

export default function Header() {
  return (
    <Div className={["flex items-center gap-2 px-4 py-2","shadow-md"]}>
      <Image className={["size-12 rounded-full"]} src={User.image} />
      <Span className={["flex flex-col"]}>
        <Span>{User.name}</Span>
        <Span className={["text-xs font-thin text-green-400"]}>Online</Span>
      </Span>
    </Div>
  );
}
