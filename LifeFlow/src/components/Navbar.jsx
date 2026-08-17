function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>🌿</span>
        <h2>LifeFlow</h2>
      </div>

      <div className="navbar-right">
        <button className="notification-btn">
          🔔
        </button>

        <div className="profile">
          <div className="profile-avatar">
            A
          </div>

          <div className="profile-info">
            <span className="profile-name">Astha</span>
            <span className="profile-role">Personal Space</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;