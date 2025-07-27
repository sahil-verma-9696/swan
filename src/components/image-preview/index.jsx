import React from "react";
import { Image } from "../ui/html-tags";
import { RxCross1 } from "react-icons/rx";

export default function ImagePreview({ src,removePreview }) {
  return (
    <div className="dark:bg-[#131416] w-50 rounded-md relative">
      <button onClick={removePreview} className="absolute top-2 right-2 cursor-pointer text-black bg-white p-2 rounded-full shadow-md">
        <RxCross1 />
      </button>
      <Image className={["w-full"]} src={src} />
    </div>
  );
}
