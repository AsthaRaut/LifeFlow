import React, { useState } from 'react';
import { Button } from './Button';

export const HabitForm = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('🔥');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit({ name, description, icon });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <input type="text" placeholder="Habit Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Icon Emoji (e.g. 💻)" value={icon} onChange={(e) => setIcon(e.target.value)} />
      <Button type="submit">Create Habit</Button>
    </form>
  );
};