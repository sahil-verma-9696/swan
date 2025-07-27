import React from "react";
import { Button, Div, Image, Input, Span, Textarea } from "../ui/html-tags";
import { RxCross2 } from "react-icons/rx";
import withClickOutside from "../../hoc/withClickOutside";
import useCreatePostLogic from "./useCreatePostLogic";
import ImagePreview from "../image-preview";

function CreatePost({ onClose: close }) {
  const { handlePostSubmit, handleFileChange, previews, removePreview } = useCreatePostLogic();
  return (
    <Div
      className={[
        "bg-white dark:bg-[#0f0f0f]",
        "rounded-xl shadow-xl w-full max-w-xl",
        "p-5 space-y-4 h-fit my-10",
      ]}
    >
      {/* Header */}
      <Div className={["flex items-center justify-between"]}>
        <Span
          className={["text-xl font-semibold text-gray-800 dark:text-white"]}
        >
          Draft
        </Span>
        <Button
          onClick={close}
          className={["text-gray-600 hover:text-red-500 transition"]}
        >
          <RxCross2 size={24} />
        </Button>
      </Div>

      {/* Textarea and Avatar */}
      <Div className={["flex gap-4"]}>
        <Image
          className={["size-14 rounded-full object-cover"]}
          src="https://images.unsplash.com/photo-1615322678402-04b477522be7?w=600&auto=format&fit=crop&q=60"
          alt="User"
        />
        <Textarea
          className={[
            "flex-1 min-h-[100px] resize-none",
            "text-lg bg-transparent",
            "text-gray-900 dark:text-white",
            "placeholder:text-gray-400 dark:placeholder:text-gray-500",
            "border-none outline-none",
          ]}
          placeholder="What's on your mind?"
        />
      </Div>

      {/* Media Previews */}
      {previews.length > 0 && (
        <div className="flex overflow-x-auto gap-2">
          {previews.map((preview, index) => (
            <div className="shrink-0" key={index}>
             
              {preview.type === "image" ? (
                <ImagePreview src={preview.url} removePreview={()=>removePreview(index)} />
              ) : (
                <video
                  src={preview.url}
                  controls
                  className="w-full max-h-80 rounded-lg border"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* File Upload and Post Button */}
      <Div
        className={[
          "flex flex-col sm:flex-row justify-between items-center gap-4",
        ]}
      >
        <form onSubmit={handlePostSubmit} encType="multipart/form-data">
          <Input
            id="file-upload"
            multiple
            onChange={handleFileChange}
            type="file"
            accept="image/*,video/*"
            className={[
              "file:mr-4 file:py-2 file:px-4",
              "file:rounded-full file:border-0",
              "file:text-sm file:font-semibold",
              "file:bg-blue-50 file:text-blue-700",
              "hover:file:bg-blue-100",
            ]}
          />
          <Button
            type="submit"
            className={[
              "bg-blue-600 hover:bg-blue-700",
              "text-white font-medium px-6 py-2 rounded-full",
              "transition-all",
            ]}
          >
            Post
          </Button>
        </form>
      </Div>
    </Div>
  );
}

export default withClickOutside(CreatePost);
