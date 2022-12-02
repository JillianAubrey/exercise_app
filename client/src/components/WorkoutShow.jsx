import React, { useState, Fragment } from "react";
import Exercise from "./Exercise";
import WorkoutItem from "./WorkoutItem";
import Member from "./Member/";
import Toggle from "./buttons_toggles/Toggle";
import useWorkoutEdit from "../hooks/useWorkoutEdit";
import errorDisplay from "../helpers/errorDisplay";

export default function WorkoutShow(props) {
  const { exerciseList, user_id } = props;
  const { name, first_gif, ownerName, id: workout_id } = { ...exerciseList };
  const [errors, setErrors] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedCopy, setEditedCopy] = useState(null);
  const workout_owner = exerciseList.owner.id;
  const { handleWorkoutEdit, handleReorder, saveEdited, handleExerciseDelete } =
    useWorkoutEdit(exerciseList.workout_exercises, name, workout_id, setErrors);

  const errorElements = errorDisplay(errors);

  const handleSave = () => {
    saveEdited(exerciseList.workout_exercises).then((saved) => {
      if (saved) {
        setEditedCopy(saved);
        setEditMode(false);
      }
    })
  }


  const createExercises = (exerciseData) => {
    const exercises =  exerciseData && exerciseData.map((item, index) => {
      const { duration, reps, sets, note, id: workout_exercise_id } = {...item};
      const { id: exercise_id, name, category, gif_url } = item.exercise;

      return (
        <Exercise
          key={index}
          name={name}
          workout_exercise_id={workout_exercise_id || 0}
          exercise_id={exercise_id}
          category={category}
          duration={duration}
          reps={reps}
          sets={sets}
          gif_url={gif_url}
          note={note}
          editMode={editMode}
          handleWorkoutEdit={handleWorkoutEdit}
          handleReorder={handleReorder}
          handleExerciseDelete={() => {
            handleExerciseDelete(workout_exercise_id || 0);
          }}
        />
      );
    }) 

    return exercises;
  }

  const exercises = editedCopy ? createExercises(editedCopy) : createExercises(exerciseList.workout_exercises)
    

  return (
    <Fragment>
      <WorkoutItem
        name={name}
        gif_url={first_gif}
        ownerName={ownerName}
        ownWorkout={workout_owner === user_id}
        onEdit={() => setEditMode(true)}
      />
      <Member userId={user_id} />
      {exercises}
      {editMode && (
        <Exercise
          empty={true}
          handleWorkoutEdit={handleWorkoutEdit}
          user_id={user_id}
        />
      )}
      {errorElements && <div> {errorElements} </div>}
      {editMode && (
        <Toggle leftLabel="Save" rightLabel="Cancel" leftClick={handleSave} />
      )}
    </Fragment>
  );
}
