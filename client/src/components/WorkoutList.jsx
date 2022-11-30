import React, { Fragment } from "react";
import WorkoutItem from './WorkoutItem'

export default function WorkoutList(props) {
  const { workoutList, getWorkoutExercises, exerciseList } = props;
  

  const workout = workoutList.map((workout) => {
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