import React, { useState, Fragment } from "react";
import Exercise from "./Exercise";
import WorkoutItem from "./WorkoutItem";
import Member from './Member/'
import Toggle from "./buttons_toggles/Toggle";
import saveWorkout from "../helpers/saveWorkout";

export default function WorkoutShow(props) {
  const { exerciseList, user_id } = props;
  console.log("loading the WorkoutShow page")
  console.log("workout_exercises", exerciseList.workout_exercises)

  const { name, first_gif, owner, id: workout_id } = { ...exerciseList };
  console.log('owner name', owner.name)
  const workout_owner = owner.id;


  const exercisesCopy = exerciseList.workout_exercises.map(
    (workout_exercise) => {
      const exerciseCopy = { ...workout_exercise };
      exerciseCopy.exercise_id = exerciseCopy.exercise.id;
      delete exerciseCopy.exercise;
      return exerciseCopy;
    }
  );

  const [workoutEdit, setWorkoutEdit] = useState(exercisesCopy);
  const [editMode, setEditMode] = useState(false);

  const handleWorkoutEdit = function (workout_exercise) {
    setWorkoutEdit((prev) => {
      delete workout_exercise.name;
      workout_exercise.id = workout_exercise.workout_exercise_id;
      delete workout_exercise.workout_exercise_id;

      let newEdit = prev.map((el) => {
        if (el.id === workout_exercise.id) {
          return workout_exercise;
        }
        return { ...el };
      });

      if (!workout_exercise.id) {
        newEdit.push(workout_exercise);
      }

      console.log("newEdit", newEdit);
      return newEdit;
    });
  };

  const handleReorder = function (up, id) {
    setWorkoutEdit((prev) => {
      const newEdit = prev.map((el) => ({ ...el }));
      const index = prev.findIndex((el) => el.id === id);

      if (up) {
        if (newEdit[index - 1]) {
          const current = newEdit[index];
          newEdit[index] = newEdit[index - 1];
          newEdit[index - 1] = current;
        }
      }

      if (!up) {
        if (newEdit[index + 1]) {
          const current = newEdit[index];
          newEdit[index] = newEdit[index + 1];
          newEdit[index + 1] = current;
        }
      }
      return newEdit;
    });
  };

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
        handleReorder={handleReorder}
        onDelete={() => console.log("hi")}
      />
    );
  });
  return (
    <Fragment>
      <WorkoutItem
        name={name}
        gif_url={first_gif}
        ownerName={owner.name}
        ownWorkout={workout_owner === user_id}
        onEdit={() => setEditMode(true)}
      />
      <Member userId={user_id} owner={owner.name} workoutId={workout_id} />
      {exercises}
      {editMode && (
        <Exercise
          empty={true}
          handleWorkoutEdit={handleWorkoutEdit}
          user_id={user_id}
        />
      )}
      {editMode && (
        <Toggle
          leftLabel="Save"
          rightLabel="Cancel"
          leftClick={() =>
            saveWorkout({ workout_exercises: workoutEdit, name }, workout_id)
          }
        />
      )}
    </Fragment>
  );
}
