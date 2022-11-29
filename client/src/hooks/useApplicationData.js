import { useState, useEffect } from "react";
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export default function useApplicationData() {
  const [user, setUser] = useState(1); //can i store the userID in state or need it be garbled
  const [workoutShow, setWorkoutShow] = useState(null);
  const [workoutList, setWorkoutList] = useState([]);
  const [exerciseList, setExerciseList] = useState({});

  useEffect(() => {
    getUserWorkouts(user) 
  }, []);
  
  async function getUserWorkouts(userId) { // should this call get all exercise data for workouts that user is a member of?
    try {
      console.log("getting the workoutList")
      const response = await axios.get(`/workouts?user=${userId}`);
      console.log(response);
      console.log("setting the WorkoutList")
      setWorkoutList((prev) => response.data );
    } catch (error) {
      console.error("getUserWorkouts error: ", error);
    }
  }

  // useEffect(() => {
  //   if (workoutShow) {
  //     getWorkoutExercises(workoutShow)
  //   }
  // }, [workoutShow])

  async function getWorkoutExercises(workoutId) {
    try {
      console.log("getting the exerciseList")
      const response = await axios.get(`/workouts/${workoutId}`);
      console.log(response);
      console.log("setting the ExerciseList")
      setExerciseList((prev) => response.data);
    } catch (error) {
      console.error("getExercises error: ", error);
    }
  }

  // function submitWorkout(workout) { // need to decide the form of this workout object, needs to include workout_exercises info
  //   return axios.put(`/workouts`, { workout })
  //     .then((res) => {
      
  //   })

  // }

  // function completeWorkout(sessionInfo) {

  // }

  return {user, workoutList, workoutShow, setWorkoutShow, exerciseList, getWorkoutExercises}
}