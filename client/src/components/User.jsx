import React, { Fragment, useState, useEffect } from "react";
import WorkoutList from './WorkoutList'
import WorkoutShow from './WorkoutShow'
import WalkthroughContainer from "./Walkthrough";
import Exercise from "./Exercise";
import getUserWorkouts from "../helpers/api_requests/getUserWorkouts";

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

  return (
    <Fragment>
      {view !== WORKOUT_LIST && homeButton}
      {view === WORKOUT_LIST && 
        <WorkoutList 
          user={user} 
          userWorkouts={userWorkouts} 
          onShow={(workout) => {
            setSelectedWorkout(workout)
            setView(WORKOUT_SHOW)
          }}
          onPlay={(workout) => {
            setSelectedWorkout(workout)
            setView(WALKTHROUGH)
          }}
        />
      }
      {view === WORKOUT_SHOW && 
        <WorkoutShow user_id={user} workout={selectedWorkout} />
      }
      {view === WALKTHROUGH && 
        <WalkthroughContainer user_id={user} workout={selectedWorkout} />
      }
      {/* <Exercise empty user_id={1} /> */}
    </Fragment>
  );
}