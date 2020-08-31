import React from "react";

const MesssageInput = ({ messages }) => {
  if (messages !== undefined) {
    let sortedMessages = messages.reverse();
    return sortedMessages.map((msg, index) => {
      return (
        <div className="chatbox" key={index}>
          <h5>Message No: {sortedMessages.length - index}</h5>
          <p>
            {msg.from} : {msg.text}
          </p>
        </div>
      );
    });
  } else return null;
};

export default MesssageInput;
