# TITAN Custom Workout Sharing App

Titan lets you build, customize and share workout plans. The user can choose exercises from the database, or make their own, and share their completed workout with other users by adding them as a member of the workout. Once a user has a workout, they can click play to walk through the exercises in the workout guided by text-to-speach instructions and a handy timer, right in the app. To keep eachother accountable and motivated, users can check the stats for a workout to see how often other members are completing the workout.

The app was built as a final project for the lighthouse Labs Web Development Diploma Program by Jill Aubrey, Michael Davis and Jeremy Buist (links below). The front-end of the app was built with React and almost entirely custom CSS, and the back-end was built with a ruby on rails API server, communicating with axios. The database uses SQLite. The rails database was seeded with a sample of exercises and gifs from the ExerciseDB REST API.

## Final Product

### Home Page

!["home page"](/public/images/homepage.gif?raw=true "home page")

### logging in

!["logging in"](/public/images/logginin.gif?raw=true "logging in")

### Workoutlist Navigation

!["workoutlist navigation"](/public/images/workoutlist?raw=true "workoutlist navigation")

### Adding a Workout

!["adding a workout"](/public/images/addingworkout.gif?raw=true "adding a workout")

### Adding an Exercise

!["adding an exercise"](/public/images/addexercise.gif?raw=true "adding an exercise")

### Creating a Custom Exercise

!["creating an exercise"](/public/images/createexercise.gif?raw=true "creating an exercise")

### Workout Statistics

!["workout statistics"](/public/images/workoutstatistics.gif?raw=true "workout statistics")

### Add a Workout Member

!["add a member"](/public/images/addmember.gif?raw=true "add a member")

### Editing a Workout

!["editing a workout"](/public/images/editworkout.gif?raw=true "editing a workout")

### Completing a Workout

!["completing a workout"](/public/images/completeworkout.gif?raw=true "completing a workout")


## Setup Client

Install dependencies with `npm install`.

## Setup API server

Install dependencies with `bundle install`.

### Running the API Server

```sh
npm start
```


### Running the React Client

```sh
npm test
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```

### Running Jest tests on the Client server

```sh
npm run storybook
```

### Running Rspec Tests in the API server

Cypress requires a global install. This project used version 9.7.0. Once Cypress is installed separatetly, it can be run with:

```sh
npm run cypress
```

```
logging in
Workoutlist Navigation
Adding a Workout
Adding an Exercise
Creating a Custom Exercise
Workout Statistics
Add a Workout Member
Editing a Workout
Completing a Workout
```