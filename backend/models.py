from sqlalchemy import Column, Integer, String, Text
from database import Base



class User(Base):

    __tablename__ = "users"


    id = Column(
        Integer,
        primary_key=True
    )


    name = Column(
        String
    )


    email = Column(
        String,
        unique=True
    )


    password = Column(
        String
    )


    target_role = Column(
        String
    )




class History(Base):

    __tablename__ = "history"


    id = Column(
        Integer,
        primary_key=True
    )


    user_email = Column(
        String
    )


    type = Column(
        String
    )


    result = Column(
        Text
    )
class Application(Base):

    __tablename__ = "applications"

    id = Column(Integer, primary_key=True)

    user_email = Column(String)

    company = Column(String)

    role = Column(String)

    status = Column(String)

    applied_date = Column(String)