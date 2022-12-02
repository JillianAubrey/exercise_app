import React, { useState, Fragment, useEffect, useRef } from "react";
import Exercise from "./Exercise";
import WorkoutItem from "./WorkoutItem";
import Member from "./Member/";
import Toggle from "./buttons_toggles/Toggle";
import postWorkout from "../helpers/api_requests/postWorkout";
import getDetailedWorkout from "../helpers/api_requests/getDetailedWorkout";
import useWorkoutEdit from "../hooks/useWorkoutEdit";
import errorDisplay from "../helpers/errorDisplay";

export default function WorkoutShow(props) {
  const { workout, user_id, onPlay } = props;
  const [editMode, setEditMode] = useState(false);
  const [exerciseList, setExerciseList] = useState([])
  const [editedCopy, setEditedCopy] = useState(null)
  const [errors, setErrors] = useState(null)


  
  useEffect(() => {
    getDetailedWorkout(
      workout.id,
      (res) => setExerciseList([...res.data.workout_exercises])
    )
  }, [workout])

  const {  saveEdited,
    handleReorderData,
    handleWorkoutEdit,
    handleExerciseDelete } = useWorkoutEdit(exerciseList, workout.name, workout.id, setErrors)
  
  const { name, first_gif, id: workout_id, owner } = workout;
  const workout_owner = owner.id;
  


  const handleEditMode = () => {
    setEditMode(prev => !prev);
  };


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
            editMode={editMode}
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
        onEdit={handleEditMode}
        onPlay={onPlay}
      />
      <Member userId={user_id} owner={owner.name} workoutId={workout_id} />
      {exercises}


     
      {editMode && (
        <Fragment>
        <Exercise
          empty={true}
          handleWorkoutEdit={handleWorkoutEdit}
          user_id={user_id}
          editMode={editMode}
          handleExerciseDelete={handleExerciseDelete}
        />
         </Fragment>
      )}
  
      {editMode && (
        
        <Toggle leftLabel="Save" rightLabel="Cancel" leftClick={handleSave}  />
        
      )}
       

    </Fragment>
  );
}
