import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardLeft(props) {

  const { gif_url, category, name } = {...props}

  return (
    <section className="exercise__card-left">
    {/* in the left section of the card, render the gif. if there is no gif, render an icon. which icon depends on teh category */}
    {gif_url ? (
      <img src={gif_url} alt={name} />
    ) : category === "cardio" ? (
      <FontAwesomeIcon
        className="icon"
        icon="person-running"
      />
    ) : category  === "rest" ? (
      <FontAwesomeIcon
        className="icon"
        icon="moon"
      />
    ) : category  === "stretch" ? (
      <FontAwesomeIcon
        className="icon"
        icon="child-reaching"
      />
    )
      :
    (
      <FontAwesomeIcon
        className="icon"
        icon="dumbbell"
      />
    )}
  </section>
  )
}