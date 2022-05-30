# NS Fan UI
This is an Angular based UI that simulates the operation of a ceiling fan using a backend micro service 
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
The BE service needs to be running for the UI to work properly.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Design
* AppComponent - This main component the represents front end of the ceiling fan simulation
* ToggleSwitchComponent - Display a slider to switch fan's direction
* CeilingFanService - Calls the BE service API to retreive and save fan state

## Development server

Run `ng serve` in the application folder to start a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
