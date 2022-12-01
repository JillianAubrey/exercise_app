import React, { useState, useEffect, Fragment } from "react";
import ExerciseListItem from "./ExerciseListItem";
import SmallButton from "../buttons_toggles/SmallButton";
import RestItem from "./RestItem";
import useList from "../../hooks/useList";

export default function ExerciseList(props) {
  const { exerciseList, onComplete } = props

  const [
    exercise, 
    previousExercise, 
    nextExercise,
    isFirstExercise,
    isLastExercise
  ] = useList(
    exerciseList,
    0
  )

  return (
    <div className="walkthrough">
      {!isFirstExercise() && <SmallButton type="previous" onClick={previousExercise}/>}
      {exercise.exercise.id === 1
        ? <RestItem exercise={exercise} onNext={nextExercise} />
        : <ExerciseListItem exercise={exercise} onNext={nextExercise} />
      }
      {isLastExercise() 
       ? <SmallButton type="next" onClick={onComplete}>Finish</SmallButton>
       : <SmallButton type="next" onClick={nextExercise} />
      }
    </div>
  )
}