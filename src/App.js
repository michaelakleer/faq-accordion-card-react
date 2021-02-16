import React from "react";
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
            <button className="question">
              How many team members can I invite?
              <img src={Down} alt="Down arrow" className="arrowDown" />
            </button>
            <button className="question">
              What is the maximum file upload size?
              <img src={Down} alt="Down arrow" className="arrowDown" />
            </button>
            <button className="question">
              How do I reset my password?
              <img src={Down} alt="Down arrow" className="arrowDown" />
            </button>
            <button className="question">
              Can I cancel my subscription?
              <img src={Down} alt="Down arrow" className="arrowDown" />
            </button>
            <button className="question">
              Do you provide additional support?
              <img src={Down} alt="Down arrow" className="arrowDown" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
