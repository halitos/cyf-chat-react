import React from "react";

const MesssageInput = () => {
  return (
    <div>
      <h2>Send a message</h2>
      <form
        className="d-flex-column text-center bg-info text-white p-2 mt-3"
        action="/messages"
        method="post"
      >
        <p>
          Name: <input type="text" name="from" placeholder="Your Name" /> <br />
          Message:{" "}
          <input type="text" name="text" placeholder="The message..." />
          <br />
        </p>
        <button type="submit">Send</button>
      </form>
      <a href="/messages">See all messages</a>
    </div>
  );
};

export default MesssageInput;
