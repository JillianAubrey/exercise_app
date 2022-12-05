import React, { useRef, useMemo, Fragment } from "react";
import ExerciseList from "./ExerciseList";
import postWalkthrough from "../../helpers/api_requests/postWalkthrough";
import './Walkthrough.scss';

export default function WalkthroughContainer(props) {
  const { user_id, workout, onFinish } = props
  const exerciseList = workout.workout_exercises

  const onComplete = () => {
    const tts = window.speechSynthesis
    tts.cancel();
    tts.speak(new SpeechSynthesisUtterance(`${workout.name} workout completed!`));
    postWalkthrough(user_id, workout.id)
    console.log('here!')
    onFinish();
  }

  return (
    <main className="walkthrough--container">
      <h1>{workout.name}</h1>
      <div className="divider"></div>
      {exerciseList && <ExerciseList exerciseList={exerciseList} onComplete={onComplete} onCancel={onFinish} />}
    </main>
  )
}