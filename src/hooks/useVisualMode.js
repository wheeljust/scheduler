import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      const updatedHistory = [...history].slice(0, history.length - 1);
      setHistory([...updatedHistory, newMode]);
    } else {
      setHistory([...history, newMode]);
    }
    setMode(newMode);
  };

  const back = () => {
    if (history.length === 1) return;

    //create a copy of the current history state, remove the last element
    const updatedHistory = [...history].slice(0, history.length - 1);

    //Assign prevMode as the last element in the updatedHistory array
    const prevMode = updatedHistory[updatedHistory.length - 1];

    //Set the mode and updatedHistory
    setMode(prevMode);
    setHistory([...updatedHistory]);
  };

  return {
    mode,
    transition,
    back
  }

};