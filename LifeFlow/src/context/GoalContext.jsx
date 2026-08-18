import React, { createContext, useReducer, useEffect } from 'react';
import { goalReducer } from '../reducers/goalReducer';
import { initialGoals } from '../data/initialData';

export const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [goals, dispatch] = useReducer(goalReducer, [], () => {
    const local = localStorage.getItem('lf_goals');
    return local ? JSON.parse(local) : initialGoals;
  });

  useEffect(() => { localStorage.setItem('lf_goals', JSON.stringify(goals)); }, [goals]);

  const addGoal = (goal) => dispatch({ type: 'ADD_GOAL', payload: { ...goal, id: Date.now(), progress: Number(goal.progress) || 0 } });
  const updateProgress = (id, progress) => dispatch({ type: 'UPDATE_PROGRESS', payload: { id, progress: Number(progress) } });
  const deleteGoal = (id) => dispatch({ type: 'DELETE_GOAL', payload: id });

  return (
    <GoalContext.Provider value={{ goals, addGoal, updateProgress, deleteGoal }}>
      {children}
    </GoalContext.Provider>
  );
};