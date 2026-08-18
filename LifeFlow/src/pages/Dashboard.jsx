import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { HabitContext } from '../context/HabitContext';
import { GoalContext } from '../context/GoalContext';
import { UserContext } from '../context/UserContext';
import { StatCard } from '../components/StatCard';
import { TaskCard } from '../components/TaskCard';
import { HabitCard } from '../components/HabitCard';
import { GoalCard } from '../components/GoalCard';
import { calculatePercentage } from '../utils/helpers';

export default function Dashboard() {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);
  const { habits, toggleHabit } = useContext(HabitContext);
  const { goals, updateProgress } = useContext(GoalContext);
  const { user } = useContext(UserContext);

  const completedTasks = tasks.filter(t => t.completed).length;

  return (
    <div>
      <h1>Good Morning, {user.name} 👋</h1>
      <p className="subtitle">Here is your life overview for today.</p>

      <div className="metrics-grid">
        <StatCard title="Total Tasks" value={tasks.length} icon="📋" />
        <StatCard title="Active Habits" value={habits.length} icon="🔥" />
        <StatCard title="Total Goals" value={goals.length} icon="🎯" />
        <StatCard title="Task Rate" value={`${calculatePercentage(completedTasks, tasks.length)}%`} icon="📈" />
      </div>

      <section className="dashboard-section">
        <h2>Today's Tasks</h2>
        {tasks.slice(0, 3).map(t => <TaskCard key={t.id} task={t} onToggle={toggleTask} onDelete={deleteTask} />)}
      </section>

      <section className="dashboard-section">
        <h2>Active Habits</h2>
        <div className="habits-grid">
          {habits.slice(0, 3).map(h => <HabitCard key={h.id} habit={h} onToggle={toggleHabit} />)}
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Top Goals</h2>
        {goals.slice(0, 2).map(g => <GoalCard key={g.id} goal={g} onUpdateProgress={updateProgress} />)}
      </section>
    </div>
  );
}