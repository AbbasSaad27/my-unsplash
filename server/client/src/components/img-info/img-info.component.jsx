import React from "react";
import Button from "../btn/btn.component";
import "./img-info.styles.css";

const ImgInfo = ({ label, id }) => {
  return (
    <div className="img-info">
      <Button type="button" classname="btn-delete">
        Delete
      </Button>
      <p className="img-name">{label}</p>
    </div>
  );
};

export default ImgInfo;
