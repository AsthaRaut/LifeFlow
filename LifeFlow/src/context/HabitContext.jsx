import React, { createContext, useReducer, useEffect } from 'react';
import { habitReducer } from '../reducers/habitReducer';
import { initialHabits } from '../data/initialData';

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, dispatch] = useReducer(habitReducer, [], () => {
    const local = localStorage.getItem('lf_habits');
    return local ? JSON.parse(local) : initialHabits;
  });

  useEffect(() => { localStorage.setItem('lf_habits', JSON.stringify(habits)); }, [habits]);

  const addHabit = (habit) => dispatch({ type: 'ADD_HABIT', payload: { ...habit, id: Date.now(), streak: 0, completedToday: false } });
  const toggleHabit = (id) => dispatch({ type: 'TOGGLE_HABIT', payload: id });
  const deleteHabit = (id) => dispatch({ type: 'DELETE_HABIT', payload: id });

  return (
    <HabitContext.Provider value={{ habits, addHabit, toggleHabit, deleteHabit }}>
      {children}
    </HabitContext.Provider>
  );
};