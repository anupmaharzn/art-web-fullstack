import React from "react";
import "./input.scss";
const Input = (props) => {
  return (
    <input
      className="inputfield"
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      {...props.register}
    />
  );
};

export default Input;
