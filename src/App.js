import React from "react";
import "./App.css";
import ChatDisplay from "./Components/ChatDisplay";
import MesssageInput from "./Components/MesssageInput";

function App() {
  return (
    <div className="App">
      <h1> Chit-Chat </h1>
      <ChatDisplay />
      <MesssageInput />
    </div>
  );
}

export default App;
