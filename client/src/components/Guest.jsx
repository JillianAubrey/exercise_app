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


  return (
    <main className="guest-page" >
      <div className="page-container">
        <h1 className="logo" onClick={() => changeView(null, INDEX)}>titan</h1>
        {view === INDEX && (
          <Fragment >
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
      </div>
    </main>
  )
}