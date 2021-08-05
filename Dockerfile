FROM python:3.8-slim-buster

# Create directory for portfolio app at root of container
RUN mkdir /api
# Copy requirements to application folder
COPY  requirements.txt /api
# Similar to using 'cd' to a different directory
WORKDIR /api
# Install python dependencies
RUN pip3 install -r requirements.txt
# Copy all files in this project to container
COPY . /api

# Add a .sh file to run commands instead of running them individually
RUN chmod u+x ./entrypoint.sh
ENTRYPOINT ["sh", "./entrypoint.sh"]


# Build container
# $ docker build -t myportfolio:0.0.1 .
# - Make sure to run this in same directory of Dockerfile
# - myportfolio = name of Docker image
# 0.0.1 = tag, not required but recommended
# . = enables COPY, ADD command to have access to files in current dir


# Run container
# docker run -p 81:80 myportfolio:0.0.1