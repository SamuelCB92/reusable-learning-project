export default function TaskButtons({
  task,
  handleDelete,
  index,
  handleComplete,
}) {
  return (
    <div>
      <h1 className={task.completed ? "completed" : ""}>{task.text}</h1>
      <button onClick={() => handleComplete(index)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => handleDelete(index)}>X</button>
    </div>
  );
}
