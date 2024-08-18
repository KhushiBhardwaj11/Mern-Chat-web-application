import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Chatpage from "./pages/Chatpage";
import ChatProvider from "./context/ChatProvider";

function App() {
  return (
    
      <ChatProvider>
        <div className="App">
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/chats" Component={Chatpage} />
          </Routes>
        </div>
      </ChatProvider>
  
  );
}

export default App;
