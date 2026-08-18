Markdown
# 🧩 LifeFlow: Complete Code & Logic Map

> Ye document LifeFlow app ke saare components, routes, global state, aur CSS variables ka ek complete structural flow diagram aur mapping hai.

---

## 1. 🌊 Global Application Data Flow

```text
                               +------------------------+
                               |    SettingsContext     |
                               | (darkMode, userState)  |
                               +-----------+------------+
                                           |
                                           v
                                   +---------------+
                                   |    App.jsx    |
                                   +-------+-------+
                                           |
                   +-----------------------+-----------------------+
                   |                                               |
                   v                                               v
        +---------------------+                         +---------------------+
        |  document.body CSS  |                         |  <Suspense> Routes  |
        |  (Global Theme)     |                         +----------+----------+
        +---------------------+                                    |
                                          +------------------------+------------------------+
                                          |                        |                        |
                                          v                        v                        v
                                  / (Dashboard)               /tasks                   /settings
                               (Main Analytics)             (Task Logic)           (Toggle Themes)
2. 📁 Folder Structure & File Responsibilities
Plaintext
lifeflow/
├── src/
│   ├── context/
│   │   └── SettingsContext.jsx  ---> [GLOBAL STATE] Dark mode toggles aur global user settings manage karta hai.
│   │
│   ├── components/              ---> [LAYOUT COMPONENTS] Har page par visible hone waale static elements.
│   │   ├── Navbar.jsx           ---> Top header, app logo, and profile badge.
│   │   ├── Sidebar.jsx          ---> Left navigation links (`NavLink` with active states).
│   │   └── Loading.jsx          ---> Fallback UI jab tak lazy page load na ho jaye.
│   │
│   ├── pages/                   ---> [PAGE ROUTES] Code-split views jo `React.lazy` se load hote hain.
│   │   ├── Dashboard.jsx        ---> `/` - Overall progress, quick metrics, aur status view.
│   │   ├── Tasks.jsx            ---> `/tasks` - Task CRUD operations, filters, search.
│   │   ├── Habits.jsx           ---> `/habits` - Daily habits tracker & streak counters.
│   │   ├── Goals.jsx            ---> `/goals` - High-level goals and progress bars.
│   │   ├── Analytics.jsx        ---> `/analytics` - Performance graphs aur status breakdown.
│   │   ├── Journal.jsx          ---> `/journal` - Daily notes & entry logging.
│   │   ├── Profile.jsx          ---> `/profile` - User profile details.
│   │   └── Settings.jsx         ---> `/settings` - Theme switchers & preference controls.
│   │
│   ├── App.jsx                  ---> [CORE ROUTER & SHELL] Main layout shell, route mapping, aur theme DOM injection.
│   ├── main.jsx                 ---> [ENTRY POINT] React DOM Root attach karta hai aur CSS files import karta hai.
│   ├── App.css                  ---> [COMPONENT STYLES] Cards, Layout grids, buttons, aur flex containers.
│   └── index.css                ---> [GLOBAL DESIGN TOKENS] Colors, CSS Variables (`--bg-main`, `--primary`), Dark/Light mode theme values.
3. 🧠 Step-by-Step Feature Logic Trace
A. Dark / Light Mode Switching Flow
Trigger: User /settings page par theme toggle button click karta hai.

Context Update: SettingsContext mein settings.darkMode Boolean update ho jata hai (true ↔ false).

DOM Effect (App.jsx): useEffect trigger hota hai aur document.body par class update karta hai:

If Dark: document.body.classList.add('dark-mode')

If Light: document.body.classList.add('light-mode')

CSS Variable Cascading (index.css):

--bg-main, --bg-surface, --text-main, --border ke values real-time me update hote hain.

Poora app bina re-render hue smoothly color change kar leta hai.

B. Routing & Lazy Loading Execution
Entry Point (main.jsx): App launch hone par App.jsx render hota hai.

Initial Load (App.jsx): Initial load time kam karne ke liye saare pages React.lazy() se dynamic import hote hain:

JavaScript
const Tasks = lazy(() => import('./pages/Tasks'));
Route Navigation: Jab user Sidebar se /tasks click karta hai:

React Router match karta hai: <Route path="/tasks" element={<Tasks />} />

Unloaded chunk download hone tak <Suspense fallback={<Loading />}> render hota hai.

Task component download hote hi screen par mount ho jata hai.

4. ⚡ Quick Reference: Kaunsi File Kahan Edit Karein?
Requirement / Bug	File to Edit	Key Class / Section
Background / Accent Colors badalne hain	src/index.css	:root, body.dark-mode, body.light-mode
Sidebar / Navbar ka layout adjust karna hai	src/App.css	.sidebar, .navbar, .main-layout
Cards ya Buttons over-lapping fix karni hai	src/App.css	.task-card, .card-actions, .btn
Naya Page Route add karna hai	src/App.jsx	Add lazy() import & new <Route>
Dark mode state structure change karna hai	src/context/SettingsContext.jsx	Initial state object & handlers