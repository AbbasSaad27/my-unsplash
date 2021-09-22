import React from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { useTransition, animated } from "react-spring";

import ImgBoxContainer from "../img-box-container/img-box-container.component";
import Header from "../header/header.component";
import "./home.styles.css";
import Modal from "../modal/modal.component";
import UploadForm from "../upload-form/upload-form.component";
import DeleteForm from "../delete-form/delete-form.component";

const modalRoot = document.querySelector("#modal-root");

const Home = ({ openModal, formType }) => {
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
    <main className="home-container">
      <Header />
      {openModal &&
        ReactDOM.createPortal(
          transition((style, item) =>
            item ? (
              <Modal style={style}>
                {formType === "upload" ? <UploadForm /> : <DeleteForm />}
              </Modal>
            ) : null
          ),
          modalRoot
        )}
      <ImgBoxContainer />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    openModal: state.modal.open,
    formType: state.modal.type,
  };
};

export default connect(mapStateToProps)(animated(Home));
