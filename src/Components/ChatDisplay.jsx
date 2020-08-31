import React from "react";
import "./ChatDisplay.css";
import ChatBox from "./ChatBox";

const ChatDisplay = () => {
  return (
    <div className="container">
      <h3>This will be container for chat boxes</h3>
      <ChatBox />
    </div>
  );
};

export default ChatDisplay;
