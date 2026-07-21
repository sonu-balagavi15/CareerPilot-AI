import os
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

API_KEY = os.getenv("OPENROUTER_API_KEY")

if not API_KEY:
    raise ValueError("OPENROUTER_API_KEY is not set.")


def ask_ai(question):
    url = "https://openrouter.ai/api/v1/chat/completions"

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }

    data = {
        "model": "openai/gpt-4o-mini",
        "messages": [
            {
                "role": "user",
                "content": question
            }
        ]
    }

    response = requests.post(
        url,
        headers=headers,
        json=data,
        timeout=30
    )

    response.raise_for_status()

    result = response.json()

    return result["choices"][0]["message"]["content"]