import React from "react";
import postLogout from "../helpers/api_requests/postLogout";
import './NavBar.scss';

export default function NavBar(props) {
  const { userName, setUser } = props
  const handleLogout = (event) => {
    event.preventDefault();
    postLogout(setUser);
  }

  return (
    <nav>
      <button onClick={handleLogout}>Logout</button>
      <p>Logged in as {userName}</p>
    </nav>
  )
}