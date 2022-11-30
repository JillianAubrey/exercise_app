import React, { Fragment } from "react";
import WorkoutList from './WorkoutList'
import WorkoutShow from './WorkoutShow'

export default function User(props) {
  const { userName, onLogout, workoutList, workoutShow, setWorkoutShow, exerciseList, getWorkoutExercises } = props
  console.log("Rendering the User component")
  console.log("exerciseList.length: ", exerciseList.length)

  const handleLogout = (event) => {
    event.preventDefault();
    onLogout();
  }

  return (
    <Fragment>
      <button onClick={handleLogout}>Logout</button>
      <p>Logged in as {userName}</p>
      {!exerciseList.workout_exercises &&
        <WorkoutList
          setWorkoutShow={setWorkoutShow}
          workoutList={workoutList}
          getWorkoutExercises={getWorkoutExercises}
          exerciseList={exerciseList}
        />}
      {exerciseList.workout_exercises && <WorkoutShow exerciseList={exerciseList} /> }
    </Fragment>
  );
}