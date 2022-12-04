import React, { Fragment } from "react";
import './styles.scss'

export default function MemberListItem(props) {
  const { id, name, onClick, owner } = props
  return (
    <Fragment>
      <li onClick={onClick}>
        {name}
        {owner && <em> Owner</em>}
      </li>
    </Fragment>
  );
}