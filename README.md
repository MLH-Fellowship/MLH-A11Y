##### `source` [hackmd.io](https://hackmd.io/nvkpyo3UQTa689uGz373eg)
##### tags: `accessibility` `LMS` `education` `tech` `React` `Python` `Flask` `Docker` `Grafana` `Prometheus` `cAdvisor` `docker-compose`

# MLH A11y

**App Description:** Building an interactive learning management system (LMS) that helps expose MLH Fellows to digital accessibility by providing resources and an intro to automated accessibility testing.

### Table of Contents

- [Setup/Installation](#SetupInstallation-)
- [Tech Stack](#Tech-Stack-)
  - [Client](#Client)
  - [Web server](#Web-Server)
  - [Database](#Database)
  - [Containers](#Containers)
  - [CI/CD](#CI/CD)
  - [Monitoring](#Monitoring)
  - [Deployment](#Deployment)
- [Issues Encountered](#Issues-Encountered)
- [Authors](#Authors)

## Setup/Installation 🏗

**Required**
1. Install [Docker](https://docs.docker.com/get-docker/)
2. Run `docker-compose up -d --build`
3. Navigate to `http://localhost/` in your browser

**Optional**
1. Navigate to `http://localhost/grafana` to set up Grafana
	- For more info, check out: [Docker monitoring with cAdvisor, Prometheus, and Grafana](https://medium.com/@mertcan.simsek276/docker-monitoring-with-cadvisor-prometheus-and-grafana-adefe1202bf8)

## Tech Stack 🍔

### Client

We primarily used Markdown to create educational content for lessons and structure the majority of the website, which we then rendered into React. The React files are connected through the use of React Router, which allows the user to navigate between pages.

- [**React**](https://reactjs.org/) – main front-end framework
- [**React Markdown**](https://github.com/remarkjs/react-markdown) – render Markdown files in web app
- [**React Router**](https://reactrouter.com/) - allows navigation between different webpages
- [**Bootstrap**](https://getbootstrap.com/) - creates user-friendly components
- [**rehypeRaw**](https://github.com/rehypejs/rehype-raw) - enables inline HTML rendering within Markdown
- [**Axios**](https://github.com/sheaivey/react-axios) – supports get and post requests

### Web Server

For our project, we integrated a Python Flask server that works as an API for sending/receiving data and handling user authentication.

Tech Used
- **Python**
- [**Flask**](https://flask.palletsprojects.com/en/2.0.x/) – API, user auth


**API Endpoints**

User authentication

| HTTP Verb | Endpoint | Description |
| -------- | -------- | -------- |
| `POST`   | /register     | register new user     |
| `POST`   | /login     | login user     |

Other/Misc

| HTTP Verb | Endpoint | Description |
| -------- | --------  | -------- |
| `GET`   | /health    | api health check  |

### Database 

We installed a PostgreSQL database containerized using the PostgreSQL image in the Docker registry. 

- [**PostgreSQL**](https://www.postgresql.org/) – database
- [**Flask SQLAlchemy**](https://flask-sqlalchemy.palletsprojects.com/en/2.x/) – ORM extension for handling our data from Postgre
- [**Flask Migrate**](https://flask-migrate.readthedocs.io/en/latest/) – handles Flask SQLAlchemy database migrations 

User

| Property | Type | Description |
| -------- | -------- | -------- |
| username | string | user's username |
| password | string  | user's password | 


### Containers

In our project, we containerized and isolated necessary components of our application. In addition, we created two different docker-compose files to differentiate production and development. This helped us be more efficient and productive developing in our project. Below is a table that represents the containers, networks, and dependencies of this project (from docker-compose):

| Container Name | Component | Networks | Depends On
| -------- | -------- | -------- | ---- | 
| app   | React app (front-end)| nginx_client | api
| api   | Flask web server| api_db, nginx_api | db
| db    | PostgreSQL db | api_db       | n/a
| nginx | Nginx server | nginx_api, nginx_client, monitoring | n/a
| cadvisor   | Container Monitoring | monitoring   | n/a
| prometheus | Prometheus data gathering | monitoring | cadvisor
| grafana    | Monitoring visualization| monitoring | prometheus

### CI/CD

For our continuous integration, we integrated linting testers for python in our project, docker-build tester, and a deploy workflow (embedded with an endpoint check to verify deployment) and a discord notification for a successful deployment.

- Docker build – test client and web server docker images 
- Linters (ex. `black` and `flake8` for Flask-based backend)
- User authentication endpoint testing (see `test-prod.sh`)
- Deployment – ssh to AWS CentOS instance and deploy app using docker-compose
	- Success/Failure notification through Discord webhook
		<img src="https://i.imgur.com/Y5hXmx5.png" height=300>

| Workflow 			| Run on | Description |
| -------- 			| -------- | -------- |
| docker-build	| push to master/pull request | run docker-build tests |
| linters	| push to master/pull request | run python linters |
| deploy	| push to master | deploy application to AWS |



### Monitoring

For our project, we setup three monitoring tools. We setup cAdvisor, Prometheus, and Grafana. These three monitoring tools depend on one another. The dependency line is as follows: cAdvisor --> Prometheus --> Grafana. Grafana is setup runnin on the `/grafana` endpoint of our application. Monitoring tools endpoints:

- cadvisor: `/cadvsisor`
- grafana: `/grafana`

**Grafana**

<img src="https://i.imgur.com/RGY5fNI.png" height=300>

**cAdvisor**

<img src="https://i.imgur.com/nJu2jl8.png" height=300>

**Prometheus**

<img src="https://i.imgur.com/588I1ty.png" width=600>



### Deployment

MLH-A11y is deployed on t2.medium CentOS Stream 8 EC2 instance hosted on AWS. The domain, [mlha11y.tech](https://mlha11y.tech), was bought and configured on Domain.com, and is secured with [Let's Encrypt](https://letsencrypt.org/) using `certbot-nginx`.

## Issues Encountered

#### Web Server/DB Issues

When building our web server, we had some trouble using requesting data from our markdown files and converting it into React for the different unit pages. However, we got around this by using Axios. We decided to use `axios.get` in order to retrieve the markdown file and set its contents as a variable.

#### Client Issues

In launching our unit-based educational approach, we initially dealt with several barriers in finding appropriate libraries to easily and efficiently render lesson material, videos, and content. We immediately began looking at the options and settled on `react-markdown`, a library by `remarkjs` for rendering markdown files in React. We immediately came across an obstacle: delivering interactive and reactive markdown-based content - a key feature we wanted to implement to ensure that users would be able to get hands-on experience with coding using custom [Repl.it](https://replit.com) exercises. The base implementation of `react-markdown` did not enable us to render inline HTML, but we were able to resolve this issue by utilizing the `rehypeRaw` [package](https://github.com/rehypejs/rehype-raw), allowing us to both style and customize our Markdown templates to a greater degree.

We also had some issues with created protected routes for some of the pages. We originally wanted to have the unit pages only be accessible when logged in, but we kept getting errors that various variables are undefined.


#### Production Issues

We encountered several speed bumps with securing our routing, using `nginx` and Docker, and setting up monitoring tools like Prometheus and Grafana. Early on, the most notable issue was that our project's full dependencies would consistently crash our VM on each `docker-compose up --build` command. As a stop-gap, we had to reboot our t2.micro instance, remove all Docker containers, generated files, volumes, and images, and rebuild. This was a tedious process, but after we received the go-ahead to upgrade our instance to a t2.medium, we were able to resolve other docker-based issues with relative ease.

## Authors

- Guillermo Sanchez – [**@membriux**](https://github.com/membriux)
- Nikhil Vytla - [**@nikhil-vytla**](https://github.com/nikhil-vytla)
- Ashley Ye - [**@ashleyye**](https://github.com/ashleyye)

