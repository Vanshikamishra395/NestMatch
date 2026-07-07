import { FaComments } from "react-icons/fa";

function ChatButton({ isOpen, setIsOpen }) {
  return (
    <button
      className="chat-button"
      onClick={() => setIsOpen(!isOpen)}
    >
      <FaComments />
    </button>
  );
}

export default ChatButton;