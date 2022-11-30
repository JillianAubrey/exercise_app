import useApplicationData from "./hooks/useApplicationData";
import { useEffect } from "react";
import axios from 'axios'
import Exercise from "./components/Exercise";
import Guest from "./components/Guest";
import User from "./components/User";

export default function App() {
  const { user, userName, onLogin, onRegister, onLogout, workoutList, setWorkoutShow, exerciseList, workoutShow, getWorkoutExercises } = useApplicationData();
  console.log("rendering the App component")

  return (
    <div className="App">
      {!user && <Guest 
        onLogin={onLogin}
        onRegister={onRegister}
      />}
      {user && <User 
        userName={userName} 
        onLogout={onLogout} 
        workoutList={workoutList} 
        workoutShow={workoutShow} 
        setWorkoutShow={setWorkoutShow} 
        exerciseList={exerciseList} 
        getWorkoutExercises={getWorkoutExercises} 
        user={user}
      />}
      {user && <Exercise empty user_id={1} />}
    </div>
  );
}