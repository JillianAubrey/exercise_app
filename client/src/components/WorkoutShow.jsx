import React, { useState, Fragment, useEffect, useRef } from "react";
import Exercise from "./Exercise";
import WorkoutItem from "./WorkoutItem";
import Member from "./Member/";
import ExerciseList from "./ExerciseList";

export default function WorkoutShow(props) {
  const { workout, user_id, onPlay, onEdit } = props;

  const { name, first_gif, id: workout_id, owner, workout_exercises: exerciseList } = workout;
  const workout_owner = owner.id;

  const exercises = exerciseList.map((item, index) => {
    const {
      duration, reps, sets, note,
      exercise: {name, category, gif_url}
    } = item;

    return (
      <Exercise
        key={index}
        name={name}
        category={category}
        duration={duration}
        reps={reps}
        sets={sets}
        gif_url={gif_url}
        note={note}
        editMode={false}
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
        onEdit={onEdit}
        onPlay={onPlay}
      />
      <Member userId={user_id} owner={owner.name} workoutId={workout_id} />
      {exercises}
    </Fragment>
  );
}
