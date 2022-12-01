import React, { useState, Fragment } from "react";
import Exercise from './Exercise/Show/index'
import WorkoutItem from "./WorkoutItem";
import Member from './Member/'

export default function WorkoutShow(props) {
  const { exerciseList, user } = props;
  console.log("loading the WorkoutShow page")
  console.log("workout_exercises", exerciseList.workout_exercises)

  const workoutName = exerciseList.name
  const first_gif = exerciseList.first_gif
  const ownerName = exerciseList.owner.name

  const exercise = exerciseList.workout_exercises.map((item, index) => {
    console.log({item})
    const { duration, reps, sets, note } = item;
    const { id, name, category, gif_url } = item.exercise;
    
    return (
        <Exercise
          key={index}
          name={name}
          id={id}
          category={category}
          duration={duration}
          reps={reps}
          sets={sets}
          gif_url={gif_url}
          note={note}
          edit={true}
          onDelete={() => console.log("hi")}
        />
    )
  })
  return (
    <Fragment>
      <WorkoutItem name={workoutName} gif_url={first_gif} owner={ownerName} exerciseList={exerciseList} />
      <Member user={user} />
      {exercise}
    </Fragment>
  );
}