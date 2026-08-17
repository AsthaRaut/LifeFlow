import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-menu">

        <NavLink
          to="/"
          className="sidebar-link"
        >
          <span>🏠</span>
          <span>Dashboard</span>
        </NavLink>


        <NavLink
          to="/tasks"
          className="sidebar-link"
        >
          <span>✓</span>
          <span>Tasks</span>
        </NavLink>


        <NavLink
          to="/habits"
          className="sidebar-link"
        >
          <span>🔥</span>
          <span>Habits</span>
        </NavLink>


        <NavLink
          to="/goals"
          className="sidebar-link"
        >
          <span>🎯</span>
          <span>Goals</span>
        </NavLink>


        <NavLink
          to="/analytics"
          className="sidebar-link"
        >
          <span>📊</span>
          <span>Analytics</span>
        </NavLink>


        <NavLink
          to="/journal"
          className="sidebar-link"
        >
          <span>📝</span>
          <span>Journal</span>
        </NavLink>

      </div>


      <div className="sidebar-bottom">

        {/* <NavLink
          to="/settings"
          className="sidebar-link"
        >
          <span>⚙️</span>
          <span>Settings</span>
        </NavLink> */}

        <NavLink
          to="/tasks"
          className="sidebar-link"
          onClick={() => console.log("TASKS CLICKED")}
        >
          <span>✓</span>
          <span>Tasks</span>
        </NavLink>

      </div>

    </aside>
  );
}

export default Sidebar;