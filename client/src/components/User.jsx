import React, { Fragment } from "react";
import WorkoutList from './WorkoutList'
import WorkoutShow from './WorkoutShow'

export default function User(props) {
  const { workoutList, workoutShow, setWorkoutShow, exerciseList, getWorkoutExercises } = props
  console.log("Rendering the User component")
  console.log("exerciseList.length: ", exerciseList.length)
  return (
    <Fragment>
      {!exerciseList.workout_exercises &&
        <WorkoutList
          setWorkoutShow={setWorkoutShow}
          workoutList={workoutList}
          getWorkoutExercises={getWorkoutExercises}
        />}
      {exerciseList.workout_exercises && <WorkoutShow exerciseList={exerciseList} /> }
    </Fragment>
  );
}