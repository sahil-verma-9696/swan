import React from "react";
import RightSidebar from "../../components/layout/right-sidebar";
import { Div, H2, Image, Section } from "../../components/ui/html-tags";
import { User } from "../../data/dummy";
import Post from "../home/components/post";
const posts = [
  {
    user_img:
      "https://images.unsplash.com/photo-1742933779258-066ced2b3c2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user_name: "Sekh Sahb",
    post_img:
      "https://images.unsplash.com/photo-1742933779258-066ced2b3c2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user_img: "",
    user_name: "Sekh Sahb",
    post_img:
      "https://images.unsplash.com/photo-1742933779258-066ced2b3c2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user_img: "",
    user_name: "Sekh Sahb",
    post_img:
      "https://images.unsplash.com/photo-1742933779258-066ced2b3c2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Profile() {
  return (
    <Div className={["w-full flex overflow-y-auto"]}>
      <Main />
      <RightSidebar />
    </Div>
  );
}
function Main() {
  return (
    <Div className={["w-[40vw] h-fit border-r border-l border-gray-600"]}>
      <H2 className={["text-2xl font-semibold p-2"]}>Profile</H2>
      <Section>
        <Div className={["bg-purple-400 h-60", "relative"]}>
          <Div
            className={[
              "bg-white rounded-full p-1",
              "absolute bottom-0 translate-y-1/2",
              "mx-4",
              "dark:bg-[#0f0f0f]",
            ]}
          >
            <Image
              src={User.image}
              className={["size-32 rounded-full object-cover"]}
            />
          </Div>
        </Div>
        <H2 className={["text-2xl font-semibold px-4 pt-18"]}>{User.name}</H2>
        <H2 className={[" px-4 text-gray-400"]}>{User.username}</H2>
        <Post />
        <Post />
      </Section>
    </Div>
  );
}
