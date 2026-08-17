import ProgressBar from "./ProgressBar";

function GoalCard({ goal }) {
  return (
    <div className="goal-card">

      <div className="goal-header">

        <div>
          <h3>{goal.title}</h3>
          <p>{goal.description}</p>
        </div>

        <span className="goal-icon">
          🎯
        </span>

      </div>

      <div className="goal-progress">

        <div className="goal-progress-info">
          <span>Progress</span>
          <span>{goal.progress}%</span>
        </div>

        <ProgressBar progress={goal.progress} />

      </div>

    </div>
  );
}

export default GoalCard;