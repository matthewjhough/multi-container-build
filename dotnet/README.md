# Running the application

this is just a boilerplate dotnet application. after running in a docker container, it can be accessed at `http://localhost:8000`. to run with docker-compose, simply type `docker-compose up`.

running via docker container:

```
docker build -t aspnetapp .
docker run -it --rm -p 8000:80 aspnetapp
```
