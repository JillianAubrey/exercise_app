import React, { useState, Fragment, useEffect, useRef } from "react";
import Exercise from "./Exercise";
import WorkoutItem from "./WorkoutItem";
import useWorkoutEdit from "../hooks/useWorkoutEdit";
import Toggle from "./buttons_toggles/Toggle";
import errorDisplay from "../helpers/errorDisplay";
import ExerciseList from "./ExerciseList";

export default function WorkoutShow(props) {
  const { workout, user_id } = props;
  const [editedCopy, setEditedCopy] = useState(null)
  const [errors, setErrors] = useState(null)
  const exerciseList = workout.workout_exercises

  const {  saveEdited,
    handleReorderData,
    handleWorkoutEdit,
    handleExerciseDelete } = useWorkoutEdit(exerciseList, workout.name, workout.id, setErrors)
  
  const { name, first_gif, owner } = workout;
  const workout_owner = owner.id;


  const handleSave = () => {
    saveEdited(editedCopy).then((saved) => {
      console.log("saved", saved)
      if (saved) {
        console.log("hello")
        setEditedCopy(saved);
        setEditMode(false);
      }
    });
  };

  const createExercises = (exerciseData) => {
    const exercises =
      exerciseData &&
      exerciseData.map((item, index) => {
        const {
          duration,
          reps,
          sets,
          note,
          id: workout_exercise_id,
        } = { ...item };
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
            editMode={true}
            handleWorkoutEdit={handleWorkoutEdit}
            handleReorder={handleReorderData}
            handleExerciseDelete={() => {
              handleExerciseDelete(workout_exercise_id);
            }}
          />
        );
      });

    return exercises;
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
      {exercises}
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
