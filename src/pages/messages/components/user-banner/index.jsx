import React from "react";
import { H2, Image, Section } from "../../../../components/ui/html-tags";
import { User } from "../../../../data/dummy";

export default function UserBanner() {
  return (
    <Section className={["border-b border-gray-600 py-6"]}>
      <Image className={["size-20 rounded-full mx-auto "]} src={User.image} />
      <H2 className={["text-center text-lg font-semibold"]}>{User.name}</H2>
      <H2 className={["text-center text-lg font-thin text-gray-400"]}>{User.username}</H2>

    </Section>
  );
}
