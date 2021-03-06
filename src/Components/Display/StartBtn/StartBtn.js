import React from 'react'

//TODO:
// Define isStarted state so button changes text
// Use prop to define state of button
// Conditional render the text of button

function StartBtn({handleStart, handlePause, display}) {
  if (display) {
    return <button onClick={handlePause}>Pause</button>
  }
  return (
    <button onClick={handleStart}>Start</button>
  )
}

export default StartBtn