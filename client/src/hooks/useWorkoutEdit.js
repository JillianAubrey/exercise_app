import React, { useState } from "react";
import postWorkout from "../helpers/api_requests/postWorkout";


const useWorkoutEdit = function(workout) {

  const exercisesCopy = workout.workout_exercises.map(
    (workout_exercise) => {
      const exerciseCopy = { ...workout_exercise };
      exerciseCopy.exercise_id = exerciseCopy.exercise.id;
      exerciseCopy.exercise = {...workout_exercise.exercise};
      return exerciseCopy;
    }
  );

  const [editedExercises, setEditedExercises] = useState(exercisesCopy);

  const handleWorkoutEdit = function (workout_exercise) {

    workout_exercise = {...workout_exercise}

    workout_exercise.id = workout_exercise.workout_exercise_id;
    delete workout_exercise.workout_exercise_id;

    setEditedExercises((prev) => {
      let newEdit = prev.map((el) => {
        if (el.id === workout_exercise.id) {
          workout_exercise.id = el.id;
          return workout_exercise;
        }
        return { ...el };
      });

      if (workout_exercise.id < 1) {
          workout_exercise.exercise = {gif_url: workout_exercise.gif_url, name: workout_exercise.name, category: workout_exercise.category, id: workout_exercise.exercise_id}
          newEdit.push(workout_exercise);
        }
        
      return newEdit;
    });
  };

  const handleReorderData = function (up, id) {
    setEditedExercises((prev) => {
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
      console.log("prev", prev, "current", newEdit)
      return newEdit;
    });
  };

  const handleExerciseDelete = function(id) {
    setEditedExercises((prev) => {
      const newEdit = prev.map((el) => ({ ...el }));
      const index = prev.findIndex((el) => el.id === id);
      newEdit.splice(index, 1)

      console.log("this is the new edit being sent" , newEdit)
      return newEdit

    })
  }

  const saveEdited = function(onSuccess, onError) {
    const newWorkout = {
      name: workout.name,
      owner: workout.owner.id,
      workout_exercises: editedExercises
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