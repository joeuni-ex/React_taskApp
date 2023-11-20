import "./App.css";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
      <div className="app">
        <TaskForm />
        <main className="app_main">
          <section className="task_column">section1</section>
          <section className="task_column">section2</section>
          <section className="task_column">section3</section>
        </main>
      </div>
    </>
  );
}

export default App;
