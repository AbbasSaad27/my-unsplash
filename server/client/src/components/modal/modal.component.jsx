import React, { useEffect } from "react";
import "./modal.styles.css";
import { connect } from "react-redux";
import { closeModal } from "../../redux/modal-reducer/modal-actions";
import { animated } from "react-spring";

const Modal = ({ children, style, closeModal }) => {
  const handleKeyDown = (e) => {
    console.log(e);
    if (e.key === "Escape") closeModal();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="modal-container">
      <div className="modal-box" style={{ ...style }}>
        {children}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    openModal: state.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(animated(Modal));
