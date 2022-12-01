import React, { useState, Fragment } from "react";
import Exercise from "./Exercise";
import WorkoutItem from "./WorkoutItem";
import Member from './Member/'
import Toggle from "./buttons_toggles/Toggle";
import useWorkoutEdit from "../hooks/useWorkoutEdit";

export default function WorkoutShow(props) {
  const { exerciseList, user_id } = props;
  const { name, first_gif, ownerName, id: workout_id } = { ...exerciseList };
  const { error, setError } = useState(null);
  const [editMode, setEditMode] = useState(false);

  const workout_owner = exerciseList.owner.id;

  const { handleWorkoutEdit, handleReorder, saveEdited } = useWorkoutEdit(exerciseList.workout_exercises, name, workout_id)

  
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
      {editMode && (
        <Toggle
          leftLabel="Save"
          rightLabel="Cancel"
          leftClick={saveEdited}
        />
      )}
    </Fragment>
  );
}
