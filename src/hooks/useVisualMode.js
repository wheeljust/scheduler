import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const removeLastElement = (array) => array.slice(0, array.length - 1);

  const transition = (newMode, replace = false) => {

    if (replace) {
      setHistory(prev => ([...removeLastElement(prev), newMode]));
    } else {
      setHistory(prev => ([...prev, newMode]));
    }
    setMode(newMode);
  };

  const back = () => {
    if (history.length === 1) return;

    //Assign prevMode as the 2nd last element in the current history array
    const prevMode = history[history.length - 2];

    //Set the mode and updatedHistory
    setMode(prevMode);
    setHistory(prev => ([...removeLastElement(prev)]));
  };

  return {
    mode,
    transition,
    back
  }

};