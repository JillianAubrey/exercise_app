import React, { useState, useEffect, Fragment } from "react";
import ExerciseShow from "./ExerciseShow";
import SmallButton from "../buttons_toggles/SmallButton";
import useList from "../../hooks/useList";

export default function WalkthoughShow(props) {
  const { exerciseList, onComplete } = props

  const [
    exercise, 
    previousExercise, 
    nextExercise
  ] = useList(
    exerciseList, 
    0, 
    onComplete
  )

  return (
    <div>
      <SmallButton type="previous" onClick={previousExercise}/>
      <ExerciseShow exercise={exercise} onNext={nextExercise} />
      <SmallButton type="next" onClick={nextExercise} />
    </div>
  )
}