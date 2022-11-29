import useApplicationData from "./hooks/useApplicationData";

function App() {
  const { state } = useApplicationData();
  return (
    <div className="App">
      <p>
        hello
        {state.workoutList}
    </p>
    </div>
  );
}

export default App;
