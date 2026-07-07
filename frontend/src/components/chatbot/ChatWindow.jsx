import { useState } from "react";
import { X, Send } from "lucide-react";

function ChatWindow({
  messages,
  setMessages,
  setIsOpen,
  isTyping,
  setIsTyping,
}) {
  const [inputValue, setInputValue] = useState("");

  const sendMessage = (text) => {
    if (!text.trim()) return;

    // Add user's message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text,
      },
    ]);

    setInputValue("");

    // Show typing animation
    setIsTyping(true);

    // Temporary demo response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "This is a demo response. Gemini AI will answer here soon 😊",
        },
      ]);

      setIsTyping(false);
    }, 1500);
  };

  const handleSend = () => {
    sendMessage(inputValue);
  };

  return (
    <div className="chat-window">

      {/* Header */}
      <div className="chat-header">

        <div className="header-left">

          <div className="bot-avatar">
            🤖
          </div>

          <div>
            <h3>NestMatch AI</h3>

            <div className="online-status">
              <span className="status-dot"></span>
              Online
            </div>

          </div>

        </div>

        <button
          className="close-btn"
          onClick={() => setIsOpen(false)}
        >
          <X size={22} />
        </button>

      </div>

      {/* Chat Body */}
      <div className="chat-body">

        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender}`}
          >
            {message.text}
          </div>
        ))}

        {/* Typing Animation */}
        {isTyping && (
          <div className="typing">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        {/* Suggestion Chips */}
        {messages.length === 1 && (
          <div className="suggestions">

            <button
              onClick={() => sendMessage("Find rooms under ₹15000")}
            >
              🏠 Under ₹15k
            </button>

            <button
              onClick={() => sendMessage("Show rooms near metro")}
            >
              📍 Near Metro
            </button>

            <button
              onClick={() => sendMessage("Find flatmates")}
            >
              👥 Flatmates
            </button>

            <button
              onClick={() => sendMessage("Suggest rooms in Noida")}
            >
              🏙️ Noida
            </button>

          </div>
        )}

      </div>

      {/* Footer */}
      <div className="chat-footer">

        <input
          type="text"
          placeholder="Ask about rentals..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <button onClick={handleSend}>
          <Send size={18} />
        </button>

      </div>

    </div>
  );
}

export default ChatWindow;