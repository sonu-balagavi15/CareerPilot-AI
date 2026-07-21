import { useState } from "react";
import "./App.css";
import { apiRequest } from "./api";

function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
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
        alert(data.error || "Login Failed");
        return;
      }

      // Save JWT Token
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);

      console.log("Saved Token:", data.token);

      alert("✅ Login Successful");

      setPage("home");
    } catch (err) {
      console.error(err);
      alert("Unable to connect to backend.");
    }
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

        <button className="auth-btn" onClick={login}>
          Login
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