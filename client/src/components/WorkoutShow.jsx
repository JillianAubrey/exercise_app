import React, { Fragment } from "react";
import WorkoutItem from "./WorkoutItem";
import Member from "./Member/";
import Statistics from "./Statistics";
import ExerciseListShow from "./ExerciseListShow";


export default function WorkoutShow(props) {
  const { workout, user_id, onPlay, onEdit, onRemove, onExit, setByOthers, byOthers } = props;
  const exerciseList = workout.workout_exercises
  
  const { name, first_gif, id: workout_id, owner, category_counts } = workout;
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
        categoryCounts={category_counts}
        onRemove={onRemove}
      />
      {workout_owner === user_id && <Statistics workoutId={workout_id}/>}
      <Member userId={user_id} owner={owner.name} workoutId={workout_id} />
      <ExerciseListShow exerciseList={exerciseList} />
    </Fragment>
  );
}
