# 🚀 CareerPilot AI

## AI Powered Career Assistant

CareerPilot AI is a full-stack AI-based career assistant platform that helps students and job seekers improve their career journey using Artificial Intelligence.

It provides resume analysis, ATS scoring, AI interview preparation, skill gap analysis, job recommendations, application tracking, and AI-generated cover letters.

---

## 🌐 Live Demo

Frontend:
https://career-pilot-ai-chi.vercel.app

Backend API Documentation:
https://careerpilot-ai-backend-aktd.onrender.com/docs

GitHub Repository:
https://github.com/sonu-balagavi15/CareerPilot-AI

---

# ✨ Features

## 🔐 Authentication
- User Registration
- Secure Login
- JWT Token Authentication
- Protected User Dashboard

---

## 📄 AI Resume Analyzer

- Upload Resume (PDF/DOCX)
- Extract Resume Content
- ATS Score Calculation
- Identify Skills
- Find Missing Skills
- AI Resume Improvement Suggestions
- Career Roadmap Generation

---

## 📊 Career Dashboard

- User Profile Overview
- Career Progress Tracking
- Completed Activities Tracking
- Resume Analysis History

---

## 🤖 AI Career Chat Assistant

- AI powered career guidance
- Ask career-related questions
- Get personalized suggestions

---

## 🎤 AI Interview Coach

- Generate interview questions
- Provide sample answers
- Prepare for technical interviews
- Role-based interview preparation

---

## 💼 Job Recommendation System

- Skill-based job recommendations
- Suggest suitable career roles
- Helps users identify opportunities

---

## 📈 Skill Gap Analyzer

- Compare current skills with target role
- Identify missing skills
- Recommend learning areas

---

## 📝 Resume Match Score

- Compare skills with job role requirements
- Calculate resume compatibility score

---

## 📋 Application Tracker

- Add job applications
- Track application status
- Maintain career records

---

## ✉️ AI Cover Letter Generator

- Generate professional cover letters
- Customize based on:
  - Name
  - Company
  - Job Role
  - Skills

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- JavaScript
- CSS
- Axios / Fetch API

## Backend

- FastAPI
- Python
- SQLAlchemy
- JWT Authentication

## Database

- SQLite / PostgreSQL

## AI & ML

- AI API Integration
- NLP Resume Processing
- ATS Score Algorithm
- Skill Matching

## Deployment

Frontend:
- Vercel

Backend:
- Render

---

# 📂 Project Structure

```
CareerPilot-AI

│
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ResumeUpload.jsx
│   │   ├── InterviewCoach.jsx
│   │   ├── Jobs.jsx
│   │   ├── CoverLetter.jsx
│   │   └── Applications.jsx
│
├── backend
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   ├── auth.py
│   ├── jwt_token.py
│   ├── resume_analyzer.py
│   ├── ats_score.py
│   ├── skill_gap.py
│   └── job_recommender.py
│
└── README.md
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/sonu-balagavi15/CareerPilot-AI.git

cd CareerPilot-AI
```

---

# Backend Setup

Navigate:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate:

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

# Frontend Setup

Navigate:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Run:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /register | Register User |
| POST | /login | User Login |
| POST | /chat | AI Chat |
| POST | /analyze-resume | Resume Analysis |
| POST | /interview | Interview Preparation |
| POST | /jobs | Job Recommendation |
| POST | /skill-gap | Skill Gap Analysis |
| POST | /resume-match | Resume Match Score |
| GET | /dashboard | Career Dashboard |
| GET | /history | Analysis History |
| POST | /applications | Add Application |
| GET | /applications | View Applications |
| POST | /cover-letter | Generate Cover Letter |

---

# 🎯 Future Enhancements

- AI Resume Builder
- Real-time Job API Integration
- LinkedIn Profile Analyzer
- Voice Interview Practice
- Personalized Learning Recommendations
- Mobile Application

---

# 👩‍💻 Developer

**Sonu Parashuram Balagavi**

Computer Science Engineering Student

GitHub:
https://github.com/sonu-balagavi15

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
