import React, { useEffect } from "react";
import Guest from "./components/Guest";
import User from "./components/User";
import useUserData from "./hooks/useUserData";
import getSession from "./helpers/api_requests/getSession";

export default function App() {
  const {userId, userName, setUser} = useUserData();
  console.log("rendering the App component")

  useEffect(() => {
    getSession(
      (res) => setUser({...res.data}),
      (err) => console.error('Error fetching current session', err)
    )
  }, [])

  return (
    <div className="App">
      {userId
        ? <p>Logged in!</p> //<User/>
        : <Guest setUser={setUser}/>
      }
    </div>
  );
}