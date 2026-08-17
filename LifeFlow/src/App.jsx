import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Loading from "./components/Loading";

// Lazy loaded pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Tasks = lazy(() => import("./pages/Tasks"));
const Habits = lazy(() => import("./pages/Habits"));
const Goals = lazy(() => import("./pages/Goals"));
const Analytics = lazy(() => import("./pages/Analytics"));
const Journal = lazy(() => import("./pages/Journal"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        {/* Top Navbar */}
        <Navbar />

        <div className="app-body">

          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="main-content">

            <Suspense fallback={<Loading />}>

              <Routes>

                <Route
                  path="/"
                  element={<Dashboard />}
                />

                <Route
                  path="/tasks"
                  element={<Tasks />}
                />

                <Route
                  path="/habits"
                  element={<Habits />}
                />

                <Route
                  path="/goals"
                  element={<Goals />}
                />

                <Route
                  path="/analytics"
                  element={<Analytics />}
                />

                <Route
                  path="/journal"
                  element={<Journal />}
                />

                <Route
                  path="/profile"
                  element={<Profile />}
                />

                <Route
                  path="/settings"
                  element={<Settings />}
                />

              </Routes>

            </Suspense>

          </main>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;