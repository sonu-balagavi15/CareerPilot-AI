import { useState } from "react";
import "./App.css";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const saveProfile = async () => {
    try {
      await fetch("http://127.0.0.1:8000/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          target_role: role,
        }),
      });

      alert("✅ Profile Saved Successfully");
    } catch (err) {
      alert("Backend Error");
    }
  };

  return (
    <div className="profile-page">

      <div className="profile-header">

        <div className="profile-avatar">
          👩‍💻
        </div>

        <div>
          <h1>My Profile</h1>
          <p>Manage your CareerPilot AI account</p>
        </div>

      </div>

      <div className="profile-grid">

        <div className="profile-card">

          <h2>Personal Information</h2>

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <select
            value={role}
            onChange={(e)=>setRole(e.target.value)}
          >

            <option value="">Select Target Role</option>

            <option>Software Engineer</option>

            <option>Frontend Developer</option>

            <option>Backend Developer</option>

            <option>Full Stack Developer</option>

            <option>Data Analyst</option>

            <option>AI Engineer</option>

          </select>

          <button
            className="save-btn"
            onClick={saveProfile}
          >
            Save Profile
          </button>

        </div>

        <div className="profile-card">

          <h2>Career Summary</h2>

          <div className="summary-item">

            <span>Name</span>

            <strong>
              {name || "Not Set"}
            </strong>

          </div>

          <div className="summary-item">

            <span>Email</span>

            <strong>
              {email || "Not Set"}
            </strong>

          </div>

          <div className="summary-item">

            <span>Target Role</span>

            <strong>
              {role || "Not Selected"}
            </strong>

          </div>

          <hr />

          <h3>Skills</h3>

          <div className="skill-badges">

            <span>Python</span>

            <span>React</span>

            <span>FastAPI</span>

            <span>SQL</span>

            <span>AI</span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;