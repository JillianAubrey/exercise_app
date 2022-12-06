import React, { useEffect, Fragment } from "react";
import Guest from "./components/Guest";
import User from "./components/User";
import NavBar from "./components/NavBar";
import useUserData from "./hooks/useUserData";
import getSession from "./helpers/api_requests/getSession";
import './App.scss'

export default function App() {
  const {userId, userName, setUser} = useUserData();

  useEffect(() => {
    getSession(
      (res) => setUser({...res.data}),
      (err) => console.error('Error fetching current session', err)
    )
  }, [])

  return (
    <div className="App">
      {userId
        ? <Fragment>
            <NavBar userName={userName} setUser={setUser} /> 
            <User user={userId} />
          </Fragment>
        : <Guest setUser={setUser}/>
      }
    </div>
  );
}