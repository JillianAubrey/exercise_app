import useApplicationData from "./hooks/useApplicationData";
import Guest from "./components/Guest";
import User from "./components/User";

function App() {
  const { user, workoutList, setWorkoutShow, exerciseList, workoutShow, getWorkoutExercises } = useApplicationData();
  console.log("rendering the App component")
  return (
    <div className="App">
      {!user && <Guest />}
      {user && <User workoutList={workoutList} workoutShow={workoutShow} setWorkoutShow={setWorkoutShow} exerciseList={exerciseList} getWorkoutExercises={getWorkoutExercises} />}
    </div>
  );
}

export default App;
