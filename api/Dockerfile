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
COPY . .
# Add a .sh file to run commands instead of running them individually
RUN chmod u+x entrypoint.sh

EXPOSE 5000
ENTRYPOINT ["sh", "entrypoint.sh"]
