import React from "react";
import "./ChatDisplay.css";
import ChatBox from "./ChatBox";

const ChatDisplay = () => {
  return (
    <div className="container">
      <h3>You are seeing the latest messages</h3>
      <ChatBox />
    </div>
  );
};

export default ChatDisplay;
