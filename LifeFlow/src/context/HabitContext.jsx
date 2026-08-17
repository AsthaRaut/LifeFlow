import { createContext, useContext, useState } from "react";

const HabitContext = createContext();

function HabitProvider({ children }) {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits((previousHabits) => [
      ...previousHabits,
      habit,
    ]);
  };

  const deleteHabit = (habitId) => {
    setHabits((previousHabits) =>
      previousHabits.filter((habit) => habit.id !== habitId)
    );
  };

  const toggleHabit = (habitId) => {
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

  return (
    <HabitContext.Provider
      value={{
        habits,
        addHabit,
        deleteHabit,
        toggleHabit,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
}

export function useHabits() {
  return useContext(HabitContext);
}

export default HabitProvider;