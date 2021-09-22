import React, { useState } from "react";

import ImgInfo from "../img-info/img-info.component";
import "./img-box.styles.css";

const ImgBox = ({ img }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { image_link, title } = img;

  const handleMouseEnter = () => {
    setShowInfo(true);
  };
  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div
      className="imgBox"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="img-container">
        <img src={image_link} alt={title} className="img" />
        {showInfo ? <ImgInfo label={title} img={img} /> : null}
      </span>
    </div>
  );
};

export default ImgBox;
