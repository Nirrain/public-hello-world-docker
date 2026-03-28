#!/bin/bash

# Build the frontend
echo "Building Frontend..."
cd frontend
npm install
npm run build
cd ..

# Move built files to backend reachable directory
echo "Preparing static files..."
rm -rf backend/frontend_dist
cp -r frontend/dist backend/frontend_dist

# Install backend dependencies
echo "Installing Backend dependencies..."
cd backend
pip install -r requirements.txt

# Start the application
echo "Starting Application..."
# Railway provides the PORT environment variable
PORT=${PORT:-8000}
uvicorn app.main:app --host 0.0.0.0 --port $PORT
