import React, { useState, Fragment, useEffect, useRef } from "react";
import Exercise from "./Exercise";
import WorkoutItem from "./WorkoutItem";
import useWorkoutEdit from "../hooks/useWorkoutEdit";
import Toggle from "./buttons_toggles/Toggle";
import errorDisplay from "../helpers/errorDisplay";
import ExerciseListEdit from "./ExerciseListEdit";

export default function WorkoutShow(props) {
  const { workout, user_id, onSave, onCancel } = props;
  const { name, first_gif, owner, workout_exercises: exerciseList } = workout;
  
  const [editedCopy, setEditedCopy] = useState([...exerciseList])
  const [errors, setErrors] = useState(null)

  const {  saveEdited,
    handleReorderData,
    handleWorkoutEdit,
    handleExerciseDelete } = useWorkoutEdit(exerciseList, workout.name, workout.id, setErrors)
  
  const workout_owner = owner.id;


  const handleSave = () => {
    saveEdited(editedCopy).then((saved) => {
      console.log("saved", saved)
      if (saved) {
        console.log("hello")
        setEditedCopy(saved);
        onSave();
      }
    });
  };

  const exercises = editedCopy? createExercises(editedCopy) : createExercises(exerciseList);

  return (
    <Fragment>
      <WorkoutItem
        name={name}
        gif_url={first_gif}
        ownerName={owner.name}
        ownWorkout={workout_owner === user_id}
      />
      <ExerciseListEdit exerciseList={editedCopy} />
      <Exercise
        empty={true}
        handleWorkoutEdit={handleWorkoutEdit}
        user_id={user_id}
        editMode={true}
        handleExerciseDelete={handleExerciseDelete}
      />
      <Toggle leftLabel="Save" rightLabel="Cancel" leftClick={handleSave}  />
    </Fragment>
  );
}
