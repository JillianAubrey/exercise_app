import useApplicationData from "./hooks/useApplicationData";
import Guest from "./components/Guest";
import User from "./components/User";

export default function App() {
  const { user, userName, onLogin, onRegister, onLogout, workoutList, setWorkoutShow, exerciseList, setExerciseList, workoutShow, getWorkoutExercises } = useApplicationData();
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
        setExerciseList={setExerciseList}
      />}
    </div>
  );
}