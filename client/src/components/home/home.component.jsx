import React, { useState } from "react";
import Header from "../header/header.component";
import "./home.styles.css";
import ReactDOM from "react-dom";
import Modal from "../modal/modal.component";
import { useTransition, animated } from "react-spring";
import UploadForm from "../upload-form/upload-form.component";

const modalRoot = document.querySelector("#modal-root");

const Home = ({ style }) => {
  const [openModal, setOpenModal] = useState(false);

  const AnimatedModal = animated(Modal);

  const transition = useTransition(openModal, {
    from: { transform: "scale(0)", opacity: 0 },
    enter: (openModal) => async (next, cancel) => {
      await next({ transform: "scale(1.1)", opacity: 1 });
      await next({ transform: "scale(1)", opacity: 1 });
    },
    leave: (openModal) => async (next, cancel) => {
      await next({ transform: "scale(1.1)", opacity: 0.8 });
      await next({ transform: "scale(1)", opacity: 0 });
    },
  });

  return (
    <main className="home-container" style={{ ...style }}>
      <Header setOpenModal={setOpenModal} />
      {openModal &&
        ReactDOM.createPortal(
          transition(
            (style, item) =>
              item && (
                <AnimatedModal setOpenModal={setOpenModal} style={style}>
                  <UploadForm />
                </AnimatedModal>
              )
          ),
          modalRoot
        )}
    </main>
  );
};

export default Home;
