import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Rest(props){

  const {id, duration} = { ...props }


  return (
    <section className="exercise__card-rest">
      <h1>Rest</h1>
      <FontAwesomeIcon icon="moon" className="icon"></FontAwesomeIcon>
      {duration && <p>{duration} Seconds</p>}
      {!duration && <p>Untimed Rest</p>}
    </section>)

}