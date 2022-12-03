import React, { Fragment, useState, useEffect } from "react";
import WorkoutList from './WorkoutList'
import WorkoutShow from './WorkoutShow'
import WalkthroughContainer from "./Walkthrough";
import getUserWorkouts from "../helpers/api_requests/getUserWorkouts";
import getDetailedWorkout from "../helpers/api_requests/getDetailedWorkout";
import deleteMember from "../helpers/api_requests/deleteMembers";

export default function User(props) {
  const WORKOUT_LIST = "WORKOUT_LIST"
  const WORKOUT_SHOW = "WORKOUT_SHOW"
  const WALKTHROUGH = "WALKTHROUGH"

  const [userWorkouts, setUserWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [view, setView] = useState('');

  const { user } = props
  console.log("Rendering the User component")

  const homeButton = (
    <button
      onClick={event => {
        event.preventDefault();
        setView(WORKOUT_LIST);
        setSelectedWorkout(null);
      }}
    >
      Home
    </button>
  )

  useEffect(() => {
    getUserWorkouts(
      user,
      (res) => {
        setUserWorkouts([...res.data])
        setView(WORKOUT_LIST)
      }
    )
  }, [user])

  const onSelect = (workoutId, view) => {
    getDetailedWorkout(
      workoutId,
      (res) => {
        setSelectedWorkout(res.data)
        setView(view)
      },
      (err) => console.error("Error fetching workout data", err)
    )
  }

  const onRemoveWorkout = (workoutId, userId) => {
    const deleteIndex = userWorkouts.findIndex((workout) => workout.id === workoutId)
    const newUserWorkouts = [...userWorkouts]
    newUserWorkouts.splice(deleteIndex, 1);
    deleteMember(workoutId, userId, setUserWorkouts(newUserWorkouts));
    setView(WORKOUT_LIST);
  }

  return (
    <Fragment>
      {view !== WORKOUT_LIST && homeButton}
      {view === WORKOUT_LIST && 
        <WorkoutList 
          user={user} 
          userWorkouts={userWorkouts} 
          onShow={(workout) => onSelect(workout.id, WORKOUT_SHOW)}
          onPlay={(workout) => onSelect(workout.id, WALKTHROUGH)}
          onRemove={(workout) => onRemoveWorkout(workout.id, user)}
        />
      }
      {view === WORKOUT_SHOW && 
        <WorkoutShow
          user_id={user}
          workout={selectedWorkout}
          onPlay={() => setView(WALKTHROUGH)}
          onRemove={() => onRemoveWorkout(selectedWorkout.id, user)}
        />
      }
      {view === WALKTHROUGH && 
        <WalkthroughContainer user_id={user} workout={selectedWorkout} onFinish={() => setView(WORKOUT_LIST)}/>
      }
    </Fragment>
  );
}