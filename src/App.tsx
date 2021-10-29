import { FC, useState } from "react";
import "./App.css";

import Modal from "./Modal/Modal";

const App: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      {isOpen && <Modal />}
      <button className="share-btn" onClick={modalHandler}>
        Share
      </button>
    </div>
  );
};

export default App;
