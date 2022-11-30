import React, { useState, Fragment } from "react";
import Login from "./Login"
import Register from "./Register"
import About from "./About"
import classnames from "classnames";
import './Guest.scss';

export default function Guest(props) {
  const INDEX = "INDEX";
  const ABOUT = "ABOUT";
  const LOGIN = "LOGIN";
  const REGISTER = "REGISTER"

  const { onLogin, onRegister } = props;
  const [view, setView] = useState(INDEX)

  const changeView = (event, view) => {
    if (event) {
      event.preventDefault()
    }

    setView(view)
  }

  const backButton = (
    <button onClick={(event) => changeView(event, INDEX)}>Back</button>
  )

  return (
    <Fragment >
      {view !== INDEX && backButton}
      {view === INDEX && (
        <Fragment >
          This is the guest page
          <button onClick={(event) => changeView(event, LOGIN)} >Login</button>
          <button onClick={(event) => changeView(event, REGISTER)} >Register</button>
          <button onClick={(event) => changeView(event, ABOUT)} >About</button>
        </Fragment>
      )}
      {view === LOGIN && (
        <Login onLogin={onLogin}/>
      )}
      {view === REGISTER && (
        <Register onRegister={onRegister}/>
      )}
      {view === ABOUT && (
        <About />
      )}
    </Fragment>
  )
}