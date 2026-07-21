import React, { useState } from "react";
import "./App.css";
import { apiRequest } from "./api";

function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeResume = async () => {
    if (!file) {
      alert("Please select a resume.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await apiRequest("/analyze-resume", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log("Resume Response:", data);

      if (!response.ok || data.error) {
        alert(data.detail || data.error || "Resume analysis failed.");
        setLoading(false);
        return;
      }

      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Unable to connect to backend.");
    }

    setLoading(false);
  };

  return (
    <div className="page">
      <div className="card">
        <h2>📄 AI Resume Analyzer</h2>

        <p>Upload your resume and receive AI-powered feedback.</p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          className="primary-btn"
          onClick={analyzeResume}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </div>

      {result && (
        <div className="card">
          <h2>📊 Resume Analysis</h2>

          <h3>ATS Score</h3>
          <h1>{result.ats_score ?? 0}%</h1>

          <h3>Skills Found</h3>

          {Array.isArray(result.skills_found) && result.skills_found.length > 0 ? (
            <ul>
              {result.skills_found.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p>No skills found.</p>
          )}

          <h3>Missing Skills</h3>

          {Array.isArray(result.missing_skills) && result.missing_skills.length > 0 ? (
            <ul>
              {result.missing_skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p>No missing skills.</p>
          )}

          <h3>AI Analysis</h3>

          <div
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: "1.7",
            }}
          >
            {result.analysis || "No analysis available."}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeAnalyzer;