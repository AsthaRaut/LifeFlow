import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { TaskCard } from '../components/TaskCard';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { TaskForm } from '../components/TaskForm';
import { EmptyState } from '../components/EmptyState';
import { useDebounce } from '../hooks/useDebounce';

export default function Tasks() {
  const { tasks, addTask, toggleTask, deleteTask } = useContext(TaskContext);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const debouncedSearch = useDebounce(search, 300);
  const filteredTasks = tasks.filter(t => t.title.toLowerCase().includes(debouncedSearch.toLowerCase()));

  return (
    <div>
      <div className="page-header-flex">
        <h1>Tasks</h1>
        <Button onClick={() => setIsModalOpen(true)}>+ Add Task</Button>
      </div>

      <input type="text" className="search-input" placeholder="Search tasks..." value={search} onChange={(e) => setSearch(e.target.value)} />

      {filteredTasks.length === 0 ? (
        <EmptyState title="No Tasks Found" message="Try searching something else or create a new task." />
      ) : (
        filteredTasks.map(t => <TaskCard key={t.id} task={t} onToggle={toggleTask} onDelete={deleteTask} />)
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Task">
        <TaskForm onSubmit={addTask} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}