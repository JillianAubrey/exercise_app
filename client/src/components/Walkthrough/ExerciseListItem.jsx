import React, { useState, useEffect } from "react"
import classnames from "classnames";
import Timer from "./Timer";
import CardLeft from "../Exercise/CardLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExerciseListItem(props) {
  const { onNext, exercise } = props
  const { reps, sets, duration, note, exercise:{ id, name, category, gif_url }} = exercise
  
  const isRest = id === 1;

  const classes = classnames("walkthrough--item", {
    "walkthrough--rest": isRest,
    "walkthrough--exercise": !isRest,
  });

  return (
    <article className={classes}>
      {isRest
        ? <FontAwesomeIcon className="icon" icon="moon" />
        : <CardLeft name={name} category={category} gif_url={gif_url}/>
      }
      {duration && <Timer duration={{seconds: duration}} onComplete={onNext}/>}
    </article>
  )
}