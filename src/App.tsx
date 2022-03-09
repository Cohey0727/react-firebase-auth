import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SignUp, SignIn, UserInfo } from "./pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignUp />
        <SignIn />
        <UserInfo />
      </header>
    </div>
  );
}

export default App;
