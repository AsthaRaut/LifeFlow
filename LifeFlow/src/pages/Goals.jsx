import React, { useState, useContext } from 'react';
import { GoalContext } from '../context/GoalContext';
import { GoalCard } from '../components/GoalCard';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { GoalForm } from '../components/GoalForm';

export default function Goals() {
  const { goals, addGoal, updateProgress, deleteGoal } = useContext(GoalContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="page-header-flex">
        <h1>Goals</h1>
        <Button onClick={() => setIsModalOpen(true)}>+ Add Goal</Button>
      </div>

      {goals.map(g => <GoalCard key={g.id} goal={g} onUpdateProgress={updateProgress} onDelete={deleteGoal} />)}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Goal">
        <GoalForm onSubmit={addGoal} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}