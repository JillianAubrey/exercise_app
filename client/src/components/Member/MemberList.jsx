import React, { Fragment, useEffect, useState } from "react";
import MemberSearch from './MemberSearch.jsx'
import MemberListItem from "./MemberListItem.jsx";
import getMembers from "../../helpers/api_requests/getMembers.js";
import './styles.scss'
export default function MemberList(props) {
  const { owner, memberList } = props

  const formatMembers = function(memberList) {
    let members = []
    if (memberList.length > 0) {
      const ownerlessMembers = memberList.filter((member) => member.name !== owner)
      return ownerlessMembers.map((member) => {
        return (
          <MemberListItem
              key={member.id}
              name={member.name}
            />
        )
      })
    }
    return []
  }

  const ownerMember = memberList.filter((member) => member.name === owner)[0]

  return (
    <Fragment>
      <div className="member__card-divider"></div>
      <div className="member__card-note">
        <ul>
          {ownerMember && <MemberListItem name={ownerMember.name} owner={true} />}
          {formatMembers(memberList)}
        </ul>
      </div>
    </Fragment>
  );
}