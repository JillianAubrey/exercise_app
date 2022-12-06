import React, { Fragment, useMemo } from "react";
import WorkoutItem from './WorkoutItem'
import filterWorkoutList from "../helpers/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WorkoutList(props) {
  const { user, userWorkouts, onShow, onPlay, onRemove, onAdd, byOthers} = props;
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
        onRemove={() => onRemove(workout)}
        clickable={true}
      />
    )
  })
  return (
    <Fragment>
      <ul>{workouts}</ul>
      {!byOthers && /* button for creating workout, only visible on "my workouts" */
        <article className="workout__card workout__card--empty clickable" onClick={onAdd}>
          <FontAwesomeIcon className="icon" icon="circle-plus"/>
        </article>
      }
    </Fragment>
  );
}