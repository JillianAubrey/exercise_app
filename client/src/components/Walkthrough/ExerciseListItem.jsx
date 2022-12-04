import React, { useEffect, useRef } from "react"
import Timer from "./Timer";
import CardLeft from "../Exercise/CardLeft";


export default function ExerciseListItem(props) {
  const { onNext, exercise, first } = props
  const { reps, sets, duration, note, exercise:{ id, name, category, gif_url }} = exercise
  const firstRender = useRef(true)
  
  useEffect(() => {
    if (first && firstRender.current) {
      firstRender.current = false
      return
    }
    
    const msg = new SpeechSynthesisUtterance(name)
    msg.volume = 1
    window.speechSynthesis.speak(msg)
  }, [name]);



  return (
    <article className="walkthrough--exercise">
      <div className="walkthrough--exercise-header">
      <h2>{name}</h2>
      <div>{category}</div>
      </div>
      <CardLeft name={name} category={category} gif_url={gif_url}/>
      {duration 
        ? <Timer duration={{seconds: duration}} onComplete={onNext}/>
        : <div className="setbased"><span>{sets}</span> sets of <span>{reps}</span></div>
      }
      {note && <p className="note"><span>Note:  </span>  {note}</p>}
    </article>
  )
}