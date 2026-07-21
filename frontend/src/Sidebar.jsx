import { useState, useEffect } from "react";
import "./App.css";

function Sidebar({ page, setPage }) {
  const [email, setEmail] = useState(localStorage.getItem("email"));

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, [page]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setEmail(null);
    setPage("login");
  };

  return (
    <div className="sidebar">

      {/* Logo */}
      <div className="logo">
        <h2>🚀 CareerPilot AI</h2>
        <p>AI Career Assistant</p>
      </div>

      {/* User */}
      {email && (
        <div className="user-box">
          <div className="avatar">👤</div>
          <div>
            <h4>Welcome</h4>
            <p>{email}</p>
          </div>
        </div>
      )}

      {/* Navigation */}

      <button
        className={page === "home" ? "active" : ""}
        onClick={() => setPage("home")}
      >
        🏠 Home
      </button>

      <button
        className={page === "resume" ? "active" : ""}
        onClick={() => setPage("resume")}
      >
        📄 Resume Analyzer
      </button>

      <button
        className={page === "dashboard" ? "active" : ""}
        onClick={() => setPage("dashboard")}
      >
        📊 Dashboard
      </button>

      <button
        className={page === "jobs" ? "active" : ""}
        onClick={() => setPage("jobs")}
      >
        💼 Jobs
      </button>

      <button
        className={page === "interview" ? "active" : ""}
        onClick={() => setPage("interview")}
      >
        🎤 Interview Coach
      </button>

      <button
        className={page === "chat" ? "active" : ""}
        onClick={() => setPage("chat")}
      >
        🤖 AI Chat
      </button>

      <button
        className={page === "history" ? "active" : ""}
        onClick={() => setPage("history")}
      >
        📜 History
      </button>
      
      <button
        className={page === "applications" ? "active" : ""}
        onClick={() => setPage("applications")}
      >
        📋 Applications
      </button>

      <button
        className={page === "cover" ? "active" : ""}
        onClick={() => setPage("cover")}
      >
        📝 Cover Letter
      </button>

      <button
        className={page === "profile" ? "active" : ""}
        onClick={() => setPage("profile")}
      >
        👤 Profile
      </button>

      {/* Login/Register */}

      {!email && (
        <>
          <button
            className={page === "login" ? "active" : ""}
            onClick={() => setPage("login")}
          >
            🔐 Login
          </button>

          <button
            className={page === "register" ? "active" : ""}
            onClick={() => setPage("register")}
          >
            📝 Register
          </button>
        </>
      )}

      {/* Logout */}

      {email && (
        <button className="logout-btn" onClick={logout}>
          🚪 Logout
        </button>
      )}

    </div>
  );
}

export default Sidebar;