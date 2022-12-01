import React, { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useList from "../../hooks/useList";
import getWorkout from "../../helpers/getWorkout";
import postWalkthrough from "../../helpers/postWalkthrough";

import Timer from "./Timer";
import CardLeft from "../Exercise/CardLeft";
import './Walkthrough.scss';
import SmallButton from "../buttons_toggles/SmallButton";

export default function Walkthrough(props) {
  const { user, workoutId } = props
  const [exerciseList, setExerciseList] = useState([])
  const [
    exercise, 
    previousExercise, 
    nextExercise
  ] = useList(
    exerciseList, 
    0, 
    () => postWalkthrough(user, workoutId)
  )

  useEffect(() => {
    getWorkout(
      workoutId,
      (response) => setExerciseList(response.data.workout_exercises)
    )
  }, [workoutId])

  if (exercise) {
    const { reps, sets, duration, note, exercise:{ name, category, gif_url }} = exercise

    return (
      <main className="walkthrough">
        <SmallButton type="previous" onClick={previousExercise}></SmallButton>
        <CardLeft name={name} category={category} gif_url={gif_url}/>
        {duration && <Timer duration={duration} onComplete={nextExercise}/>}
        <SmallButton type="next" onClick={nextExercise}></SmallButton>
      </main>
    )
  }

}