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
        onClick={() =>setView(LOGIN)} 
        className={`nav-item${view === LOGIN ? ' nav-item--selected' : ''}`}
      >Login</span>
      <span 
        onClick={() =>setView(REGISTER)}
        className={`nav-item${view === REGISTER ? ' nav-item--selected' : ''}`}
      >Register</span>
      <span 
        onClick={() =>setView(ABOUT)}
        className={`nav-item${view === ABOUT ? ' nav-item--selected' : ''}`}
      >About</span>
    </nav>
  )

  return (
    <main className="guest-page" >
      <div className="page-container">
        <h1 className="logo" onClick={() => setView(INDEX)}>titan</h1>
        {nav}
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
    </main>
  )
}