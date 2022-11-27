import { useState, useEffect } from "react";
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    //can I store userId in the state in a safe way?
    user: null,
    workoutList: []
  });

  const setUser = user => setState({ ...state, user });

  useEffect(() => {
    let ignore = false;
    getUserWorkouts(state.user) 
    return () => ignore = true;
  }, [state.user]);
  
  async function getUserWorkouts(userId) { // should this call get all exercise data for workouts that user is a member of?
    try {
      const response = await axios.get(`/api/workouts?user=${userId}`);
      console.log(response);
      setState((prev) => ({ ...prev, workoutList: response.data }));
    } catch (error) {
      console.error("getUserWorkouts error: ", error);
    }
  }

  async function saveNewWorkout(workout) {

  }

  async function updateWorkout(workout) {

  }

  return {state, setUser, saveNewWorkout, updateWorkout}
}