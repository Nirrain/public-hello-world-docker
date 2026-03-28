import uvicorn
import os
import sys

# Add backend directory to path
sys.path.append(os.path.join(os.path.dirname(__file__), "backend"))

from app.main import app

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    # In production, we assume the frontend is already built into backend/frontend_dist
    uvicorn.run(app, host="0.0.0.0", port=port)
