export const fetchMockAnalytics = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        weeklyActivity: [
          { day: 'Mon', count: 5 },
          { day: 'Tue', count: 7 },
          { day: 'Wed', count: 4 },
          { day: 'Thu', count: 8 },
          { day: 'Fri', count: 6 }
        ],
        efficiencyScore: 78
      });
    }, 500);
  });
};