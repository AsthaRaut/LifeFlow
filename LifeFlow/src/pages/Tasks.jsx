import { useState } from "react";
import Button from "../components/Button";
import EmptyState from "../components/EmptyState";

function Tasks() {

  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="page">

      <div className="page-header">

        <div>
          <h1>My Tasks</h1>
          <p>Manage your daily tasks and stay productive.</p>
        </div>

        <Button>
          + Add Task
        </Button>

      </div>


      <div className="task-filters">

        <button
          className={`filter ${activeFilter === "All" ? "active" : ""}`}
          onClick={() => setActiveFilter("All")}
        >
          All
        </button>

        <button
          className={`filter ${activeFilter === "Today" ? "active" : ""}`}
          onClick={() => setActiveFilter("Today")}
        >
          Today
        </button>

        <button
          className={`filter ${activeFilter === "Pending" ? "active" : ""}`}
          onClick={() => setActiveFilter("Pending")}
        >
          Pending
        </button>

        <button
          className={`filter ${activeFilter === "Completed" ? "active" : ""}`}
          onClick={() => setActiveFilter("Completed")}
        >
          Completed
        </button>

      </div>


      <div className="tasks-container">

        <EmptyState
          icon="📝"
          title="Task management is coming"
          message={`Showing ${activeFilter} tasks.`}
        />

      </div>

    </div>
  );
}

export default Tasks;