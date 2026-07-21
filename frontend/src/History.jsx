import { useEffect, useState } from "react";
import "./App.css";
import { apiRequest } from "./api";

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first.");
        setLoading(false);
        return;
      }

      const response = await apiRequest("/history", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      console.log("History Response:", data);

      if (response.ok) {
        if (Array.isArray(data)) {
          setHistory(data);
        } else {
          setHistory([]);
        }
      } else {
        alert(data.detail || "Failed to load history");
        setHistory([]);
      }
    } catch (error) {
      console.error("History Error:", error);
      setHistory([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2>📜 History</h2>
        <p>View all your previous AI analyses and interview preparations.</p>
      </div>

      {loading ? (
        <div className="card">
          <h3>Loading...</h3>
        </div>
      ) : history.length === 0 ? (
        <div className="card">
          <h3>No history found.</h3>
          <p>
            Analyze a resume or use Interview Coach to generate history.
          </p>
        </div>
      ) : (
        history.map((item, index) => (
          <div className="card" key={item.id || index}>
            <h3>{item.type}</h3>

            <p>
              <strong>User:</strong> {item.user_email}
            </p>

            <hr />

            <div
              style={{
                whiteSpace: "pre-wrap",
                lineHeight: "1.8",
                marginTop: "10px",
              }}
            >
              {item.result}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default History;