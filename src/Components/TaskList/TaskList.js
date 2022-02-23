import React from "react";

import AddTaskBtn from "./AddTaskBtn/AddTaskBtn";

function TaskList() {
  return (
    <div>
      <h3>Tasks:</h3>
      <AddTaskBtn />
      <ul>
        <li>Example Task</li>
        <li>Example Task</li>
        <li>Example Task</li>
      </ul>
    </div>
  );
}

export default TaskList;

//TODO:
// Import Tasks
// Map through tasks to render them
// Create addTask function, deleteTask, editTask
// Pass addTask button as down as a prop to AddTaskBtn component