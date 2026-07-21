import { useState } from "react";
import "./Auth.css";
import { apiRequest } from "./api";

function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    setLoading(true);

    try {
      const res = await apiRequest("/login", {
        method: "POST",
        body: JSON.stringify({
          name: "",
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        alert(data.error || "Login failed");
        setLoading(false);
        return;
      }

      // Save JWT token
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);

      alert("✅ Login Successful");

      setPage("home");
    } catch (err) {
      console.error(err);
      alert("Unable to connect to server.");
    }

    setLoading(false);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">🚀</div>

        <h1>Welcome Back</h1>

        <p>Login to continue your AI career journey</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="auth-btn"
          onClick={login}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p>
          Don't have an account?
          <span
            className="auth-link"
            onClick={() => setPage("register")}
          >
            {" "}Create Account
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;