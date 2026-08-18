import React, { createContext, useState, useEffect } from 'react';
import { initialSettings } from '../data/initialData';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const local = localStorage.getItem('lf_settings');
    return local ? JSON.parse(local) : initialSettings;
  });

  useEffect(() => { 
    localStorage.setItem('lf_settings', JSON.stringify(settings)); 
  }, [settings]);

  const updateSettings = (fields) => setSettings(prev => ({ ...prev, ...fields }));

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};