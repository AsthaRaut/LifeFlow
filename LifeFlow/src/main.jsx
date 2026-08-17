import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import "./App.css";

import TaskProvider from "./context/TaskContext";
import HabitProvider from "./context/HabitContext";
import UserProvider from "./context/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <UserProvider>

      <TaskProvider>

        <HabitProvider>

          <App />

        </HabitProvider>

      </TaskProvider>

    </UserProvider>

  </StrictMode>
);