import React, { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';
import { Button } from '../components/Button';

export default function Settings() {
  const { settings, updateSettings } = useContext(SettingsContext);

  const handleReset = () => {
    if (window.confirm('Reset all saved local application data?')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div>
      <h1>Settings</h1>
      <div className="settings-list">
        <div className="setting-item">
          <span>Dark Mode</span>
          <button onClick={() => updateSettings({ darkMode: !settings.darkMode })}>
            {settings.darkMode ? 'ON' : 'OFF'}
          </button>
        </div>
        <div className="setting-item">
          <span>Notifications Enabled</span>
          <button onClick={() => updateSettings({ notifications: !settings.notifications })}>
            {settings.notifications ? 'YES' : 'NO'}
          </button>
        </div>
        <div className="setting-item">
          <span>Daily Reminders</span>
          <button onClick={() => updateSettings({ dailyReminders: !settings.dailyReminders })}>
            {settings.dailyReminders ? 'YES' : 'NO'}
          </button>
        </div>
        <Button variant="danger" onClick={handleReset}>Reset Local Storage</Button>
      </div>
    </div>
  );
}