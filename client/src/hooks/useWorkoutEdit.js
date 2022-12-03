import React, { useState } from "react";
import postWorkout from "../helpers/api_requests/postWorkout";


const useWorkoutEdit = function(workout) {

  const exercisesCopy = workout.workout_exercises.map(
    (workout_exercise) => {
      const exerciseCopy = { ...workout_exercise };
      exerciseCopy.exercise = {...workout_exercise.exercise};
      return exerciseCopy;
    }
  );
  exercisesCopy.push(null);

  const [editedExercises, setEditedExercises] = useState(exercisesCopy);

  const handleWorkoutEdit = function (workout_exercise, index) {
    setEditedExercises(prev => {
      const newEdit = [...prev]
      newEdit[index] = workout_exercise

      if (!prev[index]) newEdit.push(null)
      
      return newEdit
    })
  };

  const handleReorderData = function (up, index) {
    if (up && index === 0) return;
    if (!up && !editedExercises[index + 1]) return;

    setEditedExercises((prev) => {
      const newEdit = [...prev]
      console.log('index', index)

      if (up) {
        newEdit[index] = prev[index - 1]
        newEdit[index - 1] = prev[index]
      } else {
        newEdit[index] = prev[index + 1]
        newEdit[index + 1] = prev[index]
      }
      
      return newEdit
    });
  };

  const handleExerciseDelete = function(index) {
    setEditedExercises((prev) => {
      console.table(prev)
      const newEdit = [...prev]
      newEdit.splice(index, 1)
      console.table(newEdit)
      return newEdit
    })
    console.table(editedExercises)
  }

  const saveEdited = function(workout_exercises, onSuccess, onError) {
    const newWorkout = {
      name: workout.name,
      owner: workout.owner.id,
      workout_exercises
    }
    postWorkout(newWorkout, workout.id, onSuccess, onError)
  }

  return {
    editedExercises,
    saveEdited,
    handleReorderData,
    handleWorkoutEdit,
    handleExerciseDelete,
  }


}

export default useWorkoutEdit;