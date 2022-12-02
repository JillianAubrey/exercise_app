import React, { useState, useEffect } from "react";

export default function Timer(props) {
  const { duration, onComplete } = props
  const [seconds, setSeconds] = useState(duration.seconds)

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

    return () => clearTimeout(timeout)
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