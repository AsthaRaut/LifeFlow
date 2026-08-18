import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import { TaskProvider } from './context/TaskContext';
import { HabitProvider } from './context/HabitContext';
import { GoalProvider } from './context/GoalContext';
import { JournalProvider } from './context/JournalContext';
import { NotificationProvider } from './context/NotificationContext';
import { SettingsProvider } from './context/SettingsContext';
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SettingsProvider>
        <UserProvider>
          <NotificationProvider>
            <TaskProvider>
              <HabitProvider>
                <GoalProvider>
                  <JournalProvider>
                    <App />
                  </JournalProvider>
                </GoalProvider>
              </HabitProvider>
            </TaskProvider>
          </NotificationProvider>
        </UserProvider>
      </SettingsProvider>
    </BrowserRouter>
  </React.StrictMode>
);