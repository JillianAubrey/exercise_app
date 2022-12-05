import React, { Fragment as div } from "react";
import classnames from "classnames";
import './Error.scss';

export default function Error(props) {
  return (
    <div className="error-message">
      {props.children}
    </div>
  )
}