import React from 'react';

export const TaskCard = ({ task, onToggle, onDelete }) => (
  <div className={`task-card ${task.completed ? 'completed' : ''}`}>
    <div className="task-checkbox-section">
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <div>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <span className="badge category">{task.category}</span>
        <span className={`badge priority-${task.priority.toLowerCase()}`}>{task.priority}</span>
      </div>
    </div>
    <button className="delete-btn" onClick={() => onDelete(task.id)}>🗑</button>
  </div>
);