import React from "react";
import { useState } from "react";

import "./Modal.css";

const Weeks: React.FC = (props) => {
  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitLabel, setSubmitLabel] = useState("Ok");

  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;

  const radioClickHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedRadioBtn(e.currentTarget.value);
  };

  let link = "";

  const activeWeek = () => {
    if (selectedRadioBtn === "radio1") {
      link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else {
      link = "https://www.youtube.com/watch?v=VbUuB1aN2DA";
    }
  };

  activeWeek();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        {!isSubmitted ? (
          <div className="radioLeft">
            <ul>
              <button
                disabled={selectedRadioBtn === ""}
                className="ok-btn"
                onClick={() => {
                  setSubmitLabel("Loading...");
                  setTimeout(() => {
                    setIsSubmitted(true);
                  }, 2000);
                }}
              >
                {submitLabel}
              </button>
              <label>
                <input
                  type="radio"
                  value="radio1"
                  id="radio1"
                  checked={isRadioSelected("radio1")}
                  onChange={radioClickHandler}
                />
                Week 1
              </label>
            </ul>
            <ul>
              <label>
                <input
                  type="radio"
                  value="radio2"
                  id="radio2"
                  checked={isRadioSelected("radio2")}
                  onChange={radioClickHandler}
                />
                Week 2
              </label>
            </ul>
          </div>
        ) : (
          <div>
            <input disabled className="input" id="copy-link" value={link} />
            <button className="copy" onClick={() => copyToClipboard()}>
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weeks;
