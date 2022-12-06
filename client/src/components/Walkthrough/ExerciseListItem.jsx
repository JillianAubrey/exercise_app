import React, { useEffect, useRef, useMemo } from "react"
import Timer from "./Timer";
import CardLeft from "../Exercise/CardLeft";
// import Speech from 'react-speech';


export default function ExerciseListItem(props) {
  const { onNext, exercise } = props
  const { reps, sets, duration, note, exercise:{ id, name, category, gif_url }} = exercise
  const tts = useMemo(() => window.speechSynthesis, []);
  const msg = useMemo(() => new SpeechSynthesisUtterance(), []);
  const isDbRest = id === 1;

  // Returns the approprite tts message for the current exercise
  const ttsMessage = () => {
    let msg = name;

    if (duration) {
      msg += '. '
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      if (minutes) msg += `${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`;
      if (minutes && seconds) msg += ' and ';
      if (seconds) msg += `${seconds} seconds`;
      return msg;
    }

    if (isDbRest) return msg;

    msg += '. '
    msg += `${sets} ${sets > 1 ? 'sets' : 'set'} of ${reps}`;
    return msg;
  }

  // Reads the text-to-speech (tts) for the exercise
  useEffect(() => {
    // cancels any tts that might be playing
    tts.cancel()

    msg.text = ttsMessage();
    tts.speak(msg);
  }, [exercise]);



  return (
    <article className="walkthrough--exercise">
      <div className="walkthrough--exercise-header">
      <h2>{name}</h2>
      {!isDbRest && <div>{category}</div>}
      </div>
      <CardLeft name={name} category={category} gif_url={gif_url}/>
      {duration 
        ? <Timer duration={{seconds: duration}} onComplete={onNext}/> // Duration is passed an an object to ensure timer re-renders
        : !isDbRest && <div className="setbased"><span>{sets}</span> {sets > 1 ? 'sets' : 'set'} of <span>{reps}</span></div>
      }
      {note && <p className="note"><span>Note:  </span>  {note}</p>}
    </article>
  );
}