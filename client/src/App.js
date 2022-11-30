import useApplicationData from "./hooks/useApplicationData";
import { useEffect } from "react";
import axios from 'axios'
import Exercise from "./components/Exercise";
import Guest from "./components/Guest";
import User from "./components/User";
import { useEffect } from "react";

<<<<<<< HEAD
function App() {
  const { user, userName, onLogin, onRegister, onLogout, workoutList, setWorkoutShow, exerciseList, workoutShow, getWorkoutExercises } = useApplicationData();
=======
export default function App() {
  const { user, workoutList, setWorkoutShow, exerciseList, workoutShow, getWorkoutExercises } = useApplicationData();
>>>>>>> c44401324cf8d20f46ebafc49c111f41b20c44f1
  console.log("rendering the App component")

  return (
    <div className="App">
<<<<<<< HEAD
      {!user && <Guest 
        onLogin={onLogin}
        onRegister={onRegister}
      />}
      {user && <User 
        workoutList={workoutList} 
        workoutShow={workoutShow} 
        setWorkoutShow={setWorkoutShow} 
        exerciseList={exerciseList} 
        getWorkoutExercises={getWorkoutExercises}
      />}
=======
      {!user && <Guest />}
      {user && <User workoutList={workoutList} workoutShow={workoutShow} setWorkoutShow={setWorkoutShow} exerciseList={exerciseList} getWorkoutExercises={getWorkoutExercises} />}
      {user && <Exercise empty user_id={1} />}
>>>>>>> c44401324cf8d20f46ebafc49c111f41b20c44f1
    </div>
  );
}