import React, { Fragment } from "react";

export default function WorkoutItem(props) {
  return (
    <Fragment>
      This is the WorkoutlistItem component
      <li
        className={"workout-item"}
        data-testid="workout-item"
        onClick={props.onClick}
      >
        <h2>{props.name}</h2>
        <h3>{props.first_gif}</h3>
        <h3>{props.owner}</h3>
      </li>
    </Fragment>
  );
}