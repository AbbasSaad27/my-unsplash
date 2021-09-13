import React from "react";
import "./form-input.styles.css";

const FormInput = ({ children, ...props }) => {
  return (
    <div className="form-input">
      <input {...props} />
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
