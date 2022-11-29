import useApplicationData from "./hooks/useApplicationData";
import { useEffect } from "react";
import axios from 'axios'
import Search from "./components/Exercise/Search";
import Guest from "./components/Guest";
import User from "./components/User";

export default function App() {
  const { user, workoutList, setWorkoutShow, exerciseList, workoutShow, getWorkoutExercises } = useApplicationData();
  console.log("rendering the App component")
  return (
    <div className="App">
      {!user && <Guest />}
      {/* {user && <User workoutList={workoutList} workoutShow={workoutShow} setWorkoutShow={setWorkoutShow} exerciseList={exerciseList} getWorkoutExercises={getWorkoutExercises} />} */}
      {user && <Search user={user} />}
    </div>
  );
}