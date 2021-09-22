import React from "react";
import { connect } from "react-redux";
import { addDeleteImg } from "../../redux/deleteImg-reducer/deleteImg-actions";
import { openModal, setForm } from "../../redux/modal-reducer/modal-actions";

import Button from "../btn/btn.component";
import "./img-info.styles.css";

const ImgInfo = ({ label, openModal, setForm, img }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setForm("delete");
    openModal();
    addDeleteImg(img);
  };

  return (
    <div className="img-info">
      <Button type="button" classname="btn-delete" onClick={handleClick}>
        Delete
      </Button>
      <p className="img-name">{label}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch(openModal()),
    setForm: (state) => dispatch(setForm(state)),
    addDelImg: (state) => dispatch(addDeleteImg(state)),
  };
};

export default connect("", mapDispatchToProps)(ImgInfo);
