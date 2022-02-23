import React from "react";

import IntervalBtn from "./IntervalBtn/IntervalBtn";

function Intervals() {
  return (
    <div>
      <IntervalBtn intervalType='Pomodoro'/>
      <IntervalBtn intervalType='Short Break'/>
      <IntervalBtn intervalType='Long Break'/>
    </div>
  );
}

export default Intervals;

//TODO:
// Import IntervalBtn
// Use interval state prop and replace intervalType text
