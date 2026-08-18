export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [action.payload, ...state];
    case 'TOGGLE_TASK':
      return state.map(t => t.id === action.payload ? { ...t, completed: !t.completed } : t);
    case 'DELETE_TASK':
      return state.filter(t => t.id !== action.payload);
    default:
      return state;
  }
};