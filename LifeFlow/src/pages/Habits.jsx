import React, { useState, useContext } from 'react';
import { HabitContext } from '../context/HabitContext';
import { HabitCard } from '../components/HabitCard';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { HabitForm } from '../components/HabitForm';

export default function Habits() {
  const { habits, addHabit, toggleHabit, deleteHabit } = useContext(HabitContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="page-header-flex">
        <h1>Habits Tracker</h1>
        <Button onClick={() => setIsModalOpen(true)}>+ Add Habit</Button>
      </div>

      <div className="habits-grid">
        {habits.map(h => <HabitCard key={h.id} habit={h} onToggle={toggleHabit} onDelete={deleteHabit} />)}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Habit">
        <HabitForm onSubmit={addHabit} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}