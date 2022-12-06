import React, { Fragment } from "react";
import SmallButton from "../buttons_toggles/SmallButton";
import './styles.scss'

export default function MemberListItem(props) {
  const { id, name, onClick, owner, icon } = props
  return (
    <Fragment>
      <li>
        {name}
        {owner && <em>   Owner</em>}
        {icon && <SmallButton onClick={onClick} type={icon}></SmallButton>}
      </li>
    </Fragment>
  );
};
