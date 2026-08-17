import Button from "../components/Button";
import EmptyState from "../components/EmptyState";

function Goals() {
  return (
    <div className="page">

      <div className="page-header">

        <div>
          <h1>My Goals 🎯</h1>
          <p>Set meaningful goals and track your progress.</p>
        </div>

        <Button>
          + Add Goal
        </Button>

      </div>

      <div className="goals-overview">

        <div className="goal-stat">
          <span>🎯</span>
          <h2>3</h2>
          <p>Active Goals</p>
        </div>

        <div className="goal-stat">
          <span>🏆</span>
          <h2>5</h2>
          <p>Completed Goals</p>
        </div>

        <div className="goal-stat">
          <span>📈</span>
          <h2>62%</h2>
          <p>Average Progress</p>
        </div>

      </div>

      <EmptyState
        icon="🎯"
        title="No goals yet"
        message="Create your first goal and start working towards it."
      />

    </div>
  );
}

export default Goals;