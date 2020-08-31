import React from "react";
// import chatbox from "./ChatBox"

const MesssageInput = ({ messages }) => {
  if (messages !== undefined) {
    return messages.map((msg, index) => {
      return (
        <div className="chatbox" key={index}>
          <h5>Message No: {index + 1}</h5>
          <p>
            {msg.from} : {msg.text}
          </p>
        </div>
      );
    });
  } else return null;
};

export default MesssageInput;
