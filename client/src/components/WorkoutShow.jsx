import React, { useState, Fragment } from "react";
import Exercise from './Exercise/Show/index'
import WorkoutItem from "./WorkoutItem";

export default function WorkoutShow(props) {
  const { exerciseList, user_id } = props;
  console.log("loading the WorkoutShow page")
  console.log("workout_exercises", exerciseList.workout_exercises)

  const workoutName = exerciseList.name
  const first_gif = exerciseList.first_gif
  const ownerName = exerciseList.owner.name

  const [ editMode, setEditMode ] = useState(false)

  const exercises = exerciseList.workout_exercises.map((item, index) => {
    console.log({item})
    const { duration, reps, sets, note, id: workout_exercise_id } = item;
    const { id: exercise_id, name, category, gif_url } = item.exercise;
    
    return (
        <Exercise
          key={index}
          name={name}
          workout_exercise_id={workout_exercise_id}
          exercise_id={exercise_id}
          category={category}
          duration={duration}
          reps={reps}
          sets={sets}
          gif_url={gif_url}
          note={note}
          edit={editMode}
          onDelete={() => console.log("hi")}
        />
    )
  })
  return (
    <Fragment>
      <WorkoutItem name={workoutName} gif_url={first_gif} owner={ownerName} exerciseList={exerciseList} />
      {exercises}
      {editMode && <Exercise empty user_id={user_id}/>}
    </Fragment>
  );
}