import React, { useState, useEffect } from "react";
import classNames from "classnames";

export default function Timer(props) {
  const { duration, onComplete } = props
  const [seconds, setSeconds] = useState(duration.seconds)

  let timerClasses = classNames("timer", {"timer-yellow": seconds <= 10 && seconds > 5, "timer-red": seconds <= 5})

  const beep = new Audio('/audio/beep-07a.mp3');


  useEffect(() => {
    setSeconds(duration.seconds)
  }, [duration])

  useEffect(() => {
    if (seconds === 0) {
      onComplete();
      return
    }

    let timeout = setTimeout(() => {
      setSeconds(prev => prev - 1)
    }, 1000)

    if (seconds <= 10) {
      beep.play();
    }

    return () => clearTimeout(timeout)
  }, [seconds])

  const displayMinutes = Math.floor(seconds/60)
  let displaySeconds = seconds%60
  if (displaySeconds < 10) displaySeconds = "0" + displaySeconds

  return (
    <div className={timerClasses}>
      {displayMinutes}:{displaySeconds}
    </div>
  )
}