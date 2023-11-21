import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import TaskCard from "./components/TaskCard";
import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

//로컬 스토리지에 있는 데이터 가져오기
const saveTasks = localStorage.getItem("tasks");

function App() {
  const [tasks, setTasks] = useState(JSON.parse(saveTasks) || []);

  //로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //삭제하기
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <>
      <div className="app">
        <TaskForm setTasks={setTasks} />
        <main className="app_main">
          <ScrollContainer className="taskList scroll-container">
            <TaskColumn
              title="할 일"
              icon={todoIcon}
              tasks={tasks}
              status="todo"
              handleDelete={handleDelete}
            />
          </ScrollContainer>
          <hr />
          <ScrollContainer className="taskList scroll-container">
            <TaskColumn
              title="진행중"
              icon={doingIcon}
              tasks={tasks}
              status="doing"
              handleDelete={handleDelete}
            />
          </ScrollContainer>
          <hr />
          <ScrollContainer className="taskList scroll-container">
            <TaskColumn
              title="완 료"
              icon={doneIcon}
              tasks={tasks}
              status="done"
              handleDelete={handleDelete}
            />
          </ScrollContainer>
        </main>
      </div>
    </>
  );
}

export default App;
