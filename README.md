##### `source` [hackmd.io](https://hackmd.io/nvkpyo3UQTa689uGz373eg)
##### tags: `accessability` `LMS` `education` `tech` `React` `Python` `Flask`
# MLH A11y

Building an interactive learning management system (LMS) that helps expose MLH Fellows to digital accessibility by providing resources and an intro to automated accessibility testing.

### Tech Stack

- Back-end: Python, Flask (API, send back data)
- Front-end: React (API calls)

Database Requirements

- Authentication (Login/Register)
- Progress Counter

LMS Platform Requirements
- Framework
    - Markdown >> React
        - https://github.com/remarkjs/react-markdown
        - https://github.com/markedjs/marked
- At least 3 small Units/Sections
    - Small Unit 1
    	- Alt text (what does a website experience feel like for a screen reader?)
    	- Animations (how to make websites more accessible for people with epilepsy?)
    	- etc.
    - Small Unit 2
        - note
    - Small Unit 3
			- Note

### MLH Requirements

Web Server

- A backend web server that will host the application. This must be written using Python, but you're not limited to Flask.
- You're welcome to have a separate front end written in React and treat the backend as an API, but this is not a requirement. We encourage that you don't do this unless you're confident using React or a similar JavaScript framework.

Database

- This can be any type of database, but bonus points for having it inside of a Docker container. It needs to be running on the same machine, and can't be hosted in the cloud like Firebase.

Container

- You need at least 1 container so the final project is deployed using Docker.
- Bonus points for isolating different components like your web server, database, and NGINX.


CI/CD

- You must use a CI/CD system like GitHub Actions to automatically deploy your container to AWS.
- Bonus points for using CI/CD to run automated tests and linters against your code when you make Pull Requests.

Monitoring

- Your project must have a monitoring system to help you ensure it's operating smoothly. This can be one of the systems covered in Week 6 or something else.

Deployment

- This must be deployed to AWS using a reverse proxy like NGINX.
- Bonus points for hosting it with a domain. You can grab a .tech domain from Domain.comusing the following offer codes:


Sprint 1: AUG21HACK
Sprint 2: MINTCHOCOCHIP
Sprint 3: ICECREAMSUNDAE
Note: the code changes on Fridays. Sprint 2 code will begin on August 6th.
