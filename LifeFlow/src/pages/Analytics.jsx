function Analytics() {
  return (
    <div className="page">

      <div className="page-header">
        <div>
          <h1>Analytics 📊</h1>
          <p>Understand your productivity and progress.</p>
        </div>
      </div>

      <div className="analytics-grid">

        <div className="analytics-card">
          <p>Tasks Completed</p>
          <h2>42</h2>
          <span>↑ 12% this week</span>
        </div>

        <div className="analytics-card">
          <p>Habits Completed</p>
          <h2>35</h2>
          <span>↑ 8% this week</span>
        </div>

        <div className="analytics-card">
          <p>Productivity</p>
          <h2>78%</h2>
          <span>↑ 5% this week</span>
        </div>

      </div>

      <div className="chart-card">

        <h2>Weekly Productivity</h2>

        <div className="simple-chart">
          <div style={{ height: "60%" }}>Mon</div>
          <div style={{ height: "80%" }}>Tue</div>
          <div style={{ height: "50%" }}>Wed</div>
          <div style={{ height: "90%" }}>Thu</div>
          <div style={{ height: "70%" }}>Fri</div>
          <div style={{ height: "45%" }}>Sat</div>
          <div style={{ height: "75%" }}>Sun</div>
        </div>

      </div>

    </div>
  );
}

export default Analytics;