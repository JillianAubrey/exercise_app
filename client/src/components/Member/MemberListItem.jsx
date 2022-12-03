import React, { Fragment } from "react";
import './styles.scss'

export default function MemberListItem(props) {
  const { name, id, onClick } = props
  return (
    <Fragment>
      <li onClick={onClick}>{name}</li>
    </Fragment>
  );
}