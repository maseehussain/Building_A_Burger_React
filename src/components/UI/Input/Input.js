import React from "react";

import "./Input.css";

const input = props => {
  let inputElement = null;

  switch (props.inputType) {
    case "input":
      inputElement = (
        <input className="InputElement" {...props.elementConfig} />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea className="InputElement" {...props.elementConfig} />
      );
      break;
    default:
      inputElement = (
        <input className="InputElement" {...props.elementConfig} />
      );
  }

  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
