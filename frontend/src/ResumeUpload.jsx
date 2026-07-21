import { useState } from "react";

function ResumeUpload() {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const uploadResume = async () => {

    if (!file) {
      alert("Please select a resume.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/analyze-resume",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      setResult(data);

    } catch (err) {

      alert("Backend is not running.");

    }

    setLoading(false);

  };

  return (

    <div className="page">

      <div className="card">

        <h2>📄 AI Resume Analyzer</h2>

        <p>
          Upload your resume and receive:
        </p>

        <ul>
          <li>✅ ATS Score</li>
          <li>✅ Skill Analysis</li>
          <li>✅ Missing Skills</li>
          <li>✅ Resume Suggestions</li>
          <li>✅ AI Career Roadmap</li>
        </ul>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          className="primary-btn"
          onClick={uploadResume}
        >
          Analyze Resume
        </button>

      </div>

      {loading && (

        <div className="card">

          <h3>Analyzing Resume...</h3>

        </div>

      )}

      {result && (

        <div className="card">

          <h2>📊 Resume Analysis</h2>

          <h3>ATS Score</h3>

          <div
            style={{
              fontSize: 35,
              color: "#2563eb",
              fontWeight: "bold",
              marginBottom: 20
            }}
          >
            {result.ats_score}%
          </div>

          <h3>Skills Found</h3>

          <ul>
            {result.skills_found?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h3>Missing Skills</h3>

          <ul>
            {result.missing_skills?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h3>AI Analysis</h3>

          <div
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: "1.8"
            }}
          >
            {result.analysis}
          </div>

        </div>

      )}

    </div>

  );

}

export default ResumeUpload;