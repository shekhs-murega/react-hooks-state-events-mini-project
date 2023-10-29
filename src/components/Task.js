import React from "react";

function Task({ task, deleteTask }) {
  const { id, text, category } = task;

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;