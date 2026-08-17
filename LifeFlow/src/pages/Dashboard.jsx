import { useState } from "react";

import ProgressBar from "../components/ProgressBar";
import TaskCard from "../components/TaskCard";
import HabitCard from "../components/HabitCard";
import GoalCard from "../components/GoalCard";

function Dashboard() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Practice",
      priority: "high",
      completed: true,
    },
    {
      id: 2,
      title: "Read for 20 minutes",
      priority: "medium",
      completed: false,
    },
    {
      id: 3,
      title: "Exercise",
      priority: "low",
      completed: false,
    },
  ]);

  // =========================
  // HABITS
  // =========================

  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Coding",
      icon: "💻",
      streak: 7,
      completed: true,
    },
    {
      id: 2,
      name: "Reading",
      icon: "📚",
      streak: 5,
      completed: false,
    },
    {
      id: 3,
      name: "Exercise",
      icon: "🏃",
      streak: 3,
      completed: false,
    },
  ]);


  const goals = [
    {
      id: 1,
      title: "Become a Full Stack Developer",
      description: "Complete React and Backend learning.",
      progress: 45,
    },
    {
      id: 2,
      title: "Improve English",
      description: "Practice English every day.",
      progress: 70,
    },
  ];


  const handleTaskComplete = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const handleTaskDelete = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  };


  const handleHabitToggle = (habitId) => {
    setHabits((previousHabits) =>
      previousHabits.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              completed: !habit.completed,
            }
          : habit
      )
    );
  };


  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const completedHabits = habits.filter(
    (habit) => habit.completed
  ).length;

  const taskProgress =
    tasks.length > 0
      ? Math.round((completedTasks / tasks.length) * 100)
      : 0;

  const habitProgress =
    habits.length > 0
      ? Math.round((completedHabits / habits.length) * 100)
      : 0;

  const productivity = Math.round(
    (taskProgress + habitProgress) / 2
  );

  return (
    <div className="dashboard">

      {/* =========================
          HEADER
      ========================= */}

      <div className="dashboard-header">
        <div>
          <p className="greeting">Good Morning 👋</p>

          <h1>Welcome back!</h1>

          <p>Let's make today productive.</p>
        </div>
      </div>


      {/* =========================
          SUMMARY CARDS
      ========================= */}

      <div className="summary-grid">

        <div className="summary-card">
          <span>✅</span>

          <div>
            <p>Tasks</p>

            <h2>
              {completedTasks} / {tasks.length}
            </h2>
          </div>
        </div>


        <div className="summary-card">
          <span>🔥</span>

          <div>
            <p>Habits</p>

            <h2>
              {completedHabits} / {habits.length}
            </h2>
          </div>
        </div>


        <div className="summary-card">
          <span>🎯</span>

          <div>
            <p>Goals</p>

            <h2>
              {goals.length}
            </h2>
          </div>
        </div>


        <div className="summary-card">
          <span>📈</span>

          <div>
            <p>Productivity</p>

            <h2>{productivity}%</h2>
          </div>
        </div>

      </div>


      {/* =========================
          TODAY'S PROGRESS
      ========================= */}

      <section className="dashboard-section">

        <div className="section-heading">
          <h2>Today's Progress</h2>

          <span>{productivity}%</span>
        </div>

        <ProgressBar progress={productivity} />

      </section>


      {/* =========================
          TASKS
      ========================= */}

      <section className="dashboard-section">

        <div className="section-heading">
          <h2>Today's Tasks</h2>

          <button>View All</button>
        </div>


        <div className="task-list">

          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onComplete={() =>
                  handleTaskComplete(task.id)
                }
                onDelete={() =>
                  handleTaskDelete(task.id)
                }
              />
            ))
          ) : (
            <div className="empty-state">

              <div className="empty-icon">
                🎉
              </div>

              <h3>No tasks left!</h3>

              <p>
                Great job! You completed everything.
              </p>

            </div>
          )}

        </div>

      </section>


      {/* =========================
          HABITS
      ========================= */}

      <section className="dashboard-section">

        <div className="section-heading">
          <h2>Today's Habits</h2>

          <button>View All</button>
        </div>


        <div className="habit-list">

          {habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onToggle={() =>
                handleHabitToggle(habit.id)
              }
            />
          ))}

        </div>

      </section>


      {/* =========================
          GOALS
      ========================= */}

      <section className="dashboard-section">

        <div className="section-heading">
          <h2>My Goals</h2>

          <button>View All</button>
        </div>


        <div className="goal-grid">

          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
            />
          ))}

        </div>

      </section>

    </div>
  );
}

export default Dashboard;