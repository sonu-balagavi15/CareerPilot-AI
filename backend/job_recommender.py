def recommend_jobs(skills: str):

    jobs = []

    skills = skills.lower()

    if "python" in skills:
        jobs.append({
            "title": "Python Developer",
            "company": "TCS",
            "location": "Hyderabad"
        })

        jobs.append({
            "title": "Backend Developer",
            "company": "Infosys",
            "location": "Bangalore"
        })

    if "java" in skills:
        jobs.append({
            "title": "Java Developer",
            "company": "Wipro",
            "location": "Pune"
        })

    if "react" in skills:
        jobs.append({
            "title": "Frontend Developer",
            "company": "Accenture",
            "location": "Bangalore"
        })

    if "sql" in skills:
        jobs.append({
            "title": "Data Analyst",
            "company": "Capgemini",
            "location": "Chennai"
        })

    if "ai" in skills or "machine learning" in skills:
        jobs.append({
            "title": "AI Engineer",
            "company": "Microsoft",
            "location": "Remote"
        })

    if len(jobs) == 0:
        jobs.append({
            "title": "Software Engineer",
            "company": "Tech Company",
            "location": "India"
        })

    return jobs