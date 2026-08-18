import React, { useState } from 'react';
import { Button } from './Button';

export const GoalForm = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Career');
  const [deadline, setDeadline] = useState('');
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, description, category, deadline, progress });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <input type="text" placeholder="Goal Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Career">Career</option>
        <option value="Personal">Personal</option>
        <option value="Financial">Financial</option>
      </select>
      <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
      <input type="number" placeholder="Initial Progress %" min="0" max="100" value={progress} onChange={(e) => setProgress(e.target.value)} />
      <Button type="submit">Set Goal</Button>
    </form>
  );
};