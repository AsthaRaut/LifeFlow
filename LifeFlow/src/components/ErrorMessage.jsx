import React from 'react';

export const ErrorMessage = ({ message, onRetry }) => (
  <div className="error-card">
    <h3>⚠ {message}</h3>
    {onRetry && <button onClick={onRetry}>Try Again</button>}
  </div>
);