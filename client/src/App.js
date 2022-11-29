import useApplicationData from "./hooks/useApplicationData";
import Guest from "./components/Guest";
import User from "./components/User";

function App() {
  const { user } = useApplicationData();
  console.log(user)
  return (
    <div className="App">
      {!user && <Guest />}
      {user && <User />}
    </div>
  );
}

export default App;
