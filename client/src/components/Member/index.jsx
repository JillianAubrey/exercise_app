import React, { Fragment, useState } from "react";
import getMembers from "../../helpers/getMembers.js";
import MembersList from './MemberList'
import MemberSearch from './MemberSearch'
import './styles.scss'

export default function Member(props) {
  const [memberList, setMemberList] = useState(null)
  const [memberSearch, setMemberSearch] = useState(false)
  const { owner, workoutId, userId } = props

  const toggleMembers = function() {
    if (memberList) {
      setMemberList(null);
      setMemberSearch(false)
    } else {
      getMembers(workoutId, setMemberList);
    }
  }

  const toggleSearch = function() {
    if (memberSearch) {
      setMemberSearch(false)
    } else {
      setMemberSearch(true)
    }
  }

  return (
    <Fragment>
      <article className="member__card" >
        <div className="member__card-header" onClick={toggleMembers}>
          <h1>Workout Members</h1>
        </div>
        {memberList && !memberSearch && <MembersList owner={owner} workoutId={workoutId} userId={userId} memberList={memberList} />}
          {memberList &&
            <Fragment>
              <div className="member__card-divider"></div>
              <div className="member__card-note">
                <h3 onClick={toggleSearch}>Share with a friend!</h3 >
              </div>
            </Fragment>
          }
        {memberList && memberSearch && <MemberSearch workoutId={workoutId} />}
      </article>
    </Fragment>
  );
}