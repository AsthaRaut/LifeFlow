function Settings() {
  return (
    <div className="page">

      <div className="page-header">

        <div>
          <h1>Settings ⚙️</h1>
          <p>Customize your LifeFlow experience.</p>
        </div>

      </div>

      <div className="settings-card">

        <div className="setting-item">

          <div>
            <h3>Notifications</h3>
            <p>Receive reminders for your tasks and habits.</p>
          </div>

          <input
            type="checkbox"
            defaultChecked
          />

        </div>

        <div className="setting-item">

          <div>
            <h3>Daily Reminder</h3>
            <p>Get a daily reminder to review your goals.</p>
          </div>

          <input
            type="checkbox"
            defaultChecked
          />

        </div>

        <div className="setting-item">

          <div>
            <h3>Dark Mode</h3>
            <p>Switch between light and dark appearance.</p>
          </div>

          <input type="checkbox" />

        </div>

      </div>

    </div>
  );
}

export default Settings;