import React from "react";
import { Div, H2 } from "../../components/ui/html-tags";
import Post from "./components/post";
import Story from "./components/story";
import { Image, ImageKitProvider } from "@imagekit/react";
import StoryGroup from "./components/story-group/index";

const stories = [
  {
    user_img:
      "https://images.unsplash.com/photo-1615322678402-04b477522be7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG5hcnV0b3xlbnwwfHwwfHx8MA%3D%3D",
    user_name: "Sekh Sahb",
    story_thumb:
      "https://images.unsplash.com/photo-1742933779258-066ced2b3c2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user_img:
      "https://images.unsplash.com/photo-1742933779258-066ced2b3c2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user_name: "Sekh Sahb",
    story_thumb:
      "https://images.unsplash.com/photo-1742933779258-066ced2b3c2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user_img:
      "https://images.unsplash.com/photo-1742933779258-066ced2b3c2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user_name: "Sekh Sahb",
    story_thumb:
      "https://images.unsplash.com/photo-1742933779258-066ced2b3c2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user_img:
      "https://images.unsplash.com/photo-1742933779258-066ced2b3c2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user_name: "Sekh Sahb",
    story_thumb:
      "https://images.unsplash.com/photo-1742933779258-066ced2b3c2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user_img:
      "https://images.unsplash.com/photo-1742933779258-066ced2b3c2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user_name: "Sekh Sahb",
    story_thumb:
      "https://images.unsplash.com/photo-1742933779258-066ced2b3c2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

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

export default function Home() {
  console.log("Home re-rendered");
  return (
    <Div className={["flex flex-col border-l border-r border-gray-600 overflow-y-auto flex-2"]}>
      <StoryGroup stories={stories} />
      <Post />
      <Post />
    </Div>
  );
}
