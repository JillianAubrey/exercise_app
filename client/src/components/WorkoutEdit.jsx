import React, { useState, Fragment } from "react";
import WorkoutItem from "./WorkoutItem";
import useWorkoutEdit from "../hooks/useWorkoutEdit";
import Toggle from "./buttons_toggles/Toggle";
import Error from "./Error";
import formatApiErrors from "../helpers/formatApiErrors";
import ExerciseListEdit from "./ExerciseListEdit";

export default function WorkoutEdit(props) {
  const { workout, user_id, onSave, onCancel } = props;
  const { name, owner } = workout;
  
  const [error, setError] = useState(null);

  const {
    editedExercises,
    saveEdited,
    handleReorderData,
    handleWorkoutEdit,
    handleExerciseDelete 
  } = useWorkoutEdit(workout);

  const handleSave = () => {
    const workout_exercises = [...editedExercises];

    // removes the last itme in workout_exercises as it's always null for the add button
    workout_exercises.pop();

    saveEdited(workout_exercises, onSave, setError)
  };

  const formatError = () => {
    if (typeof error === "string") {
      return <Error>{error}</Error>
    }

    return formatApiErrors(error.response.data, (err) => <Error>{err}</Error>)
  }

  const onEdit = (workout_exercise, index) => {
    setError(null);
    handleWorkoutEdit(workout_exercise, index);
  }

  return (
    <Fragment>
      <WorkoutItem
        name={name}
        ownerName={owner.name}
        ownWorkout={owner.id === user_id}
      />
      {error && formatError()}
      <ExerciseListEdit 
        exerciseList={editedExercises}
        handleWorkoutEdit={onEdit}
        handleReorder={handleReorderData}
        handleExerciseDelete={handleExerciseDelete}
        userId={owner.id}
      />
      <Toggle 
        toggleType="footer"
        leftLabel="Save" 
        rightLabel="Cancel" 
        leftClick={handleSave}
        rightClick={onCancel}
      />
    </Fragment>
  );
};
