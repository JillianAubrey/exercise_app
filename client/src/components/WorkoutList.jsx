import React, { Fragment, useState, useMemo } from "react";
import WorkoutItem from './WorkoutItem'
import filterWorkoutList from "../helpers/selectors";
import Toggle from "./buttons_toggles/Toggle";

export default function WorkoutList(props) {
  const { user, userWorkouts, onShow, onPlay } = props;
  const [byOthers, setByOthers] = useState(false)
  const workoutList = useMemo(
    () => filterWorkoutList( userWorkouts, user, byOthers),  
    [userWorkouts, byOthers, user]
  );

  const workouts = workoutList.map((workout) => {
    return (
      <WorkoutItem
        key={workout.id}
        name={workout.name}
        gif_url={workout.first_gif}
        owner={workout.owner.name}
        categoryCounts={workout.category_counts}
        onClick={() => onShow(workout)}
        onPlay={() => onPlay(workout)}
      />
    )
  })
  return (
    <Fragment>
      <ul>{workouts}</ul>
      <Toggle
        leftLabel="My Workouts"
        leftClick={() => setByOthers(false)}
        rightLabel="Shared Workouts"
        rightClick={() => setByOthers(true)}
      />
    </Fragment>
  );
}