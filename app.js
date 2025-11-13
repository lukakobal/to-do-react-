import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div className="container">
      <h1>📝 Todo App</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new task..."
        />
        <button onClick={handleAdd}>Add</button>
        <ul className="task-list">
          {tasks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
