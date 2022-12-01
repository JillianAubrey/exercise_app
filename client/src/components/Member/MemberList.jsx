import React, { Fragment, useState } from "react";
import MemberSearch from './MemberSearch.jsx'
import MemberListItem from "./MemberListItem.jsx";
import './styles.scss'

export default function MemberList(props) {
  const { user, exerciseList, show } = props
  
  const memberList = [
    { id: 1, name: 'john' },
    {id: 2, name: 'jane' }
  ]

  const members = memberList.map((member) => {
    return (
      <MemberListItem
        key={member.id}
        name={member.name}
      />
    )
  })

  return (
    <Fragment>
      <div className="member__card-divider"></div>
      <div className="member__card-note">
        {members}
      </div>
      <div className="member__card-note">
        Search button, component here!
      </div>
    </Fragment>
  );
}