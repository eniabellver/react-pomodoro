import { React, useState, useEffect } from "react";

import Timer from "./Timer/Timer";
import Intervals from "./Intervals/Intervals";
import StartBtn from "./StartBtn/StartBtn";
import SkipBtn from "./SkipBtn/SkipBtn";

function Display() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      let intervalID = setInterval(() => {
        clearInterval(intervalID);
  
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            //minutes is zero, end of timer
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  });

  const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formatSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const handleStart = () => {
    setIsActive(true);
    console.log("handleStart");
  };
  
  const handlePause = () => {
    setIsActive(false);
    console.log("handlePause");
  };

  const handleSkip = () => {
    setIsActive(false);
    console.log("handleSkip");
  };

  return (
    <div>
      <Intervals />
      <Timer minutes={formatMinutes} seconds={formatSeconds} />
      <StartBtn display={isActive} handleStart={handleStart} handlePause={handlePause} />
      <SkipBtn handleSkip={handleSkip} />
    </div>
  );
}

export default Display;

//TODO:
// Import Timer, Intervals, Start and Skip buttons ✅
// Render Timer, Intervals, Start and Skip buttons ✅
// Import useState ✅
// Set time state ✅
// Set interval state
// Pass time state prop to Timer component
// Pass interval state to Intervals
// Create startTimer and stopTimer functions
// Create getInterval function
// Pass startTimer and stopTimer props down to StartBtn component
