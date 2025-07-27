import { useState } from "react";
import CreatePost from ".";
import { BiPlus } from "react-icons/bi";

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
        className="w-full px-4 py-1 rounded-2xl cursor-pointer bg-[#01b0e2] hover:bg-[#78d4ed] flex items-center gap-2 justify-center text-white font-semibold text-2xl max-sm:absolute max-sm:top-0 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:size-14 max-sm:rounded-full max-sm:shrink-0 max-sm:flex max-sm:-translate-y-1/2"
      >
        <span className="max-sm:hidden">Post</span>
        <BiPlus className="absolute" size={32} />
      </button>
      {showCreatePost && <CreatePost onClose={handleCloseCreatePost} />}
    </>
  );
}
