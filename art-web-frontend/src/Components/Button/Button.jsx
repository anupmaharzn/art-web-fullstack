import React from "react";
import "./button.scss";
const Button = (props) => {
  return (
    <button
      disabled={props.qty <= 0 ? true : false}
      type={props.type}
      className={props.theme}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
