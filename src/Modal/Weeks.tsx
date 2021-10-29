import React, { FC } from "react";

import OkButton from "./OkButton";
import "./Modal.css";

const Weeks: FC = () => {
  const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("");

  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;

  const radioClickHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedRadioBtn(e.currentTarget.value);
  };

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <div className="radioLeft">
          <OkButton />
          <ul>
            <label>
              <input
                type="radio"
                value="radio1"
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
                checked={isRadioSelected("radio2")}
                onChange={radioClickHandler}
              />
              Week 2
            </label>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weeks;
