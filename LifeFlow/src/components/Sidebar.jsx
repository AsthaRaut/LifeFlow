import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="nav-list">
        <li><NavLink to="/">🏠 Dashboard</NavLink></li>
        <li><NavLink to="/tasks">✓ Tasks</NavLink></li>
        <li><NavLink to="/habits">🔥 Habits</NavLink></li>
        <li><NavLink to="/goals">🎯 Goals</NavLink></li>
        <li><NavLink to="/analytics">📊 Analytics</NavLink></li>
        <li><NavLink to="/journal">📔 Journal</NavLink></li>
      </ul>
      <div className="sidebar-divider" />
      <ul className="nav-list">
        <li><NavLink to="/profile">👤 Profile</NavLink></li>
        <li><NavLink to="/settings">⚙ Settings</NavLink></li>
      </ul>
    </aside>
  );
};