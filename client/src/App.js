import useApplicationData from "./hooks/useApplicationData";
import { useEffect } from "react";
import axios from 'axios'
import Search from "./components/Exercise/Search";

function App() {
  const { state } = useApplicationData();
  console.log(state);

  
  return (
    <div className="App">
      <p>
        hello
    </p>
    <Search user={1} />
    </div>
  );
}

export default App;
