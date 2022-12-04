import React, { useState, useEffect, Fragment } from "react";
import ExerciseList from "./ExerciseList";
import postWalkthrough from "../../helpers/api_requests/postWalkthrough";
import './Walkthrough.scss';

export default function WalkthroughContainer(props) {
  const { user_id, workout, onFinish } = props
  const exerciseList = workout.workout_exercises

  const onComplete = () => {
    postWalkthrough(user_id, workout.id)
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