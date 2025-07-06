import React from "react";
import { Section } from "../../../../components/ui/html-tags";

export default function ChatArea() {
  const dummyMessages = [
    { id: 1, text: "Hey! How are you?", sender: "other" },
    { id: 2, text: "I'm good, how about you?", sender: "me" },
    { id: 3, text: "Doing great, thanks for asking!", sender: "other" },
    { id: 4, text: "What are you working on?", sender: "other" },
    { id: 5, text: "Just building a chat UI using React.", sender: "me" },
    { id: 6, text: "That's awesome! 🚀", sender: "other" },
    { id: 8, text: "Sure, let me finish this real quick.", sender: "me" },
    { id: 9, text: "No problem. Ping me when done.", sender: "other" },
    { id: 9, text: "No problem. Ping me when done.", sender: "other" },
    { id: 9, text: "No problem. Ping me when done.", sender: "other" },
    { id: 9, text: "No problem. Ping me when done.", sender: "other" },
    { id: 7, text: "Wanna grab a coffee later?", sender: "other" },
    { id: 7, text: "Wanna grab a coffee later?", sender: "other" },
    { id: 9, text: "No problem. Ping me when done.", sender: "other" },
    { id: 7, text: "Wanna grab a coffee later?", sender: "other" },
    { id: 7, text: "Wanna grab a coffee later?", sender: "other" },
    { id: 7, text: "Wanna grab a coffee later?", sender: "other" },
    { id: 7, text: "Wanna grab a coffee later?", sender: "other" },
    { id: 9, text: "No problem. Ping me when done.", sender: "other" },
    { id: 9, text: "No problem. Ping me when done.", sender: "other" },
    { id: 9, text: "No problem. Ping me when done.", sender: "other" },
  ];

  return (
    <Section
      className={["flex-1", "p-4", "space-y-3", "rounded-xl", "shadow-inner"]}
    >
      {dummyMessages.map((msg) => (
        <MessageBubble key={msg.id} msg={msg} />
      ))}
    </Section>
  );
}

function MessageBubble({ msg }) {
  return (
    <div
      className={`max-w-[70%] w-fit px-4 py-2 rounded-xl text-white text-sm ${
        msg.sender === "me"
          ? "bg-blue-600 ml-auto text-right"
          : "bg-gray-700 mr-auto text-left"
      }`}
    >
      {msg.text}
    </div>
  );
}
