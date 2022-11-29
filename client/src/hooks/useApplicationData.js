import { useState, useEffect } from "react";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const dummyState = {
  user: 1,
  workouts: {
    2: {
      id: 2,
      name: "cardio"
    }
  },
  workout_exercises: {
    // do we want exercises to be stored in state or just a list of workout_exercise ids in the workouts state
    //this could be empty for the workout list page and then be populated when a workout is selected (to show exercises) 
  }
}

export default function useApplicationData() {
  const [state, setState] = useState({
    //can I store userId in the state in a safe way?
    user: 1,
    workouts: []
  });

  const setUser = user => setState({ ...state, user });

  useEffect(() => {
    getUserWorkouts(state.user) 
  }, [state.user]);
  
  async function getUserWorkouts(userId) { // should this call get all exercise data for workouts that user is a member of?
    try {
      const response = await axios.get(`/workouts?user=${userId}`);
      console.log(response);
      setState((prev) => ({ ...prev, workoutList: response.data }));
    } catch (error) {
      console.error("getUserWorkouts error: ", error);
    }
  }

  function submitWorkout(workout) { // need to decide the form of this workout object, needs to include workout_exercises info
    return axios.put(`/workouts`, { workout })
      .then((res) => {
      
    })

  }

  function completeWorkout(sessionInfo) {

  }

  return {state, setUser, submitWorkout}
}