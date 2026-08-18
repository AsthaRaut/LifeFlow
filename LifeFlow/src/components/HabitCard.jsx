import React from 'react';
import { Button } from './Button';

export const HabitCard = ({ habit, onToggle, onDelete }) => (
  <div className="habit-card">
    <div className="habit-header">
      <span className="habit-icon">{habit.icon}</span>
      <div>
        <h3>{habit.name}</h3>
        <p>{habit.description}</p>
      </div>
    </div>
    <div className="habit-footer">
      <span>🔥 {habit.streak} days</span>
      <Button variant={habit.completedToday ? 'secondary' : 'primary'} onClick={() => onToggle(habit.id)}>
        {habit.completedToday ? '✓ Done' : 'Complete'}
      </Button>
      {onDelete && <button className="delete-btn" onClick={() => onDelete(habit.id)}>🗑</button>}
    </div>
  </div>
);