import { useState } from "react";
import "./App.css";

import Sidebar from "./Sidebar";
import StatsCards from "./StatsCards";

import ResumeAnalyzer from "./ResumeAnalyzer";
import Dashboard from "./Dashboard";
import Jobs from "./Jobs";
import Chat from "./Chat";
import InterviewCoach from "./InterviewCoach";
import History from "./History";
import Applications from "./Applications";
import CoverLetter from "./CoverLetter";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";


function App() {

  const [page, setPage] = useState("home");

  const [darkMode, setDarkMode] = useState(false);


  return (

    <div className={darkMode ? "app-container dark" : "app-container"}>


      <Sidebar 
        page={page}
        setPage={setPage}
      />


      <main className="main-content">


        {/* HOME PAGE */}

        {page === "home" && (

          <>


            <div className="hero">


              <div className="hero-left">


                <span className="hero-badge">

                  🚀 AI Powered Career Platform

                </span>



                <h1>

                  Launch Your Dream Career with AI

                </h1>



                <p>

                  Analyze resumes, discover jobs,
                  prepare for interviews,
                  generate AI cover letters,
                  improve skills and track your career journey.

                </p>



                <div className="hero-buttons">


                  <button
                    onClick={() => setPage("resume")}
                  >

                    📄 Analyze Resume

                  </button>



                  <button
                    onClick={() => setPage("jobs")}
                  >

                    💼 Explore Jobs

                  </button>


                </div>



                <button

                  className="theme-btn"

                  onClick={() => setDarkMode(!darkMode)}

                >

                  {
                    darkMode
                    ?
                    "☀️ Light Mode"
                    :
                    "🌙 Dark Mode"
                  }


                </button>


              </div>





              <div className="hero-right">


                <div className="hero-card">


                  <h3>
                    📈 Career Progress
                  </h3>



                  <div className="progress-bar">

                    <div className="progress-fill"></div>

                  </div>



                  <h2>
                    80%
                  </h2>



                  <p>
                    Placement Ready
                  </p>


                </div>





                <div className="hero-card">


                  <h3>
                    ⭐ Platform Features
                  </h3>



                  <p>✔ Resume Analyzer</p>

                  <p>✔ AI Interview Coach</p>

                  <p>✔ Job Finder</p>

                  <p>✔ AI Career Chat</p>

                  <p>✔ Application Tracker</p>


                </div>



              </div>


            </div>





            {/* Statistics */}

            <StatsCards />





            {/* Feature Cards */}


            <div className="feature-grid">



              <div className="feature-card">

                <div className="feature-icon">
                  📄
                </div>

                <h3>
                  Resume Analyzer
                </h3>

                <p>
                  Analyze resume ATS score,
                  missing skills and improvements.
                </p>

                <button
                  className="feature-btn"
                  onClick={()=>setPage("resume")}
                >
                  Open
                </button>

              </div>






              <div className="feature-card">

                <div className="feature-icon">
                  📊
                </div>

                <h3>
                  Dashboard
                </h3>

                <p>
                  Track your career progress
                  and analytics.
                </p>

                <button
                  className="feature-btn"
                  onClick={()=>setPage("dashboard")}
                >
                  Open
                </button>

              </div>







              <div className="feature-card">

                <div className="feature-icon">
                  💼
                </div>

                <h3>
                  Job Finder
                </h3>

                <p>
                  Find AI recommended jobs
                  based on skills.
                </p>


                <button
                  className="feature-btn"
                  onClick={()=>setPage("jobs")}
                >
                  Open
                </button>

              </div>







              <div className="feature-card">

                <div className="feature-icon">
                  🎤
                </div>

                <h3>
                  Interview Coach
                </h3>

                <p>
                  Practice technical and HR interviews.
                </p>


                <button
                  className="feature-btn"
                  onClick={()=>setPage("interview")}
                >
                  Open
                </button>


              </div>







              <div className="feature-card">


                <div className="feature-icon">
                  🤖
                </div>


                <h3>
                  AI Chat
                </h3>


                <p>
                  Ask career and coding questions.
                </p>


                <button
                  className="feature-btn"
                  onClick={()=>setPage("chat")}
                >

                  Open

                </button>


              </div>








              <div className="feature-card">


                <div className="feature-icon">
                  📋
                </div>


                <h3>
                  Applications
                </h3>


                <p>
                  Track job applications and status.
                </p>


                <button
                  className="feature-btn"
                  onClick={()=>setPage("applications")}
                >

                  Open

                </button>


              </div>








              <div className="feature-card">


                <div className="feature-icon">
                  📝
                </div>


                <h3>
                  Cover Letter
                </h3>


                <p>
                  Generate professional cover letters.
                </p>


                <button
                  className="feature-btn"
                  onClick={()=>setPage("cover")}
                >

                  Open

                </button>


              </div>








              <div className="feature-card">


                <div className="feature-icon">
                  👤
                </div>


                <h3>
                  Profile
                </h3>


                <p>
                  Manage your career profile.
                </p>


                <button
                  className="feature-btn"
                  onClick={()=>setPage("profile")}
                >

                  Open

                </button>


              </div>



            </div>



          </>

        )}






        {page === "resume" && <ResumeAnalyzer />}

        {page === "dashboard" && <Dashboard />}

        {page === "jobs" && <Jobs />}

        {page === "chat" && <Chat />}

        {page === "interview" && <InterviewCoach />}

        {page === "history" && <History />}

        {page === "applications" && <Applications />}

        {page === "cover" && <CoverLetter />}

        {page === "profile" && <Profile />}



        {page === "login" && 
          <Login setPage={setPage}/>
        }



        {page === "register" && 
          <Register setPage={setPage}/>
        }



      </main>


    </div>

  );

}


export default App;