# TITAN Custom Workout Sharing App

## Index

#### Project Description
#### Project Setup
#### Dependencies
#### Final Product Demonstration (Gifs)

## Project Description

Titan lets you build, customize and share workout plans. The user can choose exercises from the database, or make their own, and share their completed workout with other users by adding them as a member of the workout. Once a user has a workout, they can click play to walk through the exercises in the workout guided by text-to-speach instructions and a handy timer, right in the app. To keep eachother accountable and motivated, users can check the stats for a workout to see how often other members are completing the workout.

The app was built as a final project for the lighthouse Labs Web Development Diploma Program by Jill Aubrey, Michael Davis and Jeremy Buist (links below). The front-end of the app was built with React and almost entirely custom CSS, and the back-end was built with a ruby on rails API server, communicating with axios. The database uses SQLite. The rails database was seeded with a sample of exercises and gifs from the ExerciseDB REST API.

!["workoutlist navigation"](./images/workoutlist.gif?raw=true "workoutlist navigation")

## Project Setup

### Setup Client

Install dependencies:
```sh
npm install
```

### Setup API server

Install dependencies:
```sh
bundle install
```

### Running the API Server

create, load and seed database:
```sh
bin/rails db:reset
```
Then start the server:
```sh
rails s 
```
or from a virtual machine:
```sh
rails s -b 0.0.0.0
```


### Running the React Client

```sh
npm start
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```

### Running Jest tests on the Client server

```sh
npm test
```

### Running RSpec for testing the API server

```sh
rspec
```

## Dependencies

### Client Dependencies
- react
- axios
- sass
- react-spring/web
- classnames
- fontawesome
- mui/material
- lodash
- valid-url
- web-vitals

### API Server Dependencies
- Ruby
- Rails
- SQLite3
- Puma
- Bcrypt
- Bootsnap
- Rack-CORS
- rspec-rails

## Final Product Demonstration

### logging in

!["logging in"](./images/loggingin.gif?raw=true "logging in")

### Workoutlist Navigation

!["workoutlist navigation"](./images/workoutlist.gif?raw=true "workoutlist navigation")

### Adding a Workout

!["adding a workout"](./images/addworkout.gif?raw=true "adding a workout")

### Adding an Exercise

!["adding an exercise"](./images/addexercise.gif?raw=true "adding an exercise")

### Creating a Custom Exercise

!["creating an exercise"](./images/createexercise.gif?raw=true "creating an exercise")

### Add a Workout Member

!["add a member"](./images/addmember.gif?raw=true "add a member")

### Editing a Workout

!["editing a workout"](./images/editworkout.gif?raw=true "editing a workout")

### Completing a Workout

!["completing a workout"](./images/completeworkout.gif?raw=true "completing a workout")

### Automatic Timer for Timed Exercises

!["exercisetimer"](./images/timer.gif?raw=true "exercisetimer")