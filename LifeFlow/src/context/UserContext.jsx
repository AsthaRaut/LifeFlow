import React, { createContext, useState, useEffect } from 'react';
import { initialUser } from '../data/initialData';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const local = localStorage.getItem('lf_user');
    return local ? JSON.parse(local) : initialUser;
  });

  useEffect(() => { localStorage.setItem('lf_user', JSON.stringify(user)); }, [user]);

  const updateUser = (fields) => setUser(prev => ({ ...prev, ...fields }));

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};