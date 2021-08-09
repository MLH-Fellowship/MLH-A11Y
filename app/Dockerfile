FROM node:16-alpine
RUN mkdir /app
WORKDIR /app

# Copy both package + package-lock files
COPY package*.json /app/
RUN npm install
COPY . /app

ENTRYPOINT ["npm", "start"]
