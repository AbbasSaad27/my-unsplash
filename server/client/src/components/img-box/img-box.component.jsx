import React from "react";
import Button from "../btn/btn.component";
import ImgInfo from "../img-info/img-info.component";
import "./img-box.styles.css";

const ImgBox = ({ label, link, id }) => {
  return (
    <div className="imgBox">
      <img src={link} alt={label} srcset="" className="img" />
      <ImgInfo label={label} id={id} />
    </div>
  );
};

export default ImgBox;
