import React from "react";
import "./form-input.styles.css";

const FormInput = ({ children, className, ...props }) => {
  return (
    <div className="form-input">
      <input
        {...props}
        className={`${className} ${
          props.value.length > 0 ? "input-invalid" : ""
        }`}
      />
      {children ? (
        <label
          className={`input-label ${props.value.length > 0 ? "shrink" : ""}`}
          htmlFor={props.id}
        >
          {children}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
