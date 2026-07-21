def calculate_ats_score(text):

    score = 50

    keywords = [
        "python",
        "java",
        "sql",
        "html",
        "css",
        "javascript",
        "react",
        "django",
        "flask",
        "git",
        "github",
        "project",
        "internship"
    ]

    found = []

    missing = []

    lower = text.lower()

    for skill in keywords:
        if skill in lower:
            score += 4
            found.append(skill)
        else:
            missing.append(skill)

    if score > 100:
        score = 100

    return {
        "score": score,
        "found": found,
        "missing": missing
    }