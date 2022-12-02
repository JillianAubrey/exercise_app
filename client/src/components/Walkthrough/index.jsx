import React, { useState, useEffect, Fragment } from "react";
import getWorkout from "../../helpers/api_requests/getWorkout";
import ExerciseList from "./ExerciseList";
import postWalkthrough from "../../helpers/postWalkthrough";
import './Walkthrough.scss';

export default function WalkthroughContainer(props) {
  const { user, workout } = props
  const [exerciseList, setExerciseList] = useState()

  useEffect(() => {
    getWorkout(
      workout.id,
      (response) => setExerciseList(response.data.workout_exercises)
    )
  }, [workout])

  const onComplete = () => postWalkthrough(user, workout.id)

  return (
    <main className="walkthrough--container">
      <h1>{workout.name}</h1>
      {exerciseList && <ExerciseList exerciseList={exerciseList} onComplete={onComplete} />}
    </main>
  )
}