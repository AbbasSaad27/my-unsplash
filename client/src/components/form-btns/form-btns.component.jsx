import React from "react";
import Button from "../btn/btn.component";
import "./form-btns.styles.css";

const FormBtns = (props) => {
  return (
    <div className="btns-container">
      <Button type="button" classname="btn-cancel">
        Cancel
      </Button>
      <Button type="submit" classname="btn-submit">
        Upload
      </Button>
    </div>
  );
};
export default FormBtns;
