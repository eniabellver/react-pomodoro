import { React } from "react";

import Header from "../Header/Header";
import Display from "../Display/Display";
import TaskList from "../TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <Display />
      <TaskList />
    </div>
  );
}

export default App;

//TODO:
// Import Header, Display, TaskList ✅
// Render Header, Display, TaskList ✅
