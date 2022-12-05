import React, { useState, Fragment } from "react";
import WorkoutItem from "./WorkoutItem";
import useWorkoutEdit from "../hooks/useWorkoutEdit";
import Toggle from "./buttons_toggles/Toggle";
import errorDisplay from "../helpers/errorDisplay";
import formatApiErrors from "../helpers/formatApiErrors";
import ExerciseListEdit from "./ExerciseListEdit";

export default function WorkoutEdit(props) {
  const { workout, user_id, onSave, onCancel } = props;
  const { name, first_gif, owner } = workout;
  
  const [error, setError] = useState(null)

  const {
    editedExercises,
    saveEdited,
    handleReorderData,
    handleWorkoutEdit,
    handleExerciseDelete 
  } = useWorkoutEdit(workout)

  const handleSave = () => {
    const workout_exercises = [...editedExercises]
    workout_exercises.pop()

    saveEdited(workout_exercises, onSave, setError)
  };

  let errorMessages = ''
  if (error) {
    errorMessages = errorDisplay(formatApiErrors(error.response.data));
  }

  return (
    <Fragment>
      <WorkoutItem
        name={name}
        ownerName={owner.name}
        ownWorkout={owner.id === user_id}
      />
      <ExerciseListEdit 
        exerciseList={editedExercises}
        handleWorkoutEdit={handleWorkoutEdit}
        handleReorder={handleReorderData}
        handleExerciseDelete={handleExerciseDelete}
        userId={owner.id}
      />
      {error && errorMessages}
      <Toggle 
        toggleType="footer"
        leftLabel="Save" 
        rightLabel="Cancel" 
        leftClick={handleSave}
        rightClick={onCancel}
      />
    </Fragment>
  );
}
