import React from "react";
import Header from "../header/header.component";
import "./home.styles.css";
import ReactDOM from "react-dom";
import Modal from "../modal/modal.component";
import { useTransition, animated } from "react-spring";
import UploadForm from "../upload-form/upload-form.component";
import { connect } from "react-redux";

const modalRoot = document.querySelector("#modal-root");

const Home = ({ style, openModal }) => {
  const transition = useTransition(openModal, {
    from: { transform: "scale(0)", opacity: 0 },
    enter: (openModal) => async (next, cancel) => {
      await next({ transform: "scale(1.1)", opacity: 1 });
      await next({ transform: "scale(1)", opacity: 1 });
    },
    leave: (openModal) => async (next, cancel) => {
      await next({ transform: "scale(1.1)", opacity: 0.8 });
      await next({ transform: "scale(0)", opacity: 0 });
    },
  });

  return (
    <main className="home-container" style={{ ...style }}>
      <Header />
      {openModal &&
        ReactDOM.createPortal(
          transition((style, item) =>
            item ? (
              <Modal style={style}>
                <UploadForm />
              </Modal>
            ) : null
          ),
          modalRoot
        )}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    openModal: state.modal,
  };
};

export default connect(mapStateToProps)(animated(Home));
