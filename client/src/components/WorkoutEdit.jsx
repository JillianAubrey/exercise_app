import React, { useState, Fragment, useEffect, useRef } from "react";
import Exercise from "./Exercise";
import WorkoutItem from "./WorkoutItem";
import useWorkoutEdit from "../hooks/useWorkoutEdit";
import Toggle from "./buttons_toggles/Toggle";
import errorDisplay from "../helpers/errorDisplay";
import ExerciseListEdit from "./ExerciseListEdit";

export default function WorkoutEdit(props) {
  const { workout, user_id, onSave, onCancel } = props;
  const { name, first_gif, owner } = workout;
  
  const [errors, setErrors] = useState(null)

  const {
    editedExercises,
    saveEdited,
    handleReorderData,
    handleWorkoutEdit,
    handleExerciseDelete 
  } = useWorkoutEdit(workout)

  const handleSave = () => {
    saveEdited(
      (res) => {
        console.log(res)
        onSave(editedExercises)
      },
      (err) => setErrors(err)
    )
  };

  return (
    <Fragment>
      <h1>WORKOUT EDIT</h1>
      <WorkoutItem
        name={name}
        gif_url={first_gif}
        ownerName={owner.name}
        ownWorkout={owner.id === user_id}
      />
      <ExerciseListEdit 
        exerciseList={editedExercises}
        handleWorkoutEdit={handleWorkoutEdit}
        handleReorder={handleReorderData}
        handleExerciseDelete={handleExerciseDelete}
      />
      <Exercise
        empty={true}
        handleWorkoutEdit={handleWorkoutEdit}
        user_id={user_id}
        editMode={true}
        handleExerciseDelete={handleExerciseDelete}
      />
      <Toggle 
        leftLabel="Save" 
        rightLabel="Cancel" 
        leftClick={handleSave}
        rightClick={onCancel}
      />
    </Fragment>
  );
}
