function HabitCard({ habit, onToggle }) {
  return (
    <div className="habit-card">

      <div className="habit-icon">
        {habit.icon}
      </div>

      <div className="habit-info">
        <h3>{habit.name}</h3>

        <p>
          🔥 {habit.streak} day streak
        </p>
      </div>

      <button
        className={`habit-btn ${habit.completed ? "done" : ""}`}
        onClick={() => onToggle(habit.id)}
      >
        {habit.completed ? "✓ Done" : "Complete"}
      </button>

    </div>
  );
}

export default HabitCard;