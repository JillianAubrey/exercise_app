import React from "react";
import classnames from "classnames";
import './SmallButton.scss'

export default function SmallButton(props) {
  const { onClick, children, type } = props;

  //display of button changes depending on the type attribute passed in. typically the same text as the button label but lowercase
  const buttonClasses = classnames("small_button", {
    "small_button--edit": type === "edit",
    "small_button--destroy": type === "delete" || type === "cancel",
    "small_button--save": type === "save" || type === "add",
  });

  return (
    <button onClick={onClick} class={buttonClasses}>
      {children}
    </button>
  );
}
