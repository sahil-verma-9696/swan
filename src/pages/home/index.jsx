import React from "react";
import RightSidebar from "../../components/layout/right-sidebar";
import { Button, Div, H2, Image, Span } from "../../components/ui/html-tags";
import {
  BsBookmark,
  BsChatLeft,
  BsDot,
  BsHeart,
  BsShare,
  BsThreeDots,
} from "react-icons/bs";
import { User } from "../../data/dummy";
import { DiDotnet } from "react-icons/di";

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

function Story({ user_img, user_name, story_thumb }) {
  return (
    <Div
      className={[
        "relative",
        "w-30 rounded-md overflow-hidden  shadow-md ",
        "shrink-0",
      ]}
    >
      <Div
        className={[
          "absolute bottom-0",
          "size-full p-2",
          "bg-gradient-to-b from-transparent to-black ",
          "flex flex-col justify-between",
        ]}
      >
        <Image
          className={["rounded-full size-10 border-2"]}
          src={user_img}
          alt=""
        />
        <Span className={["font-semibold text-white"]}>{user_name}</Span>
      </Div>

      <Image src={story_thumb} alt="" />
    </Div>
  );
}

export function Post() {
  return (
    <Div
      className={["max-w-full px-2 my-4 flex gap-2 border-b border-gray-600"]}
    >
      <Div className={[""]}>
        <Image
          className={["size-12 object-cover rounded-full"]}
          src={User.image}
          alt=""
        />
      </Div>
      <Div className={["w-full"]}>
        <Div className={["flex justify-between"]}>
          <Div className={["flex items-center"]}>
            <Span className={["font-semibold"]}>{User.name}</Span>
            <Span className={["font-thin text-sm"]}>{User.username}</Span>
            <BsDot />
            <Span className={["font-thin text-sm"]}>{"2 jul"}</Span>
          </Div>
          <BsThreeDots />
        </Div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam enim ad
          repellat modi atque soluta minima voluptate eius, impedit ducimus,
          molestiae pariatur placeat dolorum.
        </p>
        <Image className={["rounded-lg my-4"]} src={User.image} alt="" />
        <Div className={["flex justify-between my-4"]}>
          <Div className={["flex gap-2 items-center"]}>
            {/* Like  */}
            <Button
              className={["flex items-center gap-1", "hover:text-red-500"]}
            >
              <BsHeart />
              <Span>100</Span>
            </Button>

            <Button
              className={["flex items-center gap-1", "hover:text-blue-500"]}
            >
              <BsChatLeft />
              <Span>100</Span>
            </Button>
            <BsShare />
          </Div>
          <BsBookmark />
        </Div>
      </Div>
    </Div>
  );
}
