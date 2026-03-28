from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Full-Stack Hello World"
    API_V1_STR: str = "/api/v1"
    
    class Config:
        case_sensitive = True

settings = Settings()
