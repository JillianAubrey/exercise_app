import { useState, useEffect } from "react";
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
axios.defaults.withCredentials = true;

export default function useApplicationData() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [workoutShow, setWorkoutShow] = useState(null);
  const [workoutList, setWorkoutList] = useState([]);
  const [exerciseList, setExerciseList] = useState({});

  useEffect(() => {
    getSession()
  }, []);

  async function getSession() {
    try {
      console.log("checking if there is an active session")
      const response = await axios.get('/logged_in')
      console.log(response)
      console.log("setting the current user")
      setUser(response.data.user_id)
      setUserName(response.data.user_name)
    } catch (error) {
      console.error("getSession error: ", error)
    }
  }

  async function onLogin(params, handleError) { 
    try {
      console.log("logging in")
      const response = await axios({
        method: 'post',
        url: '/login',
        credentials: true,
        data: {...params}
      })
      console.log(response)
      setUser(response.data.user_id)
      setUserName(response.data.user_name)
    } catch (error) {
      console.error("login error: ", error)
      handleError(error)
    }
  }

  async function onRegister(params, handleError) {
    try {
      console.log("registering")
      const response = await axios({
        method: 'post',
        url: '/users',
        credentials: true,
        data: {...params}
      })
      console.log(response)
      setUser(response.data.user_id)
      setUserName(response.data.user_name)
    } catch (error) {
      console.error("registration error: ", error)
      handleError(error)
    }
  }

  async function onLogout(handleError) {
    try {
      console.log("logging out")
      const response = await axios.post('/logout')
      console.log(response)
      setWorkoutList({})
      setUser(null)
      setUserName(null)
    } catch (error) {
      console.error("logout error: ", error)
      handleError(error)
    }
  }

  useEffect(() => {
    if (user) {
      getUserWorkouts(user)
      return
    }
    setWorkoutList([])
  }, [user]);
  
  async function getUserWorkouts(userId) { 
    try {
      console.log("getting the workoutList")
      const response = await axios.get(`/workouts?user=${userId}`);
      console.log(response);
      console.log("setting the WorkoutList")
      setWorkoutList(response.data);
    } catch (error) {
      console.error("getUserWorkouts error: ", error);
    }
  }

  async function getWorkoutExercises(workoutId) {
    try {
      console.log("getting the exerciseList")
      const response = await axios.get(`/workouts/${workoutId}`);
      console.log("exercise list response data", response.data);
      const workoutExercises = response.data.workout_exercises.map((el) => ({...el}))
      console.log("setting the ExerciseList")
      setExerciseList((prev) => ({...response.data, workout_exercises : workoutExercises}));
    } catch (error) {
      console.error("getExercises error: ", error);
    }
  }

  return {user, userName, onLogin, onRegister, onLogout, workoutList, workoutShow, setWorkoutShow, exerciseList, setExerciseList, getWorkoutExercises}
}