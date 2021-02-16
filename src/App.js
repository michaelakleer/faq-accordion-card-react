import React from "react";
import Accordion from "./Accordion";
import WomanComputer from "./images/illustration-woman-online-desktop.svg";
import Box from "./images/illustration-box-desktop.svg";
import Down from "./images/icon-arrow-down.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="picture">
          <img
            src={WomanComputer}
            alt="Woman next to a computer"
            className="womanComputer"
          />
        </div>
        <div className="object">
          <img src={Box} alt="Box with @ symbol" className="box" />
        </div>
        <div className="faq">
          <h1>FAQ</h1>
          <div className="faqQuestions">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
}
