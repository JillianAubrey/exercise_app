import React, { useState, Fragment } from "react";
import Login from "./Login"
import Register from "./Register"
import About from "./About"
import './Guest.scss';

export default function Guest(props) {
  const INDEX = "INDEX";
  const ABOUT = "ABOUT";
  const LOGIN = "LOGIN";
  const REGISTER = "REGISTER"

  const [view, setView] = useState(INDEX)

  const { setUser } = props

  const nav = (
    <nav className="guest-nav">
      <span 
        onClick={() => setView(view === LOGIN ? INDEX : LOGIN)} 
        className={`nav-item clickable${view === LOGIN ? ' nav-item--selected' : ''}`}
      >Login</span>
      <span 
        onClick={() => setView(view === REGISTER ? INDEX : REGISTER)}
        className={`nav-item clickable${view === REGISTER ? ' nav-item--selected' : ''}`}
      >Register</span>
      <span 
        onClick={() => setView(view === ABOUT ? INDEX : ABOUT)}
        className={`nav-item clickable${view === ABOUT ? ' nav-item--selected' : ''}`}
      >About</span>
    </nav>
  )

  return (
    <main className="guest-page" >
      <div className="page-container">
        <h1 className="logo clickable" onClick={() => setView(INDEX)}>titan</h1>
        {nav}
        {view !== INDEX &&
          <div className="content">
            {view === LOGIN && (
              <Login setUser={setUser}/>
            )}
            {view === REGISTER && (
              <Register setUser={setUser} />
            )}
            {view === ABOUT && (
              <About />
            )}
          </div>
        }
      </div>
    </main>
  )
}