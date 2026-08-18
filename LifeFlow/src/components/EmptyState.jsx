import React from 'react';

export const EmptyState = ({ title = 'No Items', message = 'Nothing here yet.' }) => (
  <div className="empty-state">
    <span className="empty-icon">📝</span>
    <h3>{title}</h3>
    <p>{message}</p>
  </div>
);