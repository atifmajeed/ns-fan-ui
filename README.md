# NS Fan UI
This is a model Angular based UI that simulates the operation of a ceiling fan using a backend micro service 
([ns-fan-service](https://github.com/atifmajeed/ns-fan-service)). This project uses UI elements from the Government of Nova Scotia UI frameworks: [Forms & Services Building Blocks](https://nova-scotia-digital-service.github.io/service-pattern-library/index.html). 
The UI operates as follows:
- The UI retreives the initial state of the fan from the BE service. The state of the fan comprises its speed and direction. 
- The UI allows controling speed and direction of the fan 
- Speed button increase the speed each time it is clicked
- Speed setting cycles throuh 0, 1, 2, 3 
- If clicked on speed 3, returns to 0 (“off”)
- A toggle swith changes direction from forward to reverse at the current speed setting
- The fan remains in same direction as speeds are cycled, until reversed again.
- The fan status shows its status 'Running' or 'Stopped', current speed, and direction
- Each setting change results in a BE call to presist the current state

The BE service needs to be running for the UI to work properly as the UI uses the service get and save its state.
## Design
Important classes and components follow
* AppComponent - This main component represents front end of the ceiling fan UI
* ToggleSwitchComponent - Displays a slider to switch fan's direction
* CeilingFanService - Calls the BE service API to retreive and save fan state
* FanState - Data model class that captures the state of the fan

## Docker
* A public image of the application is available on the docker hub [atifmajeed/ns-fan-ui:latest](https://hub.docker.com/layers/223856210/atifmajeed/ns-fan-ui/latest/images/sha256-fc3e58b73c53655fac6c53c0cf8ed324af16aaa683989ead1b53901800bbd240?context=repo) to pull and run locally
* `docker pull atifmajeed/ns-fan-ui:latest`
* Run the container: `docker run --rm -d -p 80:80 atifmajeed/ns-fan-ui:latest`
* This project contains a Dockerfile. Run `docker build .` to build the application into a deployable docker image.

## Development environment
To run in the development environment:
* Clone this repository. 
* Install [node](https://nodejs.org/en/download/) and [Angular CLI](https://github.com/angular/angular-cli).
* Run `npm install` inside the application folder
* Run `ng serve` to start a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
## Build
Run `ng build` to build the project locally to deploy the application to a production environment. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
* A unit test file (*.spec.ts) exists corresponding to each component and service in the project
* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). This command will start the browser and run all unit tests
* Run tests with Chrome Headless (for example in build pipeline) `ng test --browsers ChromeHeadless --code-coverage true`. This command will also generate code coverage reports under 'coverage' folder to indicate code covered by the unit tests

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

 ### Reference Documentation
* [Angular](https://angular.io/docs)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.
## Further help

Please feel free to contact me.
