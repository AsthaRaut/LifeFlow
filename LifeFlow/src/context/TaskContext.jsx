import React, { createContext, useReducer, useEffect } from 'react';
import { taskReducer } from '../reducers/taskReducer';
import { initialTasks } from '../data/initialData';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const local = localStorage.getItem('lf_tasks');
    return local ? JSON.parse(local) : initialTasks;
  });

  useEffect(() => { localStorage.setItem('lf_tasks', JSON.stringify(tasks)); }, [tasks]);

  const addTask = (task) => dispatch({ type: 'ADD_TASK', payload: { ...task, id: Date.now(), completed: false } });
  const toggleTask = (id) => dispatch({ type: 'TOGGLE_TASK', payload: id });
  const deleteTask = (id) => dispatch({ type: 'DELETE_TASK', payload: id });

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};