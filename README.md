# 🚀 CareerPilot AI

<div align="center">

## AI-Powered Career Assistant for Students & Job Seekers

An intelligent full-stack career guidance platform that helps users improve their career readiness using Artificial Intelligence.

[![React](https://img.shields.io/badge/Frontend-React.js-blue?logo=react)](https://react.dev/)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-green?logo=fastapi)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.13-blue?logo=python)](https://python.org/)
[![Database](https://img.shields.io/badge/Database-SQLite-orange?logo=sqlite)](https://sqlite.org/)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel%20%7C%20Render-black)](https://vercel.com/)

</div>


---

# 🌟 Overview

**CareerPilot AI** is an AI-powered career assistant designed for students and job seekers.

The platform provides personalized career support through:

- Resume Analysis
- ATS Score Prediction
- AI Career Guidance
- Interview Preparation
- Job Recommendations
- Skill Gap Analysis
- Resume Matching
- Application Tracking
- AI Cover Letter Generation


---

# 🌐 Live Demo


## 🚀 Frontend

https://career-pilot-q4txgjis3-sonu-balagavi15s-projects.vercel.app


## ⚡ Backend API Documentation

https://careerpilot-ai-backend-aktd.onrender.com/docs


## 💻 GitHub Repository

https://github.com/sonu-balagavi15/CareerPilot-AI


---

# ✨ Features


## 🔐 Authentication

- User Registration
- User Login
- JWT Based Authentication
- Protected Routes
- Secure User Sessions


---

# 📄 AI Resume Analyzer

Upload your resume and get AI-powered feedback.

Features:

- PDF/DOCX Resume Upload
- Resume Text Extraction
- ATS Score Calculation
- Skills Detection
- Missing Skills Identification
- Resume Improvement Suggestions
- Career Roadmap Generation


---

# 📊 Career Dashboard

Provides:

- User Profile Information
- Career Progress Tracking
- Completed Activities
- Resume Analysis History


---

# 🤖 AI Career Chat

AI assistant for:

- Career Guidance
- Technical Questions
- Learning Recommendations
- Personalized Advice


---

# 🎤 AI Interview Coach

Helps candidates prepare for interviews.

Features:

- Role-Based Interview Questions
- Sample Answers
- Technical Topics
- HR Preparation


---

# 💼 AI Job Recommendation System

Provides:

- Skill-Based Job Suggestions
- Suitable Career Roles
- Beginner-Friendly Opportunities


---

# 📈 Skill Gap Analyzer

Analyzes:

- Current Skills
- Target Role Requirements
- Missing Skills
- Learning Suggestions


---

# 📑 Resume Match Score

Compare your resume skills with a target role.

Provides:

- Compatibility Score
- Improvement Suggestions


---

# 📋 Application Tracker

Manage job applications:

- Add Applications
- Track Status
- Store Company Details
- Monitor Job Search Progress


---

# ✉ AI Cover Letter Generator

Generate professional cover letters using:

- Candidate Name
- Company Name
- Job Role
- Skills


---

# 🖼 Screenshots


## 🏠 Home Page

![Home](screenshots/homepage.png)


## 🤖 AI Chat

![AI Chat](screenshots/aichat%20page.png)


## 💼 Job Recommendations

![Jobs](screenshots/job%20page.png)


## 📋 Applications

![Applications](screenshots/application.png)


## 👤 Profile

![Profile](screenshots/profilepage.png)



---

# 🛠 Tech Stack


## Frontend

- React.js
- Vite
- JavaScript
- CSS3
- Fetch API


## Backend

- Python
- FastAPI
- SQLAlchemy
- JWT Authentication
- Passlib


## Database

- SQLite


## Artificial Intelligence

- OpenRouter API
- GPT-4o Mini
- Resume NLP Processing
- ATS Scoring Algorithm
- AI Career Recommendations


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
├── backend
│   │
│   ├── main.py
│   ├── ai.py
│   ├── auth.py
│   ├── jwt_token.py
│   ├── database.py
│   ├── models.py
│   ├── dependencies.py
│   ├── resume_analyzer.py
│   ├── ats_score.py
│   ├── skill_gap.py
│   ├── resume_score.py
│   └── job_recommender.py
│
├── frontend
│   │
│   ├── src
│   │   ├── App.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ResumeAnalyzer.jsx
│   │   ├── Jobs.jsx
│   │   ├── Chat.jsx
│   │   ├── InterviewCoach.jsx
│   │   ├── Profile.jsx
│   │   ├── Applications.jsx
│   │   └── CoverLetter.jsx
│
├── screenshots
│
└── README.md
```


---

# ⚙ Installation


## Clone Repository


```bash
git clone https://github.com/sonu-balagavi15/CareerPilot-AI.git

cd CareerPilot-AI
```


---

# Backend Setup


Navigate to backend:

```bash
cd backend
```


Create virtual environment:

```bash
python -m venv venv
```


Activate environment:


Windows:

```bash
venv\Scripts\activate
```


Install requirements:

```bash
pip install -r requirements.txt
```


Create `.env` file:

```
OPENROUTER_API_KEY=your_api_key
```


Run backend:

```bash
uvicorn main:app --reload
```


Backend:

```
http://127.0.0.1:8000
```


Swagger:

```
http://127.0.0.1:8000/docs
```



---

# Frontend Setup


Go to frontend:

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


Frontend:

```
http://localhost:5173
```



---

# 🔌 API Endpoints


| Method | Endpoint | Description |
|---|---|---|
| POST | /register | Register User |
| POST | /login | Login User |
| POST | /chat | AI Chat |
| POST | /analyze-resume | Resume Analyzer |
| POST | /interview | Interview Coach |
| POST | /jobs | Job Recommendation |
| POST | /skill-gap | Skill Gap Analysis |
| POST | /resume-match | Resume Match Score |
| GET | /dashboard | Dashboard |
| GET | /history | Analysis History |
| GET | /applications | Get Applications |
| POST | /applications | Add Application |
| POST | /cover-letter | Cover Letter Generator |


---

# 🚀 Future Enhancements

- AI Voice Interview
- Resume Builder
- LinkedIn Profile Analyzer
- Real-Time Job API Integration
- Resume Ranking System
- Email Notifications
- AWS Deployment
- Multi-language Support


---

# 🤝 Contributing


Contributions are welcome.

Steps:

1. Fork the repository

2. Create a new branch

```
git checkout -b feature-name
```

3. Commit changes

```
git commit -m "Added new feature"
```

4. Push changes

```
git push origin feature-name
```

5. Create Pull Request


---

# 👨‍💻 Developer


## Sonu Parashuram Balagavi

Bachelor of Engineering  
Computer Science & Engineering


GitHub:

https://github.com/sonu-balagavi15


LinkedIn:

Add your LinkedIn profile link


Email:

sonubalagavi@gmail.com


---

# 🙏 Acknowledgements


- OpenRouter AI
- FastAPI
- React Community
- SQLAlchemy
- Vercel
- Render


---

# ⭐ Support


If you like this project, please give it a ⭐ on GitHub.

Your support motivates further development!


---

# 📜 License


This project is licensed under the MIT License.
