import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

export const NotificationPanel = ({ onClose }) => {
  const { notifications, markAllAsRead, clearNotifications } = useContext(NotificationContext);

  return (
    <div className="notification-dropdown">
      <div className="notification-header">
        <h4>Notifications</h4>
        <div>
          <button onClick={markAllAsRead}>Read All</button>
          <button onClick={clearNotifications}>Clear</button>
        </div>
      </div>
      {notifications.length === 0 ? (
        <p className="no-notif">No new notifications</p>
      ) : (
        notifications.map(n => (
          <div key={n.id} className={`notification-item ${n.read ? 'read' : ''}`}>
            <p>{n.text}</p>
            <small>{n.time}</small>
          </div>
        ))
      )}
    </div>
  );
};