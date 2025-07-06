import React from "react";
import RightSidebar from "../../components/layout/right-sidebar";
import { Div, H2 } from "../../components/ui/html-tags";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Post from "./components/post";
import Story from "./components/story";

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
  const { user, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <Div className={["w-full flex  overflow-y-auto"]}>
      <Main />
      <RightSidebar />
    </Div>
  );
}

function Main() {
  return (
    <Div
      className={["max-w-[40vw] h-fit border-r border-l border-gray-600 p-2"]}
    >
      <Stories stories={stories} />
      <Post />
      <Post />
    </Div>
  );
}

function Stories({ stories }) {
  return (
    <Div>
      <H2 className={["text-2xl font-semibold py-2"]}>Stories</H2>
      <Div className={["flex gap-2 items-center overflow-x-auto"]}>
        {stories?.map((story, index) => (
          <Story {...story} key={index} />
        ))}
      </Div>
    </Div>
  );
}

export function Posts({ posts }) {
  return (
    <Div>
      <H2 className={["text-2xl font-semibold py-2"]}>Posts</H2>
      <Div className={["flex gap-2 items-center overflow-x-auto"]}>
        {posts?.map((post, index) => (
          <Post {...post} key={index} />
        ))}
      </Div>
    </Div>
  );
}
