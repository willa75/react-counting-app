# Counting React App
## Starting the App

### Run with React Server

`npm start` runs the app in the development mode using React's built in server.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Run with Docker

To run with Docker, the app must first be built with `docker build -t counting-app .`.
Afetrwards, the app can be run with `docker run -p 3000:3000 counting-app`.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Future Updates

To improve the application, the following changes could be made:
* Add Kubernetes to app
* Change app to use a namespace to allow updating of numbers (in case counter pressed accidentally)
* Add option to create multiple counters using ulids
* Add backend to keep persistent record of past counts between app restarts (or a reference to the apis persistent record)