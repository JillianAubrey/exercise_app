import React, { Fragment, useState } from "react";
import WorkoutItem from './WorkoutItem'
import filterWorkoutList from "../helpers/selectors";

export default function WorkoutList(props) {
  const { workoutList, getWorkoutExercises, exerciseList, user, byOthers } = props;

  const workout = filterWorkoutList(workoutList, user, byOthers).map((workout) => {
    return (
      <WorkoutItem
        key={workout.id}
        name={workout.name}
        gif_url={workout.first_gif}
        owner={workout.owner.name}
        exerciseList={exerciseList}
        onClick={() => {
          console.log("calling getWorkoutExercises")
          getWorkoutExercises(workout.id)
        }
        }
      />
    )
  })
  return (
    <Fragment>
      <ul>{workout}</ul>
    </Fragment>
  );
}