import { useEffect, useState } from "react";
import "./App.css";
import { apiRequest } from "./api";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await apiRequest("/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      setDashboard(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!dashboard) {
    return (
      <div className="page">
        <h2>Loading Dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-page">

      <h1>📊 Career Dashboard</h1>

      <p className="dashboard-subtitle">
        Welcome back! Here's your career progress.
      </p>

      {/* Summary Cards */}

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h4>Total Analyses</h4>
          <h2>{dashboard.total_analyses}</h2>
        </div>

        <div className="dashboard-card">
          <h4>Target Role</h4>
          <h2>{dashboard.target_role}</h2>
        </div>

        <div className="dashboard-card">
          <h4>Career Progress</h4>
          <h2>{dashboard.career_progress}</h2>
        </div>

      </div>

      {/* User */}

      <div className="dashboard-info">

        <h2>👤 Profile</h2>

        <p><strong>Name:</strong> {dashboard.name}</p>

        <p><strong>Email:</strong> {dashboard.email}</p>

      </div>

      {/* Progress */}

      <div className="dashboard-info">

        <h2>🚀 Placement Readiness</h2>

        <div className="progress-bar-large">

          <div
            className="progress-fill-large"
            style={{
              width: dashboard.career_progress,
            }}
          ></div>

        </div>

        <h3>{dashboard.career_progress}</h3>

      </div>

      {/* Activities */}

      <div className="dashboard-info">

        <h2>✅ Completed Activities</h2>

        {dashboard.completed_features.length === 0 ? (
          <p>No activities completed yet.</p>
        ) : (
          <ul>
            {dashboard.completed_features.map((item, index) => (
              <li key={index}>✔ {item}</li>
            ))}
          </ul>
        )}

      </div>

    </div>
  );
}

export default Dashboard;