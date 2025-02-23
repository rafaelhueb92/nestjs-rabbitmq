# Stage 1: Build Stage
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (for npm install)
COPY package*.json ./

# Install all dependencies (including development dependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the NestJS application (compile TypeScript to JavaScript)
RUN npm run build

# Stage 2: Production Stage
FROM node:18 AS production

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the production dependencies from the build stage
COPY --from=build /usr/src/app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the build output from the build stage (dist folder)
COPY --from=build /usr/src/app/dist ./dist

# Expose the port your application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
