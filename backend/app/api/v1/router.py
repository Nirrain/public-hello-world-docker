from fastapi import APIRouter

api_router = APIRouter()

@api_router.get("/hello")
async def hello_world():
    return {"message": "Hello World from FastAPI!"}

@api_router.get("/user")
async def get_user():
    return {"username": "React Admin"}
