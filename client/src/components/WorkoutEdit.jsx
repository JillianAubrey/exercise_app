import React, { useState, Fragment } from "react";
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
    const workout_exercises = [...editedExercises]
    workout_exercises.pop()

    saveEdited(
      workout_exercises,
      (res) => onSave(workout_exercises),
      (err) => setErrors(err)
    )
  };

  return (
    <Fragment>
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
        userId={owner.id}
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
