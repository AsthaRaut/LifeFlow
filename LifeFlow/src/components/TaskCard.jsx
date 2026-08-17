function TaskCard({ task, onComplete, onDelete }) {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>

      <div className="task-left">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
        />

        <div className="task-content">
          <h3>{task.title}</h3>

          <span className={`priority ${task.priority}`}>
            {task.priority}
          </span>
        </div>

      </div>

      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
      >
        🗑️
      </button>

    </div>
  );
}

export default TaskCard;