import React, { useState } from "react";
import { Data } from "./Data";
import Down from "./images/icon-arrow-down.svg";

export default function Accordion() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="Accordion">
      {Data.map((item, index) => {
        return (
          <>
            <div onClick={() => toggle(index)} key={index}>
              <button>
                {clicked === index ? (
                  <h2>
                    <strong>{item.question}</strong>
                  </h2>
                ) : (
                  <h2>{item.question}</h2>
                )}
                <span>
                  {clicked === index ? (
                    <img src={Down} alt="Arrow down" />
                  ) : (
                    <img src={Down} alt="Arrow down" />
                  )}
                </span>
              </button>
            </div>
            {clicked === index ? (
              <div>
                <p>{item.answer}</p>
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
}
