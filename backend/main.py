from fastapi import FastAPI, UploadFile, File, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import shutil
import os


from ai import ask_ai
from resume_analyzer import extract_resume_text


from database import engine, SessionLocal
from models import Base, User, History, Application
from auth import hash_password, verify_password
from jwt_token import create_token, verify_token
from job_recommender import recommend_jobs
from ats_score import calculate_ats_score
from skill_gap import analyze_skill_gap
from resume_score import calculate_resume_match
from dependencies import get_current_user
from sqlalchemy import func


# Create database tables
Base.metadata.create_all(bind=engine)



app = FastAPI(
    title="CareerPilot AI"
)



# CORS

app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)



# ---------------- HOME ----------------


@app.get("/")
def home():

    return {

        "message":"CareerPilot AI Backend Running 🚀"

    }





# ---------------- CHAT ----------------


@app.post("/chat")
async def chat(data:dict):

    question = data.get("question")


    if not question:

        return {

            "error":"Question required"

        }



    answer = ask_ai(question)



    return {

        "answer":answer

    }





# ---------------- RESUME ANALYZER ----------------


@app.post("/analyze-resume")
async def analyze_resume(
    file: UploadFile = File(...),
    email:str = Depends(get_current_user)
):



    os.makedirs(
        "uploads",
        exist_ok=True
    )


    file_path = f"uploads/{file.filename}"



    with open(file_path,"wb") as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )



    resume_text = extract_resume_text(
        file_path
    )

    ats = calculate_ats_score(resume_text)



    prompt=f"""

You are a professional career coach.

Analyze this resume:

{resume_text}


Give:

1. Skills Found

2. Missing Skills

3. Recommended Job Roles

4. Resume Improvement Suggestions

5. Learning Roadmap

"""



    result = ask_ai(prompt)



    db = SessionLocal()



    history = History(

        user_email=email,

        type="Resume Analysis",

        result=result

    )


    db.add(history)

    db.commit()

    db.close()



    return {

        "filename":file.filename,

        "analysis":result,

        "ats_score": ats["score"],
        "skills_found": ats["found"],
        "missing_skills": ats["missing"]

    }





# ---------------- INTERVIEW COACH ----------------



class InterviewRequest(BaseModel):

    role:str



@app.post("/interview")
async def interview(
    data:InterviewRequest,
    email:str = Depends(get_current_user)
):


    prompt=f"""

You are an expert technical interviewer.

Prepare interview material for:

Role:
{data.role}


Include:

1. Interview Questions

2. Answers

3. Important Topics


"""



    result = ask_ai(prompt)



    db = SessionLocal()



    history = History(

        user_email=email,

        type="Interview Preparation",

        result=result

    )



    db.add(history)

    db.commit()

    db.close()



    return {

        "answer":result

    }





# ---------------- PROFILE ----------------



class ProfileRequest(BaseModel):

    name:str

    email:str

    target_role:str





@app.post("/profile")
async def create_profile(
    data:ProfileRequest
):


    db = SessionLocal()



    user = User(

        name=data.name,

        email=data.email,

        target_role=data.target_role,

        password=hash_password("default123")

    )



    db.add(user)

    db.commit()

    db.close()



    return {

        "message":"Profile saved successfully 🚀"

    }





# ---------------- HISTORY ----------------

@app.get("/history")
async def get_history(
    email:str = Depends(get_current_user)
):

    db=SessionLocal()


    records=db.query(
        History
    ).filter(
        History.user_email == email
    ).all()


    db.close()


    return records





# ---------------- AUTHENTICATION ----------------



class AuthRequest(BaseModel):

    name:str

    email:str

    password:str





# REGISTER


@app.post("/register")
async def register(
    data:AuthRequest
):


    db=SessionLocal()



    existing=db.query(User).filter(

        User.email==data.email

    ).first()



    if existing:

        db.close()

        return {

            "error":"Email already registered"

        }




    user=User(

        name=data.name,

        email=data.email,

        password=hash_password(data.password),

        target_role="Not selected"

    )



    db.add(user)

    db.commit()

    db.close()



    return {

        "message":"Registration successful 🚀"

    }





# LOGIN


@app.post("/login")
async def login(
    data:AuthRequest
):


    db=SessionLocal()



    user=db.query(User).filter(

        User.email==data.email

    ).first()



    db.close()




    if not user:

        return {

            "error":"User not found"

        }




    if not verify_password(

        data.password,

        user.password

    ):

        return {

            "error":"Wrong password"

        }



    return {

        "message":"Login successful 🚀",

        "email":user.email,

        "token":create_token(user.email)


    }

# ---------------- JOB RECOMMENDER ----------------

class JobRequest(BaseModel):
    skills: str

class SkillGapRequest(BaseModel):

    skills: str

    target_role: str
   
@app.post("/jobs")
async def jobs(data: JobRequest):

    result = recommend_jobs(data.skills)

    return result
# ---------------- SKILL GAP ANALYZER ----------------

@app.post("/skill-gap")
async def skill_gap(
    data: SkillGapRequest,
    email:str = Depends(get_current_user)
):


    result = analyze_skill_gap(
        data.skills,
        data.target_role
    )


    db = SessionLocal()


    history = History(

        user_email=email,

        type="Skill Gap Analysis",

        result=str(result)

    )


    db.add(history)

    db.commit()

    db.close()



    return result
# ---------------- RESUME MATCH SCORE ----------------


class ResumeMatchRequest(BaseModel):

    skills:list

    target_role:str

class ApplicationRequest(BaseModel):

    company: str

    role: str

    status: str

    applied_date: str

class CoverLetterRequest(BaseModel):
    name: str
    role: str
    company: str
    skills: str



@app.post("/resume-match")
async def resume_match(
    data:ResumeMatchRequest
):


    result = calculate_resume_match(

        data.skills,

        data.target_role

    )


    return result
# ---------------- DASHBOARD ----------------


@app.get("/dashboard")
async def dashboard(
    email:str = Depends(get_current_user)
):

    db = SessionLocal()


    # Get user profile

    user = db.query(User).filter(
        User.email == email
    ).first()



    if not user:

        db.close()

        return {
            "error":"User not found"
        }



    # Count user history

    history_count = db.query(
        History
    ).filter(
        History.user_email == email
    ).count()



    # Get history types

    analyses = db.query(
        History.type
    ).filter(
        History.user_email == email
    ).all()



    db.close()



    return {


        "name": user.name,


        "email": user.email,


        "target_role": user.target_role,


        "total_analyses": history_count,


        "completed_features":[

            item[0] for item in analyses

        ],


        "career_progress":

            f"{min(history_count * 20,100)}%"


    }
@app.post("/applications")
async def add_application(
    data: ApplicationRequest,
    email: str = Depends(get_current_user)
):

    db = SessionLocal()

    app = Application(
        user_email=email,
        company=data.company,
        role=data.role,
        status=data.status,
        applied_date=data.applied_date
    )

    db.add(app)
    db.commit()
    db.close()

    return {
        "message": "Application added successfully"
    }
@app.get("/applications")
async def get_applications(
    email: str = Depends(get_current_user)
):

    db = SessionLocal()

    apps = db.query(Application).filter(
        Application.user_email == email
    ).all()

    db.close()

    return apps

@app.post("/cover-letter")
async def generate_cover_letter(data: CoverLetterRequest):

    prompt = f"""
Generate a professional cover letter.

Name: {data.name}

Job Role: {data.role}

Company: {data.company}

Skills:
{data.skills}

The letter should be professional, concise, and suitable for a fresher.
"""

    result = ask_ai(prompt)

    return {
        "cover_letter": result
    }