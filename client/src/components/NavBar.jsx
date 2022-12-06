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
    <nav className="user-nav">
      <span className="logo clickable" onClick={() => window.location.reload(false)}>
        titan
      </span>
      <div className="user">
        <p>logged in as <span className="username">{userName}</span></p>
        <button onClick={handleLogout}>
          <FontAwesomeIcon icon="fa-right-from-bracket" />
        </button>
      </div>
    </nav>
  );
};