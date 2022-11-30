import useApplicationData from "./hooks/useApplicationData";
import Guest from "./components/Guest";
import User from "./components/User";
import { useEffect } from "react";

function App() {
  const { user, userName, onLogin, onRegister, onLogout, workoutList, setWorkoutShow, exerciseList, workoutShow, getWorkoutExercises } = useApplicationData();
  console.log("rendering the App component")

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
