import React from "react";
import "./loader.styles.css";
import { ReactComponent as LoaderIcon } from "../../icons/asterisk.svg";

const Loader = () => {
  return (
    <div className="loader-container">
      <LoaderIcon />
    </div>
  );
};

export default Loader;
