import React, { createContext, useState, useEffect } from 'react';
import { initialNotifications } from '../data/initialData';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(() => {
    const local = localStorage.getItem('lf_notifications');
    return local ? JSON.parse(local) : initialNotifications;
  });

  useEffect(() => { localStorage.setItem('lf_notifications', JSON.stringify(notifications)); }, [notifications]);

  const markAllAsRead = () => setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  const clearNotifications = () => setNotifications([]);

  return (
    <NotificationContext.Provider value={{ notifications, markAllAsRead, clearNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};