import React, { useRef, useMemo, Fragment } from "react";
import ExerciseList from "./ExerciseList";
import postWalkthrough from "../../helpers/api_requests/postWalkthrough";
import './Walkthrough.scss';

export default function WalkthroughContainer(props) {
  const { user_id, workout, onFinish } = props
  const exerciseList = workout.workout_exercises
  const firstRender = useRef(true)
  const msg = useMemo(() => new SpeechSynthesisUtterance(), [])

  const onComplete = () => {
    postWalkthrough(user_id, workout.id)
    if (firstRender.current) {
      msg.text = `${workout.name} workout completed!`
      window.speechSynthesis.speak(msg)
      firstRender.current = false;
    }
    onFinish();
  }

  return (
    <main className="walkthrough--container">
      <h1>{workout.name}</h1>
      <div className="divider"></div>
      {exerciseList && <ExerciseList exerciseList={exerciseList} onComplete={onComplete} onFinish={onFinish} />}
    </main>
  )
}