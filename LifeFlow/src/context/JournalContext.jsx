import React, { createContext, useReducer, useEffect } from 'react';
import { journalReducer } from '../reducers/journalReducer';
import { initialJournalEntries } from '../data/initialData';

export const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
  const [entries, dispatch] = useReducer(journalReducer, [], () => {
    const local = localStorage.getItem('lf_journal');
    return local ? JSON.parse(local) : initialJournalEntries;
  });

  useEffect(() => { localStorage.setItem('lf_journal', JSON.stringify(entries)); }, [entries]);

  const addEntry = (entry) => dispatch({ type: 'ADD_ENTRY', payload: { ...entry, id: Date.now(), date: new Date().toISOString().slice(0, 10) } });
  const deleteEntry = (id) => dispatch({ type: 'DELETE_ENTRY', payload: id });

  return (
    <JournalContext.Provider value={{ entries, addEntry, deleteEntry }}>
      {children}
    </JournalContext.Provider>
  );
};