function habitReducer(state, action) {
  switch (action.type) {

    case "ADD_HABIT":
      return [
        ...state,
        action.payload,
      ];

    case "DELETE_HABIT":
      return state.filter(
        (habit) => habit.id !== action.payload
      );

    case "TOGGLE_HABIT":
      return state.map((habit) =>
        habit.id === action.payload
          ? {
              ...habit,
              completed: !habit.completed,
            }
          : habit
      );

    case "UPDATE_STREAK":
      return state.map((habit) =>
        habit.id === action.payload
          ? {
              ...habit,
              streak: habit.streak + 1,
            }
          : habit
      );

    case "RESET_HABITS":
      return state.map((habit) => ({
        ...habit,
        completed: false,
      }));

    default:
      return state;
  }
}

export default habitReducer;