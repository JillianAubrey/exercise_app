import React, { Fragment, useState } from "react";
import getMembers from "../../helpers/api_requests/getMembers.js";
import MembersList from './MemberList'
import MemberSearch from './MemberSearch'
import './styles.scss'

export default function Member(props) {
  const [memberList, setMemberList] = useState(null)
  const [memberSearch, setMemberSearch] = useState(false)
  const { owner, workoutId, userId } = props

  const toggleMembers = function() {
    if (memberList) {
      console.log('setting memberList')
      setMemberList(null);
      setMemberSearch(false)
    } else {
      getMembers(workoutId, setMemberList);
    }
  }

  const toggleSearch = function() {
    if (memberSearch) {
      console.log("getting and setting memberList")
      getMembers(workoutId, setMemberList)
      setMemberSearch(false)
    } else {
      setMemberList(null)
      setMemberSearch(true)
    }
  }

  return (
    <Fragment>
      <article className="member__card" >
        <div className="member__card-header" onClick={toggleMembers}>
          <h2>Members</h2>
        </div>
        {memberList && <MembersList owner={owner} workoutId={workoutId} userId={userId} memberList={memberList} />}
          {memberList &&
            <Fragment>
              <div className="member_item-divider"></div>
              <div className="member__card-note">
                <h3 onClick={toggleSearch}>Share with a friend!</h3 >
              </div>
            </Fragment>
          }
        {!memberList && memberSearch && <MemberSearch workoutId={workoutId} toggleSearch={toggleSearch} memberSearch={memberSearch} />}
      </article>
    </Fragment>
  );
}