import React, { Fragment, useState, useEffect } from "react";
import WorkoutList from './WorkoutList'
import WorkoutShow from './WorkoutShow'
import WorkoutEdit from "./WorkoutEdit";
import WorkoutAdd from "./WorkoutAdd";
import WalkthroughContainer from "./Walkthrough";
import getUserWorkouts from "../helpers/api_requests/getUserWorkouts";
import getDetailedWorkout from "../helpers/api_requests/getDetailedWorkout";
import deleteMember from "../helpers/api_requests/deleteMembers";

export default function User(props) {
  const WORKOUT_LIST = "WORKOUT_LIST"
  const WORKOUT_SHOW = "WORKOUT_SHOW"
  const WORKOUT_EDIT = "WORKOUT_EDIT"
  const WORKOUT_ADD = "WORKOUT_ADD"
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

  const onSave = (response)=> {
    setSelectedWorkout(response.data)
    setView(WORKOUT_SHOW)
    
    getUserWorkouts(
      user,
      (res) => setUserWorkouts([...res.data])
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
          onAdd={() => {
            setSelectedWorkout({owner: user, workout_exercises: []})
            setView(WORKOUT_ADD)
          }}
        />
      }
      {view === WORKOUT_SHOW && 
        <WorkoutShow 
          user_id={user}
          workout={selectedWorkout}
          onPlay={() => setView(WALKTHROUGH)}
          onEdit={() => setView(WORKOUT_EDIT)}
          onRemove={() => onRemoveWorkout(selectedWorkout.id, user)}
        />
      }
      {view === WORKOUT_EDIT && 
        <WorkoutEdit 
          user_id={user} 
          workout={selectedWorkout}
          onCancel={() => setView(WORKOUT_SHOW)}
          onSave={onSave}
        />
      }
      {view === WORKOUT_ADD &&
        <WorkoutAdd 
          workout={selectedWorkout}
          setName={name => {
            setSelectedWorkout(prev => {
              return {...prev, name}
            })
          }}
          onCancel={() => setView(WORKOUT_LIST)}
          onSave={onSave}
        />
      }
      {view === WALKTHROUGH && 
        <WalkthroughContainer 
          user_id={user} 
          workout={selectedWorkout} 
          onFinish={() => setView(WORKOUT_LIST)}
        />
      }
    </Fragment>
  );
}