import React, { useState, useEffect, Fragment } from "react";
import getDetailedWorkout from "../../helpers/api_requests/getDetailedWorkout";
import ExerciseList from "./ExerciseList";
import postWalkthrough from "../../helpers/api_requests/postWalkthrough";
import './Walkthrough.scss';

export default function WalkthroughContainer(props) {
  const { user, workout } = props
  const [exerciseList, setExerciseList] = useState()

  useEffect(() => {
    getDetailedWorkout(
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