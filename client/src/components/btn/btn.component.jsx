import React from "react";
import "./btn.styles.css";

const Button = ({ children, classname, ...props }) => {
  return (
    <button {...props} className={`${classname} btn`}>
      {children}
    </button>
  );
};
export default Button;
