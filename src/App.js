import React from "react";
import WomanComputer from "./images/illustration-woman-online-desktop.svg";
import Box from "./images/illustration-box-desktop.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="containerCard">
          <div className="picture">
            <img
              src={WomanComputer}
              alt="Woman next to a computer"
              className="womanComputer"
            />
            <img src={Box} alt="Box with @ symbol" className="box" />
          </div>
          <div className="faq">
            <h1>FAQ</h1>
            <h2>
              <a href="/">How many team members can I invite?</a>
            </h2>
            <h2>
              <a href="/">What is the maximum file upload size?</a>
            </h2>
            <h2>
              <a href="/">How do I reset my password?</a>
            </h2>
            <h2>
              <a href="/">Can I cancel my subscription?</a>
            </h2>
            <h2>
              <a href="/">Do you provide additional support?</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
