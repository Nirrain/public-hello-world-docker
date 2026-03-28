FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package.json .
# Note: In a real environment, we would run 'npm install' here.
# For this demonstration, we assume the user will run it or use volumes.
# RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Run development server
CMD ["npm", "run", "dev"]
