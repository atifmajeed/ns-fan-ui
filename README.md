# NS Fan UI
This is an Angular based model UI that simulates the operation of a ceiling fan using a backend micro service 
([ns-fan-service](https://github.com/atifmajeed/ns-fan-service)). This project uses UI elements from the Government of Nova Scotia UI frameworks: [Forms & Services Building Blocks](https://nova-scotia-digital-service.github.io/service-pattern-library/index.html). 
 The UI operates as follows:
- The UI retrieves the initial state of the fan from the BE service. The state of the fan comprises its speed and direction. 
- User can control speed and direction of the fan 
- Speed button increase the speed each time it is clicked
- Speed cycles through 0, 1, 2, 3 
- If clicked on setting 3, speed returns to 0 (“off”)
- A toggle switch changes direction from forward to reverse at the current speed setting
- The fan remains in same direction as speeds are cycled, until reversed again.
- The fan status shows its status 'Running' or 'Stopped', current speed, and direction
- Each setting change results in a BE call to persist the current state
- UI page will work but show an error if service is down or returns an error
## Design
Important classes and components follow
* AppComponent - This main component represents front end of the ceiling fan UI
* ToggleSwitchComponent - Displays a slider to switch fan's direction
* CeilingFanService - Calls the BE service API to retreive and save fan state
* FanState - Data model class that captures the state of the fan

## Error handling
The UI displays an error message if an error occurs while calling the service or if the service is not available. The user can dismiss the message. It is for demonstration purpose only. The UI will still work without the service. The error message also gets logged on the browser console.
## Docker
* A public image of this application is available on the docker hub [atifmajeed/ns-fan-ui:latest](https://hub.docker.com/layers/223856210/atifmajeed/ns-fan-ui/latest/images/sha256-fc3e58b73c53655fac6c53c0cf8ed324af16aaa683989ead1b53901800bbd240?context=repo) to pull and run locally
* Use docker pull: `docker pull atifmajeed/ns-fan-ui:latest`
* Run the container: `docker run --rm -d -p 80:80 atifmajeed/ns-fan-ui:latest`
* Open http://localhost
* This UI uses an accompanying micro-service [ns-fan-service](https://github.com/atifmajeed/ns-fan-service) 
* This project contains a Dockerfile. To build a local image, run `docker build --tag=ns-fan-ui:latest .` 
## Kubernettes
This project contains deployment.yaml and a service.yaml files to run two pods in a K8 cluster.
## Development environment
To run in the development environment:
* Clone this repository
* Install [node](https://nodejs.org/en/download/) 
* Install [Angular CLI](https://github.com/angular/angular-cli) `npm install -g @angular/cli`
* Run `npm install` inside the application folder
* Run `ng serve` to start a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
## Build
- Build is only needed if you need to deploy to a prod like environment. 
- Run `ng build` to build the project locally. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
* Unit test files (*.spec.ts) exist corresponding to each component and service in the project
* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). This command will start the browser and run all unit tests
* Run tests with Chrome Headless (for example in build pipeline) and create a code coverage report
- `ng test --browsers ChromeHeadless --code-coverage true`. 
- This command will also generate code coverage reports under 'coverage' folder to indicate code covered by the unit tests

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

 ### Reference Documentation
* [Angular](https://angular.io/docs)
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.
## Further help
Please feel free to contact me.
