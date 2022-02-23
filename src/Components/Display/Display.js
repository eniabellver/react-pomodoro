import React from "react";

import Timer from "./Timer/Timer";
import Intervals from "./Intervals/Intervals";
import StartBtn from "./StartBtn/StartBtn";
import SkipBtn from "./SkipBtn/SkipBtn";

function Display() {
  return (
    <div>
      <Intervals />
      <Timer />
      <StartBtn />
      <SkipBtn />
    </div>
  );
}

export default Display;

//TODO:
// Import Timer, Intervals, Start and Skip buttons
// Render Timer, Intervals, Start and Skip buttons
// Import useState
// Set time state
// Set interval state
// Pass time state prop to Timer component
// Pass interval state to Intervals
// Create startTimer and stopTimer functions
// Create getInterval function
// Pass startTimer and stopTimer props down to StartBtn component
