import React, { useState, Fragment } from "react";
import Exercise from "./Exercise";
import WorkoutItem from "./WorkoutItem";
import Toggle from "./buttons_toggles/Toggle";
import saveWorkout from "../helpers/saveWorkout";

export default function WorkoutShow(props) {
  const { exerciseList, user_id } = props;

  const {
    name,
    first_gif,
    ownerName,
    id: workout_id,
  } = { ...exerciseList };

  const workout_owner = exerciseList.owner.id;

  const exercisesCopy = exerciseList.workout_exercises.map((workout_exercise) => {
    const exerciseCopy = { ...workout_exercise };
    exerciseCopy.exercise_id = exerciseCopy.exercise.id
    delete exerciseCopy.exercise;
    return exerciseCopy;
  })

  const [ workoutEdit, setWorkoutEdit ] = useState(exercisesCopy)
  const [editMode, setEditMode] = useState(false);

  const handleWorkoutEdit = function(workout_exercise) {
    console.log(workout_exercise)
  }

  const exercises = exerciseList.workout_exercises.map((item, index) => {
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
        editMode={editMode}
        handleWorkoutEdit={handleWorkoutEdit}
        onDelete={() => console.log("hi")}
      />
    );
  });
  return (
    <Fragment>
      <WorkoutItem
        name={name}
        gif_url={first_gif}
        ownerName={ownerName}
        ownWorkout={workout_owner === user_id}
        onEdit={() => setEditMode(true)}
      />
      {exercises}
      {editMode && <Exercise empty={true} handleWorkoutEdit={handleWorkoutEdit} user_id={user_id} />}
      {editMode && <Toggle leftLabel="Save" rightLabel="Cancel" leftClick={() => saveWorkout({workout_exercises: workoutEdit, name}, workout_id)}/>}
    </Fragment>
  );
}
