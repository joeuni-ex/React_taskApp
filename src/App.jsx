import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import TaskCard from "./components/TaskCard";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <div className="app">
        <TaskForm setTasks={setTasks} />
        <main className="app_main">
          <TaskColumn
            title="할 일"
            icon={todoIcon}
            tasks={tasks}
            status="todo"
          />
          <TaskColumn
            title="진행중"
            icon={doingIcon}
            tasks={tasks}
            status="doing"
          />
          <TaskColumn
            title="완 료"
            icon={doneIcon}
            tasks={tasks}
            status="done"
          />
        </main>
      </div>
    </>
  );
}

export default App;
