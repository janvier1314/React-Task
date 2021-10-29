import { FC, useState } from "react";
import "./Modal.css";

import Weeks from "./Weeks";

const Modal: FC = () => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button className="btn-modal" onClick={modalHandler}>
        Share
      </button>
      {modal === true ? <Weeks /> : ""}
    </div>
  );
};

export default Modal;
