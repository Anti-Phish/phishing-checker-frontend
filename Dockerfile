# Stage 1: Build the React app
FROM node:10.19.0 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install -g npm@7.22.0
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app
FROM node:14-alpine

# Install serve globally
RUN npm install -g serve

# Copy the build output from the previous stage
COPY --from=build /app/build /app/build

# Set the working directory
WORKDIR /app

# Expose the port serve will run on
EXPOSE 5000

# Start the app using serve
CMD ["serve", "-s", "build", "-l", "5000"]
