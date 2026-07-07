import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import "./Chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "👋 Welcome to NestMatch!\n\nI'm your AI Rental Assistant.\n\nAsk me about rooms, budgets, localities and flatmates.",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  return (
    <>
      {!isOpen && (
        <ChatButton
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      {isOpen && (
        <ChatWindow
          messages={messages}
          setMessages={setMessages}
          setIsOpen={setIsOpen}
          isTyping={isTyping}
          setIsTyping={setIsTyping}
        />
      )}
    </>
  );
}

export default Chatbot;
