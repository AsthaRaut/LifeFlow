export const journalReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ENTRY':
      return [action.payload, ...state];
    case 'DELETE_ENTRY':
      return state.filter(e => e.id !== action.payload);
    default:
      return state;
  }
};