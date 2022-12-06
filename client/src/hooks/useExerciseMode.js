
import { useState } from 'react';

//sets the display of the 'Exercise' component 
export default function useExerciseMode(initial) {
  const [history, setHistory] = useState([initial])

  const back = function() {
    if (history.length < 2) {
      return;
    }
    setHistory(prev => prev.slice(0, -1))
  }

  const setMode = (newMode) => {
    setHistory(prev => [...prev, newMode])
  }

  const mode = history[history.length -1];

  return { mode, setMode, back}
};