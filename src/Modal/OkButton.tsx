import { FC, useState } from "react";

const OkButton: FC = () => {
  const [modal, setModal] = useState(false);
  const [link, setLink] = useState("");

  const modalHandler = () => {
    setModal(!modal);
    console.log(modal);
  };

  const renderLink = () => {};

  return (
    <div>
      {!modal && (
        <button className="close-modal" onClick={modalHandler}>
          Ok
        </button>
      )}
    </div>
  );
};

export default OkButton;
