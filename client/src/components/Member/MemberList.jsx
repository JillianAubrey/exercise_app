import React, { Fragment, useEffect, useState } from "react";
import MemberSearch from './MemberSearch.jsx'
import MemberListItem from "./MemberListItem.jsx";
import getMembers from "../../helpers/getMembers.js";
import './styles.scss'
export default function MemberList(props) {
  const { owner, memberList } = props

  let members = []
  if (memberList.length > 0) {
    members = memberList.map((member) => {
      return (
          <MemberListItem
            key={member.id}
            name={member.name}
          />
      )
    })
  }

  return (
    <Fragment>
      <div className="member__card-divider"></div>
      <div className="member__card-note">
        Workout Owner
        <ul>
          <MemberListItem name={owner} />
        </ul>
        Workout Members
        <ul>
        {members}
      </ul>
      </div>
    </Fragment>
  );
}