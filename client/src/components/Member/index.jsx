import React, { Fragment, useState } from "react";
import MembersList from './MemberList'
import './styles.scss'

export default function Member(props) {
  const [listShow, setListShow] = useState(false)
  const { user, exerciseList } = props

  const toggleState = function(stateFunc) {
    stateFunc((prev) => !prev)
  }

  return (
    <Fragment>
      <article className="member__card" onClick={() => toggleState(setListShow)}>
        <div className="member__card-header">
          <h1> See Workout Members </h1>
        </div>
        { listShow && <MembersList />}
      </article>
    </Fragment>
  );
}