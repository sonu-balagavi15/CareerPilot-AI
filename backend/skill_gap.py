def analyze_skill_gap(skills, target_role):


    required_skills = {

        "Data Analyst":[
            "Python",
            "SQL",
            "Excel",
            "Power BI",
            "Statistics"
        ],


        "Software Developer":[
            "Java",
            "Python",
            "DSA",
            "Git",
            "System Design"
        ],


        "AI Engineer":[
            "Python",
            "Machine Learning",
            "Deep Learning",
            "TensorFlow"
        ]

    }


    required = required_skills.get(
        target_role,
        []
    )


    user_skills = [

        skill.strip()

        for skill in skills.split(",")

    ]


    missing = [

        skill

        for skill in required

        if skill not in user_skills

    ]



    match = int(

        (len(required)-len(missing))

        /

        len(required)

        *100

    ) if required else 0



    return {


        "target_role":target_role,


        "your_skills":user_skills,


        "skill_match":f"{match}%",


        "missing_skills":missing,


        "recommendation":

        "Learn missing skills and build projects."

    }