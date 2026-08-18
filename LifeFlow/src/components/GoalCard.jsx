import React, { useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { Button } from './Button';

export const GoalCard = ({ goal, onUpdateProgress, onDelete }) => {
  const [val, setVal] = useState(goal.progress);
  const [edit, setEdit] = useState(false);

  return (
    <div className="goal-card">
      <div className="goal-header-flex">
        <h3>🎯 {goal.title}</h3>
        {onDelete && <button className="delete-btn" onClick={() => onDelete(goal.id)}>🗑</button>}
      </div>
      <p>{goal.description}</p>
      <ProgressBar progress={goal.progress} />
      <div className="goal-footer">
        <span>Deadline: {goal.deadline}</span>
        {edit ? (
          <div className="inline-edit">
            <input type="number" min="0" max="100" value={val} onChange={(e) => setVal(e.target.value)} />
            <Button onClick={() => { onUpdateProgress(goal.id, val); setEdit(false); }}>Save</Button>
          </div>
        ) : (
          <Button variant="secondary" onClick={() => setEdit(true)}>Update Progress</Button>
        )}
      </div>
    </div>
  );
};