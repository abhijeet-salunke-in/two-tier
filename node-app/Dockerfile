# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install cors

# Copy app source
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
