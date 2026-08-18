import React, { useState } from 'react';
import { Button } from './Button';

export const TaskForm = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Study');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, description, category, priority, dueDate });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <div className="form-row">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Study">Study</option>
          <option value="Learning">Learning</option>
          <option value="Health">Health</option>
          <option value="Work">Work</option>
        </select>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <Button type="submit">Save Task</Button>
    </form>
  );
};