# Dockerized-Service

This project is part of the https://roadmap.sh/projects/dockerized-service-deployment project.

## Set up

After cloning the repository, enter the following commands to build and run the docker file, specifically for the server.js file.

To Build:
```bash
docker build -t dockerizedservice .
```

To Run:
```bash
docker run -p 9000:9000 dockerizedservice 
```
*Note that the second command is not working so use this command to run for now:

```bash
node HelloWorld/server.js
```
