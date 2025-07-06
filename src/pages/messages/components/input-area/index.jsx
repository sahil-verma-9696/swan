import React from "react";
import { FiSend } from "react-icons/fi";
import { Div, Textarea } from "../../../../components/ui/html-tags";

export default function InputArea() {
  return (
    <Div
      className={[
        "w-full  p-4",
        "border-t border-gray-600",
        "flex items-center gap-3",
      ]}
    >
      <Textarea
        type="text"
        placeholder="Type your message..."
        className={[
          "p-3 h-12 rounded-lg bg-gray-100 placeholder-gray-400 focus:outline-none",
          "dark:text-white dark:bg-[#0f0f0f] dark:placeholder-gray-400",
          "resize-none",
          "flex-1",
        ]}
      />
      <button className="p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
        <FiSend size={20} />
      </button>
    </Div>
  );
}
