import React, { useState, Fragment } from "react";
import WorkoutList from './WorkoutList'
import WorkoutShow from './WorkoutShow'

export default function User(props) {
  const {  } = props;

  const [mode, setMode] = useState("MINE");
  const [showWorkout, setShowWorkout] = useState(null)

  return (
    <Fragment>
      This is the User component
      {!showWorkout && <WorkoutList />}
      {showWorkout && <WorkoutShow id={showWorkout} />}
    </Fragment>
  );
}