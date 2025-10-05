import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskApp() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  
  const handleSubmit = () => {
    const t = text.trim();
    if (!t) return;                
    const newTask = { id: Date.now(), text: t };
    setTasks(prev => [...prev, newTask]);  
    setText("");    
   
  };

  
  const handleDelete = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  
  const handleClearAll = () => {
    // TODO: set tasks to empty array
     setTasks([]);
  };

  return (
    <section className="card">
      {/*Controlled Input */}
      <div className="inputRow">
        <input
          type="text"
          placeholder="Type a task..."
          className="input"
          // TODO: value={text}
          // TODO: onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button className="btn btn--primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {/*Render Task List and Enable Delete */}
      {/*Pass tasks and onDelete */}
      <TaskList /* tasks={tasks} onDelete={handleDelete} */ />

      {/*Clear All */}
      <div className="footerRow">
        <button className="btn btn--ghost" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
}
