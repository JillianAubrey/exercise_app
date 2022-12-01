import React, { useState, useEffect } from "react";

export default function Timer(props) {
  const {duration, onComplete} = props
  const [seconds, setSeconds] = useState(duration)

  useEffect(() => {
    if (seconds === 0) {
      onComplete();
      return
    }

    let interval = setInterval(() => {
      setSeconds(prev => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds])

  const displayMinutes = Math.floor(seconds/60)
  let displaySeconds = seconds%60
  if (displaySeconds < 10) displaySeconds = "0" + displaySeconds

  return (
    <div className="timer">
      {displayMinutes}:{displaySeconds}
    </div>
  )
}