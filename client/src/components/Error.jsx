import React, { Fragment } from "react";
import classnames from "classnames";
import './Error.scss';

export default function Error(props) {
  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}