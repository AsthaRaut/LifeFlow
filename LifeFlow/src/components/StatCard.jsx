import React from 'react';

export const StatCard = ({ title, value, icon }) => (
  <div className="metric-card">
    <div className="metric-header">
      <span>{title}</span>
      <span>{icon}</span>
    </div>
    <h2>{value}</h2>
  </div>
);