export const goalReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_GOAL':
      return [action.payload, ...state];
    case 'UPDATE_PROGRESS':
      return state.map(g => g.id === action.payload.id ? { ...g, progress: action.payload.progress } : g);
    case 'DELETE_GOAL':
      return state.filter(g => g.id !== action.payload);
    default:
      return state;
  }
};