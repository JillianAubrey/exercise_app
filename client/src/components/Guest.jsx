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

  const changeView = (event, view) => {
    if (event) event.preventDefault()
    setView(view)
  }

  const backButton = (
    <button onClick={(event) => changeView(event, INDEX)}>Back</button>
  )

  return (
    <main className="guest-page" >
      {view !== INDEX && backButton}
      {view === INDEX && (
        <Fragment >
          <h1 className="logo">titan</h1>
          <button onClick={(event) => changeView(event, LOGIN)} >Login</button>
          <button onClick={(event) => changeView(event, REGISTER)} >Register</button>
          <button onClick={(event) => changeView(event, ABOUT)} >About</button>
        </Fragment>
      )}
      {view === LOGIN && (
        <Login setUser={setUser}/>
      )}
      {view === REGISTER && (
        <Register setUser={setUser} />
      )}
      {view === ABOUT && (
        <About />
      )}
    </main>
  )
}