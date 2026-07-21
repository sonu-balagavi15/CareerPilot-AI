from jose import jwt, JWTError
from datetime import datetime, timedelta


SECRET_KEY = "careerpilot-secret-key"

ALGORITHM = "HS256"



# Create JWT Token

def create_token(email):

    payload = {

        "email": email,

        "exp": datetime.utcnow() + timedelta(days=1)

    }


    return jwt.encode(

        payload,

        SECRET_KEY,

        algorithm=ALGORITHM

    )




# Verify JWT Token

def verify_token(token):

    try:

        payload = jwt.decode(

            token,

            SECRET_KEY,

            algorithms=[ALGORITHM]

        )


        email = payload.get("email")


        if not email:

            return None


        return email


    except JWTError:

        return None