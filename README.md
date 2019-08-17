# docker-location

## Setup

To get the app running in your machine you will need to do a few things:

1.  Sign up for a free **ipstack** account: <https://ipstack.com/signup/free>
1.  Find your ipstack api key: <https://ipstack.com/dashboard>
1.  Setup a `.env` file in the root directory with `IPSTACK_KEY=youripstackapikey`
1.  Sign up for and install **Docker** in your computer: <https://www.docker.com/products/docker-desktop>
1.  Run `docker build -t docker-location .`
1.  Run `docker run -it -p $OPEN_PORT:3000 docker-location` where `$OPEN_PORT` is an available port in your computer

You now have the app installed and running in your computer.

You will also need to expose the port the app is running on to the internet. There are a couple of free services that you can use to achieve this:

1. ngrok -> <https://ngrok.com/>
1. localtunnel -> <https://localtunnel.github.io/www/>

Follow the instructions on how to expose the app to the internet

Connect to the exposed app

Profit.

---

## Exercise

The exercise is about building a dockerized/containerized SERVICE, which would tell the CLIENT which country it is in:

CLIENT makes RESTful-request to the SERVICE (simple GET-request made by the browser is ok).
SERVICE determines CLIENT's country/location. SERVICE must communicate with some free public API available online to do that.
SERVICE sends back the response/web-page to the CLIENT containing CLIENT's country of location.

You have complete freedom of all aspects of the exercise except for the following constraints:

The solution must include Dockerfile allowing us to easily build and start a single Docker container with SERVICE inside. Regular Docker or Docker for Windows are both ok.
The solution must be in the form of git repository with a full history of your commits.
