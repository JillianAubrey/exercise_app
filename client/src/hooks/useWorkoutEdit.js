import { useState } from "react";
import putWorkout from "../helpers/api_requests/putWorkout";
import postWorkout from "../helpers/api_requests/postWorkout";

export default function useWorkoutEdit(workout) {

  // a copy of the wokrout_exercises is created so that it can be manipulated without affecting the original
  const exercisesCopy = workout.workout_exercises.map(
    (workout_exercise) => {
      const exerciseCopy = { ...workout_exercise };
      exerciseCopy.exercise = {...workout_exercise.exercise};
      return exerciseCopy;
    }
  );

  // null is added to the end to serve as the add button
  exercisesCopy.push(null);

  const [editedExercises, setEditedExercises] = useState(exercisesCopy);

  // handles edit to a single exercises on a workout
  const handleWorkoutEdit = function (workout_exercise, index) {
    setEditedExercises(prev => {
      const newEdit = [...prev]
      newEdit[index] = workout_exercise

      // If the edit was on the null item at the end, adds a new null item for the add button
      if (!prev[index]) newEdit.push(null)
      
      return newEdit
    })
  };

  // handles change of exercise sequence
  const handleReorderData = function (up, index) {
    if (up && index === 0) return;
    if (!up && !editedExercises[index + 1]) return;

    setEditedExercises((prev) => {
      const newEdit = [...prev];

      if (up) {
        newEdit[index] = prev[index - 1];
        newEdit[index - 1] = prev[index];
      } else {
        newEdit[index] = prev[index + 1];
        newEdit[index + 1] = prev[index];
      }
      
      return newEdit;
    });
  };

  // handles an exercise being deleted
  const handleExerciseDelete = function(index) {
    setEditedExercises((prev) => {
      const newEdit = [...prev]
      newEdit.splice(index, 1)
      return newEdit
    })
  }

  // saves the final workout to the api server
  const saveEdited = function(workout_exercises, onSuccess, onError) {
    const newWorkout = {
      name: workout.name,
      owner: workout.owner.id,
      workout_exercises
    };

    // if workout id does not exist, posts as a new workout
    if (!workout.id) {
      postWorkout(newWorkout, onSuccess, onError)
      return
    };
    
    putWorkout(newWorkout, workout.id, onSuccess, onError);
  };

  return {
    editedExercises,
    saveEdited,
    handleReorderData,
    handleWorkoutEdit,
    handleExerciseDelete,
  };
};