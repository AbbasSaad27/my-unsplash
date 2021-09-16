import React from "react";
import "./modal.styles.css";

const Modal = ({ children, style }) => {
  return (
    <div className="modal-container">
      <div className="modal-box" style={{ ...style }}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
