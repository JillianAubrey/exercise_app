import React, { useState, useEffect, Fragment } from "react";
import getWorkout from "../../helpers/getWorkout";
import WalkthoughShow from "./WalkthroughShow";
import postWalkthrough from "../../helpers/postWalkthrough";
import './Walkthrough.scss';

export default function WalkthroughContainer(props) {
  const { user, workoutId } = props
  const [exerciseList, setExerciseList] = useState()

  useEffect(() => {
    getWorkout(
      workoutId,
      (response) => setExerciseList(response.data.workout_exercises)
    )
  }, [workoutId])

  const onComplete = () => postWalkthrough(user, workoutId)

  return (
    <main className="walkthrough walkthrough--container">
      {exerciseList && <WalkthoughShow exerciseList={exerciseList} onComplete={onComplete} />}
    </main>
  )
}