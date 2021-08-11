FROM node:14-alpine
RUN mkdir /app
WORKDIR /app

# Copy both package + package-lock files
COPY package*.json /app/
COPY . /app
RUN npm install --only=production

ENTRYPOINT ["npm", "start"]
