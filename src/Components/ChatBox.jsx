import React, { useState, useEffect } from "react";
import "./ChatBox.css";

const ChatBox = () => {
  const [message, setMessage] = useState();

  useEffect(() => {
    fetch("https://halit-chat-server.herokuapp.com/messages")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data);
      });
  }, []);

  if (message !== undefined) {
    return message.map((msg, index) => {
      return (
        <div className="chatbox" key={index}>
          <h5>Message No: {index + 1}</h5>
          <p>
            {msg.from} : {msg.text}
          </p>
        </div>
      );
    });
  } else {
    return "messages loading";
  }
};

export default ChatBox;
