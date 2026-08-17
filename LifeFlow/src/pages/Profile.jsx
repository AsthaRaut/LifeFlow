function Profile() {
  return (
    <div className="page">

      <div className="page-header">

        <div>
          <h1>My Profile 👤</h1>
          <p>Manage your personal information.</p>
        </div>

      </div>

      <div className="profile-card">

        <div className="large-avatar">
          A
        </div>

        <h2>Astha</h2>
        <p>Personal Life Management</p>

        <div className="profile-stats">

          <div>
            <h3>24</h3>
            <p>Tasks</p>
          </div>

          <div>
            <h3>8</h3>
            <p>Habits</p>
          </div>

          <div>
            <h3>5</h3>
            <p>Goals</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;