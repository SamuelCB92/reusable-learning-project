import "./App.css";
import { useState } from "react";
import TaskButtons from "./TaskButtons";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, { text: input, completed: false }]);
    setInput("");
  };

  const handleComplete = (indexToComplete) => {
    setTodoList(
      todoList.map((task, index) =>
        index === indexToComplete
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const handleClear = () => {
    setTodoList([]);
  };
  const handleDelete = (a) => {
    setTodoList(todoList.filter((_, index) => index !== a));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} value={input} />
        <button onClick={addTask}>Add Task</button>
        <button onClick={handleClear}>Clear</button>
        <div className="list">
          {todoList.map((task, index) => {
            return (
              <TaskButtons
                task={task}
                handleDelete={handleDelete}
                index={index}
                handleComplete={handleComplete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
