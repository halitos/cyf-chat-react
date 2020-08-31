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
          <h5>Enter your message here please</h5>
          <p> from: {msg.from}</p>
          <p> message: {msg.text}</p>
          <button>submit</button>
          <button>delete</button>
        </div>
      );
    });
  } else {
    return "messages loading";
  }
};

export default ChatBox;
