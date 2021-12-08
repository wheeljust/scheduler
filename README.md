# Interview Scheduler

Scheduler is a single-page React application that allows a user to book, cancel and track interviews for their weekly schedule. Appointments can be reserved in the application between the hours of 12 PM - 5 PM, Monday to Friday.

The user has the ability to execute the following actions:

- Create and save a new interview, with a student name and selected interviewer
- Edit existing interviews, updating the students name and interviewer
- Delete interviews from the schedule
- View the schedule for each day of the week

The application implements React based components and hooks to create a smooth user experience while the user is interacting with the application. The front end of this application makes requests using AXIOS to a pre-built API to fetch and store appointment data. All components and featured data update in real time based on browser events.

A test driven development approach was taken in the creation of this application. The app was tested using the following:

- Jest - unit and integration testing
- Cypress - end-to-end basic user functionality tests

**Author:** [@wheeljust](https://github.com/wheeljust/)

## Stretch Features

- Refactor custom useApplicationData Hook by using useReducer
- Implement the updateSpotsRemaining functionality using reducers

## Final Product

!["App-Interface"](https://github.com/wheeljust/scheduler/blob/master/docs/App-Interface.png?raw=true)
!["App-Edit-Feature"](https://github.com/wheeljust/scheduler/blob/master/docs/App-Edit-Feature.png?raw=true)
!["App-Delete-Feature"](https://github.com/wheeljust/scheduler/blob/master/docs/App-Delete-Feature.png?raw=true)

## Dependencies

- axios: ^0.24.0
- classnames: ^2.2.6
- normalize.css: ^8.0.1
- react: ^16.9.0
- react-dom: ^16.9.0
- react-scripts: 3.0.0

## API Server

For basic app functionality:

- Fork and clone the API testing server: [scheduler-api](https://github.com/lighthouse-labs/scheduler-api)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

- To run all unit and integration tests:

```sh
npm test
```

- To generate a coverage report:

```sh
npm test -- --coverage --watchAll=false
```

## Running Cypress Test Framework

- Prior to running E2E cypress tests:

  1. In a terminal, start the scheduler-api test server

  ```sh
  npm run test:server
  ```

  2. In a second terminal start the Webpack Dev Server for scheduler

  ```sh
  npm start
  ```

  3. In a third terminal, run the cypress test API

  ```sh
  npm run cypress
  ```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
