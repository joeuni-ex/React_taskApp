import TaskCard from "./TaskCard";
import "./TaskColumn.css";

export default function TaskColumn({
  title,
  icon,
  tasks,
  status,
  handleDelete,
}) {
  return (
    <>
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" />
        {title}
      </h2>

      <section className="task_column">
        {tasks.length > 0
          ? tasks.map(
              (task, index) =>
                task.status === status && (
                  <TaskCard
                    key={index}
                    handleDelete={handleDelete}
                    index={index}
                    title={task.task}
                    tags={task.tags}
                  />
                )
            )
          : null}
      </section>
    </>
  );
}
