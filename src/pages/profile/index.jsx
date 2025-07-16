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
  console.log("Profile re-rendered"); 
  return (
    <Div
      className={[
        "flex-2 flex flex-col overflow-y-auto border-r border-l border-gray-600",
      ]}
    >
      <H2 className={["text-2xl font-semibold p-2"]}>Profile</H2>
      <Section>
        <Div className={["bg-purple-400 h-60"]}></Div>
        <Div
          className={[
            "bg-white rounded-full p-1",
            "mx-4 w-fit",
            "dark:bg-[#0f0f0f]",
          ]}
        >
          <Image
            src={User.image}
            className={["size-32 rounded-full object-cover"]}
          />
        </Div>
        <H2 className={["text-2xl font-semibold px-4 "]}>{User.name}</H2>
        <H2 className={[" px-4 text-gray-400"]}>{User.username}</H2>
        <Post />
        <Post />
      </Section>
    </Div>
  );
}
