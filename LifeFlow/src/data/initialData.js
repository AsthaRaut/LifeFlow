export const initialTasks = [
  { id: 1, title: 'Complete React Practice', description: 'Study Context API and useReducer', category: 'Study', priority: 'High', dueDate: '2026-08-20', completed: true },
  { id: 2, title: 'Practice English', description: 'Read 2 articles and speak for 15 mins', category: 'Learning', priority: 'Medium', dueDate: '2026-08-19', completed: false },
  { id: 3, title: 'Morning Exercise', description: '30 mins cardio and stretching', category: 'Health', priority: 'Low', dueDate: '2026-08-18', completed: false }
];

export const initialHabits = [
  { id: 1, name: 'Coding', description: 'Write code for 1 hour daily', icon: '💻', streak: 7, completedToday: true },
  { id: 2, name: 'Reading', description: 'Read 20 pages', icon: '📚', streak: 5, completedToday: false },
  { id: 3, name: 'Meditation', description: '10 mins mindfulness', icon: '🧘', streak: 3, completedToday: false }
];

export const initialGoals = [
  { id: 1, title: 'Become Full Stack Developer', description: 'Learn React, Node, Express & MongoDB', category: 'Career', deadline: '2026-12-31', progress: 65 },
  { id: 2, title: 'Improve Public Speaking', description: 'Practice 2 speeches per week', category: 'Personal', deadline: '2026-10-15', progress: 40 }
];

export const initialJournalEntries = [
  { id: 1, title: 'Great Progress Today', content: 'Focused deeply on React reducers and state context flow.', date: '2026-08-18' }
];

export const initialNotifications = [
  { id: 1, text: 'Welcome to LifeFlow! Start by setting your daily goals.', read: false, time: '10m ago' },
  { id: 2, text: 'You completed your 7-day Coding habit streak! 🔥', read: false, time: '1h ago' }
];

export const initialUser = {
  name: 'Astha',
  email: 'astha@lifeflow.dev',
  avatar: 'A'
};

export const initialSettings = {
  darkMode: false,
  notifications: true,
  dailyReminders: true
};