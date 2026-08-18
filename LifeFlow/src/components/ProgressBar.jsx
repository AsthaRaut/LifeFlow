import React from 'react';

export const ProgressBar = ({ progress = 0 }) => (
  <div className="progress-bar-container">
    <div className="progress-bar-fill" style={{ width: `${Math.min(100, Math.max(0, progress))}%` }} />
    <span className="progress-text">{progress}%</span>
  </div>
);