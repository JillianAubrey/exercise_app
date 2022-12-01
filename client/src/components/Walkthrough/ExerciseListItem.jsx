import React from "react"
import Timer from "./Timer";
import CardLeft from "../Exercise/CardLeft";

export default function ExerciseListItem(props) {
  const { onNext, exercise } = props
  const { reps, sets, duration, note, exercise:{ id, name, category, gif_url }} = exercise

  return (
    <article className="walkthrough--exercise">
      <h2>{name}</h2>
      <div>{category}</div>
      <CardLeft name={name} category={category} gif_url={gif_url}/>
      {duration 
        ? <Timer duration={{seconds: duration}} onComplete={onNext}/>
        : <div>{sets} sets of {reps} reps</div>
      }
      {note && <p>Note: {note}</p>}
    </article>
  )
}