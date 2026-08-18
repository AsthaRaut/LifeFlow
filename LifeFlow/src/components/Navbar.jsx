import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { NotificationPanel } from './NotificationPanel';

export const Navbar = () => {
  const { user } = useContext(UserContext);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="brand" onClick={() => navigate('/')}>🌿 LifeFlow</div>
      <div className="nav-actions">
        <div style={{ position: 'relative' }}>
          <button className="icon-btn" onClick={() => setShowNotifications(!showNotifications)}>🔔</button>
          {showNotifications && <NotificationPanel onClose={() => setShowNotifications(false)} />}
        </div>
        <div className="user-profile-badge" onClick={() => navigate('/profile')}>
          <div className="avatar">{user.avatar}</div>
          <span>{user.name}</span>
        </div>
      </div>
    </nav>
  );
};