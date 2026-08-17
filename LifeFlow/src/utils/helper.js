// Format date
export function formatDate(date) {
  const dateObject = new Date(date);

  return dateObject.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}


// Calculate percentage
export function calculatePercentage(completed, total) {
  if (total === 0) {
    return 0;
  }

  return Math.round((completed / total) * 100);
}


// Get completed tasks count
export function getCompletedTasks(tasks) {
  return tasks.filter((task) => task.completed).length;
}


// Get pending tasks count
export function getPendingTasks(tasks) {
  return tasks.filter((task) => !task.completed).length;
}


// Get completed habits count
export function getCompletedHabits(habits) {
  return habits.filter((habit) => habit.completed).length;
}


// Get priority label
export function getPriorityLabel(priority) {
  const priorityLabels = {
    high: "High",
    medium: "Medium",
    low: "Low",
  };

  return priorityLabels[priority] || "Unknown";
}


// Get priority class
export function getPriorityClass(priority) {
  const priorityClasses = {
    high: "priority-high",
    medium: "priority-medium",
    low: "priority-low",
  };

  return priorityClasses[priority] || "";
}


// Calculate goal progress
export function calculateGoalProgress(goals) {
  if (goals.length === 0) {
    return 0;
  }

  const totalProgress = goals.reduce(
    (total, goal) => total + goal.progress,
    0
  );

  return Math.round(totalProgress / goals.length);
}