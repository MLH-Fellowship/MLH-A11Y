FROM node:14-alpine
RUN mkdir /app
WORKDIR /app

# Copy package file and install
COPY package*.json /app/
RUN yarn install
RUN yarn install react-scripts@3.4.1
# Copy all files and build project
COPY . /app

# Production version
# ENTRYPOINT ["serve", "-s", "build", "-l", "80"]
ENTRYPOINT [ "yarn", "run" ]
