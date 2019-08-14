# docker-location

The exercise is about building a dockerized/containerized SERVICE, which would tell the CLIENT which country it is in:

CLIENT makes RESTful-request to the SERVICE (simple GET-request made by the browser is ok).
SERVICE determines CLIENT's country/location. SERVICE must communicate with some free public API available online to do that.
SERVICE sends back the response/web-page to the CLIENT containing CLIENT's country of location.

You have complete freedom of all aspects of the exercise except for the following constraints:

The solution must include Dockerfile allowing us to easily build and start a single Docker container with SERVICE inside. Regular Docker or Docker for Windows are both ok.
The solution must be in the form of git repository with a full history of your commits.
