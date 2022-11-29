import React, { useState, Fragment } from "react";
import classnames from "classnames";
import './Guest.scss';

export default function Guest(props) {
  const { setUser } = props;
  const [select, setSelect] = useState("ABOUT")

  return (
    <Fragment >
      {/* <Login onClick={() => setSelect("LOGIN")} />
      <Register onClick={() => setSelect("REGISTER")} />
      <About onClick={() => setSelect("ABOUT")} /> */}
    </Fragment>
  );
}