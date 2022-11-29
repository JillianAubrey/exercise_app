import React, { useState, Fragment } from "react";
import useApplicationData from "../hooks/useApplicationData";
import WorkoutItem from './WorkoutItem'

export default function WorkoutList(props) {
  const { workoutList } = useApplicationData();

  const workout = workoutList.map((workout) => {
    return (
      <WorkoutItem
        key={workout.id}
        name={workout.name}
        gif_url={workout.first_gif}
        owner={workout.owner.name}
      />
    )
  })
  return (
    <Fragment>
      This is the Workoutlist component
      <ul>{workout}</ul>
    </Fragment>
  );
}