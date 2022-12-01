import React, { Fragment, useState } from "react";
import WorkoutList from './WorkoutList'
import WorkoutShow from './WorkoutShow'
import Exercise from "./Exercise";
import Toggle from "./buttons_toggles/Toggle";

export default function User(props) {
  const [byOthers, setByOthers] = useState(false)

  const { userName, onLogout, workoutList, setWorkoutShow, exerciseList, setExerciseList, getWorkoutExercises, user } = props
  console.log("Rendering the User component")
  console.log("exerciseList.exercises: ", exerciseList.workout_exercises)

  const handleLogout = (event) => {
    event.preventDefault();
    onLogout();
  }

  const handleWorkoutsFilter = function(exerciseList, byOthers = false) {
    if (exerciseList.workout_exercises) {
      console.log("setting exercise list to empty")
      setExerciseList({})
    }
    console.log()
    setByOthers(byOthers)
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
        user={user}
        byOthers={byOthers}
        />}
      {exerciseList.workout_exercises && <WorkoutShow exerciseList={exerciseList} user={user} />}
      {exerciseList.workout_exercises && <Exercise empty user_id={1} />}
      <Toggle
        exerciseList={exerciseList}
        leftLabel="My Workouts"
        leftClick={() => handleWorkoutsFilter(exerciseList)}
        rightLabel="Shared Workouts"
        rightClick={() => handleWorkoutsFilter(exerciseList, true)}
      />
    </Fragment>
  );
}