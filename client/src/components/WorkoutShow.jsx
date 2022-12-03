import React, { useState, Fragment, useEffect, useRef } from "react";
import WorkoutItem from "./WorkoutItem";
import Member from "./Member/";
import ExerciseListShow from "./ExerciseListShow";

export default function WorkoutShow(props) {
  const { workout, user_id, onPlay, onEdit } = props;

  const { name, category_counts, first_gif, id: workout_id, owner, workout_exercises: exerciseList } = workout;
  const workout_owner = owner.id;

  console.table(category_counts)

  return (
    <Fragment>
      <WorkoutItem
        name={name}
        gif_url={first_gif}
        ownerName={owner.name}
        ownWorkout={workout_owner === user_id}
        onEdit={onEdit}
        onPlay={onPlay}
        categoryCounts={category_counts}
      />
      <Member userId={user_id} owner={owner.name} workoutId={workout_id} />
      <ExerciseListShow exerciseList={exerciseList} />
    </Fragment>
  );
}
