# Interview Scheduler

Scheduler is a single-page React application that allows a user to book, cancel and track interviews for their weekly schedule. Appointments can be reserved in the application between the hours of 12 PM - 5 PM, Monday to Friday.

The user has the ability to execute the following actions:

- Create and save a new interview, with a student name and selected interviewer
- Edit existing interviews, updating the students name and interviewer
- Delete interviews from the schedule
- View the schedule for each day of the week

The application implements React based components and hooks to create a smooth user experience while the user is interacting with the application. The front end of this application makes requests using AXIOS to a pre-built API to fetch and store appointment data. All components and featured data update in real time based on browser events.

**Author:** [@wheeljust](https://github.com/wheeljust/)

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

## API Testing Server

Fork and clone the API testing server: [scheduler-api](https://github.com/lighthouse-labs/scheduler-api)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
