import React, { Fragment, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";
import MemberListItem from "./MemberListItem.jsx";
import "./styles.scss";

//'forward ref' is used to pass a reference to the list height to the parent component
const MemberList = React.forwardRef((props, ref) => {
  const { owner, memberList } = props;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % memberList.length);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  //maps animation of list items entry to the list items, so they appear staggered 

  const [springs] = useSprings(
    memberList.length,

    (i) => ({
      opacity: "1",
      transform: "translateX(0em)",
      from: { opacity: "0", transform: "translateX(4em)" },
      delay: 100 + i * 150,
    }),

    [index]
  );

  const formatMembers = function (memberList) {
    if (memberList.length > 0) {
      const ownerlessMembers = memberList.filter(
        (member) => member.name !== owner
      );
      return ownerlessMembers.map((member) => {
        return <MemberListItem key={member.id} name={member.name} />;
      });
    }
    return [];
  };

  const ownerMember = memberList.filter((member) => member.name === owner)[0];

  return (
    <Fragment>
      <div className="member_item-divider"></div>
      <div className="member__card-note">
        <ul ref={ref}>
          {ownerMember && (
            <MemberListItem name={ownerMember.name} owner={true} />
          )}
          {springs.map(({ opacity, transform }, i) => (
            <animated.div
              key={i}
              style={{ opacity, transform, listStyleType: "none" }}
            >
              {formatMembers(memberList)[i]}
            </animated.div>
          ))}
        </ul>
      </div>
    </Fragment>
  );
});

export default MemberList;
