import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <div className="app">
        <TaskForm />
        <main className="app_main">
          <TaskColumn title="할 일" icon={todoIcon} />
          <TaskColumn title="진행중" icon={doingIcon} />
          <TaskColumn title="완 료" icon={doneIcon} />
        </main>
      </div>
    </>
  );
}

export default App;
