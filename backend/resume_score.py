def calculate_resume_match(skills, target_role):


    role_skills = {

        "Data Analyst":[
            "Python",
            "SQL",
            "Excel",
            "Power BI",
            "Statistics"
        ],

        "Software Developer":[
            "Python",
            "Java",
            "DSA",
            "Git",
            "React"
        ],

        "AI Engineer":[
            "Python",
            "Machine Learning",
            "Deep Learning"
        ]

    }


    required = role_skills.get(
        target_role,
        []
    )


    matched = []


    for skill in skills:

        if skill in required:

            matched.append(skill)



    score = 0


    if required:

        score = int(
            len(matched)
            /
            len(required)
            *
            100
        )



    return {

        "target_role":target_role,

        "matched_skills":matched,

        "match_score":f"{score}%"

    }