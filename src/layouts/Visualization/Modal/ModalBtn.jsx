import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalResult from "./ModalResult";

export default function ModalBtn() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className="relative z-0 mx-auto mb-2 py-1 px-3 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transition"
      onClick={() => setShowModal(!showModal)}
    >
      Get the code
      {showModal &&
        createPortal(
          <ModalResult closeModal={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  );
}
