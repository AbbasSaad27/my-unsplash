import React from "react";
import Button from "../btn/btn.component";
import "./form-btns.styles.css";
import { connect } from "react-redux";
import { closeModal } from "../../redux/modal-reducer/modal-actions";

const FormBtns = ({ closeModal }) => {
  return (
    <div className="btns-container">
      <Button onClick={() => closeModal()} type="button" classname="btn-cancel">
        Cancel
      </Button>
      <Button type="submit" classname="btn-submit">
        Upload
      </Button>
    </div>
  );
};

const mapDispatchToProp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect("", mapDispatchToProp)(FormBtns);
