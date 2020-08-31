import React from "react";
import "./App.css";
import ChatBox from "./Components/ChatBox";
import MesssageInput from "./Components/MesssageInput";

function App() {
  return (
    <div className="App">
      <h1> Chit-Chat </h1>
      <ChatBox />
      <MesssageInput />
    </div>
  );
}

export default App;
