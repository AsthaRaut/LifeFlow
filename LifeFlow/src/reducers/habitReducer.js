export const habitReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_HABIT':
      return [...state, action.payload];
    case 'TOGGLE_HABIT':
      return state.map(h => {
        if (h.id === action.payload) {
          const done = !h.completedToday;
          return { ...h, completedToday: done, streak: done ? h.streak + 1 : Math.max(0, h.streak - 1) };
        }
        return h;
      });
    case 'DELETE_HABIT':
      return state.filter(h => h.id !== action.payload);
    default:
      return state;
  }
};