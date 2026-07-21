import { useState } from "react";

function CoverLetter() {

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");

  const [letter, setLetter] = useState("");

  async function generate() {

    const response = await fetch(
      "http://127.0.0.1:8000/cover-letter",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          role,
          company,
          skills
        })
      }
    );

    const data = await response.json();

    setLetter(data.cover_letter);
  }

  return (
    <div className="page">

      <div className="card">

        <h2>📝 AI Cover Letter Generator</h2>

        <input
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Job Role"
          onChange={(e) => setRole(e.target.value)}
        />

        <input
          placeholder="Company"
          onChange={(e) => setCompany(e.target.value)}
        />

        <textarea
          placeholder="Skills"
          rows="5"
          onChange={(e) => setSkills(e.target.value)}
        />

        <button onClick={generate}>
          Generate Cover Letter
        </button>

      </div>

      {letter && (

        <div className="card">

          <h3>Generated Cover Letter</h3>

          <pre style={{ whiteSpace: "pre-wrap" }}>
            {letter}
          </pre>

        </div>

      )}

    </div>
  );
}

export default CoverLetter;