FROM node:14-alpine
RUN mkdir /app
WORKDIR /app

# Copy package file and install
COPY package*.json /app/
RUN yarn install
COPY . /app

# Production version
RUN yarn global add serve
COPY /build /app/build/

ENTRYPOINT ["serve", "-s", "build", "-l", "80"]
