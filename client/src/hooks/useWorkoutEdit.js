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
  const [newExercises, saveNewExercises ] = useState([])


  const handleWorkoutEdit = function (workout_exercise) {

    workout_exercise = {...workout_exercise}

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
          workout_exercise.exercise = {gif_url: workout_exercise.gif_url, name: workout_exercise.name, category: workout_exercise.category, id: workout_exercise.exercise_id}
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

      console.log(newEdit)
      return newEdit

    })
  }

  const saveEdited = function(originalExercises) {
    return saveWorkout({ workout_exercises: workoutEdit, name }, workoutId, handleError).then((saved) => {
      if (saved) {
        const newExercises = saved.workout_exercises;
        
        let indexes = [];
        let addedExercises = newExercises.filter((el) => !el.id)

        let editCopy = originalExercises.map((oldExercise, index) => {

         
          const newExercise = newExercises.find(
            (el) => el.exercise_id === oldExercise.exercise.id
          );

          if (!newExercise) {
            indexes.push(index)
          }

          if (newExercise) {
            oldExercise.reps = newExercise.reps;
            oldExercise.sets = newExercise.sets;
            oldExercise.note = newExercise.note;
            oldExercise.duration = newExercise.duration;
          }

          return oldExercise;
        });

        indexes = indexes.reverse();
        indexes.forEach((index) => {
          editCopy.splice(index, 1)
        })

        console.log('this is the edit copy', editCopy)
        console.log('added addedExercises', addedExercises)
        addedExercises && addedExercises.forEach((el) => editCopy.push(el))
        
        return editCopy
      }
      return false
    })
  }

    


  return {
    saveEdited,
    handleReorder,
    handleWorkoutEdit,
    handleExerciseDelete,
  }


}

export default useWorkoutEdit;