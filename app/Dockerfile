FROM node:14-alpine
RUN mkdir /app
WORKDIR /app

# Copy package file and install
COPY package*.json /app/
RUN yarn install
# Copy all files and build project
COPY . /app

# Production version
EXPOSE 3000
ENTRYPOINT [ "yarn", "start" ]
