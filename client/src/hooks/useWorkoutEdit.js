import React, { useState } from "react";
import saveWorkout from "../helpers/saveWorkout";


const useWorkoutEdit = function(exerciseData, name, workoutId, handleError) {

  const exercisesCopy = exerciseData.map(
    (workout_exercise) => {
      const exerciseCopy = { ...workout_exercise };
      exerciseCopy.exercise_id = exerciseCopy.exercise.id;
      delete exerciseCopy.exercise;
      return exerciseCopy;
    }
  );

  const [workoutEdit, setWorkoutEdit] = useState(exercisesCopy);


  const handleWorkoutEdit = function (workout_exercise) {

    workout_exercise = {...workout_exercise}

    delete workout_exercise.name;
    workout_exercise.id = workout_exercise.workout_exercise_id;
    delete workout_exercise.workout_exercise_id;

    setWorkoutEdit((prev) => {
      let newEdit = prev.map((el) => {
        if (el.id === workout_exercise.id) {
          workout_exercise.id = el.id;
          return workout_exercise;
        }
        return { ...el };
      });

      if (!workout_exercise.id) {
        newEdit.push(workout_exercise);
      }
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
      console.log("prev", prev, "current", newEdit)
      return newEdit;
    });
  };

  const handleExerciseDelete = function(id) {
    setWorkoutEdit((prev) => {
      const newEdit = prev.map((el) => ({ ...el }));
      const index = prev.findIndex((el) => el.id === id);
      newEdit.splice(index, 1)

      return newEdit

    })
  }

  const saveEdited = function() {
    return saveWorkout({ workout_exercises: workoutEdit, name }, workoutId, handleError).then((saved) => {
      if (saved) {
        return true
      }
      return false
    })
  }

  return {
    saveEdited,
    handleReorder,
    handleWorkoutEdit,
    handleExerciseDelete
  }


}

export default useWorkoutEdit;