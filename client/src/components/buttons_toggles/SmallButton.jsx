import React from "react";
import classnames from "classnames";
import './SmallButton.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SmallButton(props) {
  const { onClick, type } = props;

  //display of button changes depending on the type attribute passed in. typically the same text as the button label but lowercase
  const buttonClasses = classnames("small_button", {
    "small_button--edit": type === "edit",
    "small_button--destroy": type === "delete" || type === "cancel",
    "small_button--save": type === "save" || type === "add",
    "small_button--move": type === "moveup" || type === "movedown"
  });

  return (
    <button onClick={onClick} className={buttonClasses}>
      {type === 'edit' && <FontAwesomeIcon className="icon" icon="file-pen"/>}
      {type === 'delete' && <FontAwesomeIcon className="icon" icon="trash"/>}
      {type === 'cancel' && <FontAwesomeIcon className="icon" icon="xmark"/>}
      {type === 'save' && <FontAwesomeIcon className="icon" icon="floppy-disk"/>}
      {type === 'add' && <FontAwesomeIcon className="icon" icon="circle-plus"/>}
      {type === 'moveup' && <FontAwesomeIcon className="icon" icon="chevron-up"/>}
      {type === 'movedown' && <FontAwesomeIcon className="icon" icon="chevron-down"/>}
    </button>
  );
}
