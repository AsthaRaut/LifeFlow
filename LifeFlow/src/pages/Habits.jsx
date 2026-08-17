import Button from "../components/Button";
import EmptyState from "../components/EmptyState";

function Habits() {
  return (
    <div className="page">

      <div className="page-header">

        <div>
          <h1>My Habits 🔥</h1>
          <p>Build better habits and maintain your streaks.</p>
        </div>

        <Button>
          + Add Habit
        </Button>

      </div>

      <div className="habit-summary">

        <div>
          <span>🔥</span>
          <h2>7 Days</h2>
          <p>Current Streak</p>
        </div>

        <div>
          <span>🏆</span>
          <h2>21 Days</h2>
          <p>Best Streak</p>
        </div>

        <div>
          <span>✓</span>
          <h2>85%</h2>
          <p>Completion</p>
        </div>

      </div>

      <EmptyState
        icon="🌱"
        title="Your habits will appear here"
        message="Start building a healthy routine."
      />

    </div>
  );
}

export default Habits;