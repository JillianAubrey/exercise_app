import useApplicationData from "./hooks/useApplicationData";

function App() {
  const { state } = useApplicationData();
  console.log(state);
  return (
    <div className="App">
      <p>
        hello
    </p>
    </div>
  );
}

export default App;
