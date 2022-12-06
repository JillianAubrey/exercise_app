import React, { Fragment, useState, useEffect } from "react";
import getMembers from "../../helpers/api_requests/getMembers.js";
import MembersList from './MemberList'
import MemberSearch from './MemberSearch'
import './styles.scss'
import { useSpring, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'

export default function Member(props) {
  const [memberList, setMemberList] = useState(null);
  const [memberSearch, setMemberSearch] = useState(false);
  const { owner, workoutId, userId } = props;
  const [ref, bounds] = useMeasure({ debounce: 0 });
  const [style, animate] = useSpring(({ height: "0px"}), [])
   
  useEffect(() => {
    animate({
      height: (memberList ? bounds.height + 50 : 0) + "px",
      opacity: (memberList ? '1': '0'),
      duration: 300,
    });
  }, [animated, memberList, bounds.height]);
  
  //toggleMembers opens and closes the Member component
  const toggleMembers = async function() {
    if (memberList) {
      setMemberList(null);
      setMemberSearch(false);
    } else {
      const newMembers = await getMembers(workoutId);
      setMemberList((prev) => newMembers);
    }
  }

  //toggleSearch opens and closes the memberSearch component
  const toggleSearch = async function() {
    if (memberSearch) {
      const newMembers = await getMembers(workoutId)
      setMemberList(newMembers);
      setMemberSearch(false);
    } else {
      setMemberList(null);
      setMemberSearch(true);
    }
  }

  return (
    <Fragment>
      <article className="member__card" >
        <div className="member__card-header clickable" onClick={toggleMembers}>
          <h2>Members</h2>
        </div>
        <animated.div className="animediv" style={style}>
        {memberList && <MembersList owner={owner} workoutId={workoutId} userId={userId} memberList={memberList} ref={ref} />}
          {memberList &&
            <Fragment>
              <div className="member_item-divider"></div>
              <div className="member__card-note clickable">
                <h3 onClick={toggleSearch}>Share with a friend!</h3 >
              </div>
            </Fragment>
          }
        </animated.div>
        <animated.div style={style.opacity}>
        {!memberList && memberSearch && <MemberSearch workoutId={workoutId} toggleSearch={toggleSearch} memberSearch={memberSearch} />}
        </animated.div>
      </article>
    </Fragment>
  );
};
