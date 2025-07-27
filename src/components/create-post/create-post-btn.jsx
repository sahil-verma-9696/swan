import { useState } from "react";
import CreatePost from ".";

export default function CreatePostBtn() {
  const [showCreatePost, setShowCreatePost] = useState(false);

  function handleShowCreatePost() {
    setShowCreatePost(true);
  }
  function handleCloseCreatePost() {
    setShowCreatePost(false);
  }
  return (
    <>
      <button
        onClick={handleShowCreatePost}
        className="w-full px-4 py-1 rounded-2xl cursor-pointer bg-[#01b0e2] hover:bg-[#78d4ed] flex items-center gap-2 justify-center text-white font-semibold text-2xl"
      >
        Post
      </button>
      {showCreatePost && <CreatePost onClose={handleCloseCreatePost} />}
    </>
  );
}
