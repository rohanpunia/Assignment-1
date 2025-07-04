import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">MyApp</div>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/logout">Logout</a>
        </div>
      </nav>

      <div className="dashboard-content">
        <h1>🎉 Welcome to your Dashboard!</h1>
        <p>Enjoy your session ✨</p>
      </div>
    </>
  );
}

export default Dashboard;
