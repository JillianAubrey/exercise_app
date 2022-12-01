import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.scss'

export default function MemberListItem(props) {
  const { name, id } = props
  return (
    <Fragment>
      <li>{name}</li>
    </Fragment>
  );
}