import React, { useState, useEffect, useMemo } from "react";
import classNames from "classnames";

export default function Timer(props) {
  const { duration, onComplete } = props;
  const [seconds, setSeconds] = useState(duration.seconds);

  // beep object is stored in Memo to avoid reloading mp3 file
  const beep = useMemo(()=> {
    const beep = new Audio('/audio/beep-07a.mp3');
    beep.volume = 0.2;
    return beep;
  }, []);

  let timerClasses = classNames(
    "timer", 
    {
      "timer-yellow": seconds <= 10 && seconds > 5, 
      "timer-red": seconds <= 5
    }
  );

  // Resets seconds when timer is re-rendered
  useEffect(() => {
    setSeconds(duration.seconds);
  }, [duration]);

  // Handles actions at each second interval
  useEffect(() => {
    // Executes onComplete function when time runs out
    if (seconds === 0) {
      onComplete();
      return;
    }

    // Plays beep sound on the last 5 seconds
    if (seconds <= 5) {
      beep.play();
    }

    // Sets a timeout to count down the next second
    const timeout = setTimeout(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [seconds]);

  const displayMinutes = Math.floor(seconds / 60);
  let displaySeconds = seconds % 60;
  if (displaySeconds < 10) displaySeconds = "0" + displaySeconds; // adds leading 0

  return (
    <div className={timerClasses}>
      {displayMinutes}:{displaySeconds}
    </div>
  );
}