import React, { useState, Fragment, useEffect, useRef } from "react";
import WorkoutItem from "./WorkoutItem";
<<<<<<< HEAD
import Member from "./Member/";
import ExerciseListShow from "./ExerciseListShow";

export default function WorkoutShow(props) {
  const { workout, user_id, onPlay, onEdit } = props;
=======
import Member from './Member/'
import Toggle from "./buttons_toggles/Toggle";
import postWorkout from "../helpers/api_requests/postWorkout";
import Statistics from "./Statistics";

export default function WorkoutShow(props) {
  const { workout, user_id, onPlay, onRemove } = props;
  const [editMode, setEditMode] = useState(false);
  const exerciseList = workout.workout_exercises
  
  const { name, first_gif, id: workout_id, owner } = workout;
  const workout_owner = owner.id;
  
  console.log("loading the WorkoutShow page")
  
  const exercisesCopy = exerciseList.map(
    (workout_exercise) => {
      const exerciseCopy = { ...workout_exercise };
      exerciseCopy.exercise_id = exerciseCopy.exercise.id;
      delete exerciseCopy.exercise;
      return exerciseCopy;
  });
    
  const [workoutEdit, setWorkoutEdit] = useState(exercisesCopy);

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
>>>>>>> bf4ba49b39a4068ddaece708ec72dc53fa79ebf5

  const { name, category_counts, first_gif, id: workout_id, owner, workout_exercises: exerciseList } = workout;
  const workout_owner = owner.id;

  return (
    <Fragment>
      <WorkoutItem
        name={name}
        gif_url={first_gif}
        ownerName={owner.name}
        ownWorkout={workout_owner === user_id}
        onEdit={onEdit}
        onPlay={onPlay}
<<<<<<< HEAD
        categoryCounts={category_counts}
=======
        onRemove={onRemove}
>>>>>>> bf4ba49b39a4068ddaece708ec72dc53fa79ebf5
      />
      {workout_owner === user_id && <Statistics workoutId={workout_id}/>}
      <Member userId={user_id} owner={owner.name} workoutId={workout_id} />
      <ExerciseListShow exerciseList={exerciseList} />
    </Fragment>
  );
}
