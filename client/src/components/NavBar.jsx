import React from "react";
import postLogout from "../helpers/api_requests/postLogout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NavBar.scss';

export default function NavBar(props) {
  const { userName, setUser } = props
  const handleLogout = (event) => {
    event.preventDefault();
    postLogout(setUser);
  }

  return (
    <nav>
      <span class="logo" onClick={() => window.location.reload(false)}>
        titan
      </span>
      <div class="user">
        <p>logged in as <span class="username">{userName}</span></p>
        <button onClick={handleLogout}>
          <FontAwesomeIcon icon="fa-right-from-bracket" />
        </button>
      </div>
    </nav>
  )
}