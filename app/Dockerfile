FROM node:14-alpine
RUN mkdir /app
WORKDIR /app

# Copy both package + package-lock files
COPY package*.json /app/
RUN npm install --only=production
COPY . /app

ENTRYPOINT ["npm", "start"]
