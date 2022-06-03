# Base image
FROM node:14-alpine

# Create working directory (following commands are relative to here)
WORKDIR /usr/simple-web

# Install project dependencies
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install

# Copy source code
COPY ./index.ts ./

# Default command
CMD ["npm", "start"]