from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jwt_token import verify_token

# Bearer Authentication
security = HTTPBearer()


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security)
):
    try:
        # Print received Authorization header
        print("\n========== AUTH DEBUG ==========")
        print("Scheme:", credentials.scheme)
        print("Token:", credentials.credentials)

        token = credentials.credentials

        # Verify JWT Token
        email = verify_token(token)

        print("Decoded Email:", email)
        print("================================\n")

        if email is None:
            raise HTTPException(
                status_code=401,
                detail="Invalid Token"
            )

        return email

    except Exception as e:
        print("\n========== AUTH ERROR ==========")
        print(e)
        print("================================\n")

        raise HTTPException(
            status_code=401,
            detail="Authentication Failed"
        )