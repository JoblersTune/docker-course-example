# Base image
FROM node:14

# Directory in file system (every container has its own file system)
WORKDIR /app

COPY package.json .

# Install dependencies from package.json file
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port 3000 to outside world. This the port our application is listening on
EXPOSE 3000

# Execute app.mjs with the node command which is available within the node environment that is set up in the container
CMD [ "node", "app.mjs" ]