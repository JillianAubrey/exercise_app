import React, { useState, Fragment } from "react";
import Exercise from './Exercise/Show/index'

export default function WorkoutShow(props) {
  const { exerciseList } = props;
  console.log("loading the WorkoutShow page")
  console.log("workout_exercises", exerciseList.workout_exercises )
  const exercise = exerciseList.workout_exercises.map((item) => {
    const { id, name, category, gif_url } = item;
    const { duration, reps, sets, note } = item.exercise;
    
    return (
        <Exercise
          key={id}
          name={name}
          id={id}
          category={category}
          duration={duration}
          reps={reps}
          sets={sets}
          gif_url={gif_url}
          note={note}
        // onEdit={}
        // onDelete={}
        />
    )
  })
  return (
    <Fragment>
      This is the WorkoutShow component
      <ul>{exercise}</ul>
    </Fragment>
  );
}