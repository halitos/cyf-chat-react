import React, { useState, useEffect } from "react";
import "./ChatBox.css";
import MesssageInput from "./MesssageInput";

const ChatBox = () => {
  const [messages, setMessages] = useState();

  useEffect(() => {
    fetch("https://halit-chat-server.herokuapp.com/messages")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessages(data);
      });
  }, []);

  function handleNewMessage(e) {
    e.preventDefault(handleNewMessage);
    const sender = document.getElementById("input-from");
    const msg = document.getElementById("input-text");
    fetch("https://halit-chat-server.herokuapp.com/messages", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        from: sender.value,
        text: msg.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => setMessages(data));

    sender.value = "";
    msg.value = "";
  }

  return (
    <div className="msg-container">
      <div className="chat-form">
        <form>
          <div>
            <h4>Submit your message here </h4>
            <input
              className="input-from"
              id="input-from"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <textarea
              className="input-text"
              id="input-text"
              type="text"
              placeholder="Enter your message"
              rows="10"
              wrap="soft"
            />
          </div>
          <button
            className="send-button"
            type="submit"
            onClick={handleNewMessage}
          >
            Send
          </button>
        </form>
      </div>
      <div className="messages">
        <h4 className="sub-heading">See all messages</h4>
        <MesssageInput messages={messages} />
      </div>
    </div>
  );
};

export default ChatBox;
