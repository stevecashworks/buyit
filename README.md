global state for the entire application is managed from "app" level in app.js



whenever links to the backend application changes, the only place to update it is in the "apiEntry.ts" file in the "src" directory 
never redefine apiEntry point any where else in the application  in order to be organized


on the home page, if a token is recognized the data is fetchedb and application state is changed as reducers are dispatched 