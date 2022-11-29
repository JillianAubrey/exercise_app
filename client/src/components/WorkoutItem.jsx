import React, { useState, Fragment } from "react";
import useApplicationData from "../hooks/useApplicationData";

export default function WorkoutItem(props) {
  return (
    <Fragment>
      This is the WorkoutlistItem component
      <li
        className={"workout-item"}
        data-testid="workout-item"
      >
        <h2>{props.name}</h2>
        <h3>{props.first_gif}</h3>
        <h3>{props.owner}</h3>
      </li>
    </Fragment>
  );
}