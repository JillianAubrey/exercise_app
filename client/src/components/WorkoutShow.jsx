import React, { useState, Fragment, useEffect, useRef } from "react";
import WorkoutItem from "./WorkoutItem";
import Member from "./Member/";
import ExerciseListShow from "./ExerciseListShow";

export default function WorkoutShow(props) {
  const { workout, user_id, onPlay, onEdit } = props;

  const { name, first_gif, id: workout_id, owner, workout_exercises: exerciseList } = workout;
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
      />
      <Member userId={user_id} owner={owner.name} workoutId={workout_id} />
      <ExerciseListShow exerciseList={exerciseList} />
    </Fragment>
  );
}
