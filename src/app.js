import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";
// import "./playground/promises";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

//- open each file that that makeup the expensify app to remove unecessary codes.
//- startup the following
//C:\ComputerD\react-course-projects032021\xpensify-app7>yarn run dev-server
//C:\ComputerD\react-course-projects032021\xpensify-app7>yarn test -- --watch

//Firebase Database
//- performing CRUDE (Creating Updating Deleting) operation with firebase database.

//Getting Firebase
//- go to firebase.google.com to Login or Signup for firebase
//- you most sign-up with your google account
//- click on Go to console
//- Click on Add project
//- Enter your project name: Expensify28102021 and click on Continue button
//- click on Create Project
//- our focus on firebase are Authentication and Realtime Database
//- Firebase database is a no sql database that look like an javascript object which contain properties and values
//- click on Realtime Database, click create database
//- click Rules tab inorder to change the rules from false to true like this
// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
//click on Publish to save the new rules setting
//- click on Project Overview
//- go to Get started by adding Firebase to your app then click on web </>
//- Register app: expensify28102021
//- click on Register app button
//- click on Continue to console
//- click on </> expensify28102021 to view the Firebase configuration settings
//- install firebase like this
//C:\ComputerD\react-course-projects032021\xpensify-app7>yarn add firebase@4.2.0
//- create folder called firebase inside src
//- create firebase.js file inside src/firebase
//- setup firebase.js file by doing the following
//import * as firebase from "firebase";
//const firebaseConfig = {
//   apiKey: "AIzaSyDmkFgQ9tRGIHvig_5wIe2OLMDlFoPb6yo",
//   authDomain: "expensify28102021.firebaseapp.com",
//   databaseURL: "https://expensify28102021-default-rtdb.firebaseio.com",
//   projectId: "expensify28102021",
//   storageBucket: "expensify28102021.appspot.com",
//   messagingSenderId: "69371721834",
//   appId: "1:69371721834:web:9a98ecca16fc85d2753213",
//   measurementId: "G-VJT67FB1TH"
// };
// firebase.initializeApp(firebaseConfig);

//ES6 Promises
//- Promises allow us to do something after a long running task like setting data into firebase.
//- create promises.js file inside src/playground folder
//- import "./playground/promises"; onto app.js inorder to the file on the browser console.

//Promises with Firebase
//- open firebase/firebase.js file to implement promise with firebase.

//Removing Data from Firebase
//- open firebase/firebase.js file to implement remove data from firebase.

//Updating Data
//- open firebase/firebase.js file to implement update data in firebase.

//Fetching Data from Firebase
//- open firebase/firebase.js file to implement fetching data in firebase.

//Array Data in Firebase: Part I
//- open firebase/firebase.js file to implement array in firebase.

//Array Data in Firebase: Part II
//- open firebase/firebase.js file to implement array in firebase.

//Firebase with Redux
//- inorder to connect firebase with redux store we need to implement Asynchronous Redux Action
//- when someone dispatch asynchronous action we shall update both redux store and firebase,
//this will update the user interface (UI) as well.

//Asychronous Redux Action
//- integrate all the firebase methods we have learnt onto redux store which are CRUDE operations.
//- open src/components/actions/expenses.js inorder to convert the Action Generator Function to
//Asynchronous Action Generation Function.
//- install redux-thunk like this
//C:\ComputerD\react-course-projects032021\xpensify-app7>yarn add redux-thunk@2.2.0
//the above redux-thunk library enable us to return function in Action Generator Function instead of object
//- open src/store/configureStore.js file for modification
//- import the following onto configureStore.js file
//import { applyMiddleware, compose } from "redux";
//import thunk from "redux-thunk";
//- change this window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//to
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// composeEnhancers(applyMiddleware(thunk))
//- open firebase/firebase.js file for exporting some predefined methods for the purpose of use
//inorder files
//- open action/expenses.js file for setup the Asynchronous Action Generator Function
//- open components/AddExpensePage.js component to dispatch startAddExpense() Action Generator
//Function instead of addExpense() Action Generator Function
//- open firebase database then clear or delete the data inside it.
//- startup dev-server
//C:\ComputerD\react-course-projects032021\xpensify-app7>npm run dev-server
//- add expense by clicking on Create Expense tab
//- check both the redux store on the Redux tab in the browser and the firebase db you will the
//data their

//Testing Async Redux Actions 1
//- since we have change the Action Generator Function from addExpense() to startAddExpense()
//which is asynchronous Action function we need to modify AddExpensePage.js component.
//- startup the jest test suit like this
//C:\ComputerD\react-course-projects032021\xpensify-app7>yarn test -- --watch
//- you will see some file failing becos of the change we deed to src/components/AddExpensePag.js file
//it is throwing this error TypeError: _this.props.startAddExpense is not a function
//- open src/tests/components/AddExpensePage.test.js file then change all the addExpense()
//Action function to startAddExpense() Action function
//- open src/tests/actions/expenses.test.js file
//- import expenses from "../fixtures/expenses"; onto expenses.test.js file
//- modify this test case "should setup add expense action object with provided values" in
//expenses.test.js file.
//- remove this test case "should setup add expense action object with default values"

//Testing Async Redux Actions 2
//- still on setting up asynchronous test case in tests/actions/expenses.test.js file.

//Creating a Separate Test Database
//- open to see that all the async test case is writing directly to the firebase app database
//and we don't want that we need to create a separate firebase database.
//- install cross-env library for setting environment variable for all operating system like this
//C:\ComputerD\react-course-projects032021\xpensify-app7>yarn add --dev cross-env@5.0.5
//- open package.json file to add cross-env environment variable onto test property of scripts object from this
//"test": "jest --config=jest.config.json",
//to this
//"test": "cross-env NODE_ENV=test jest --config=jest.config.json",
//which means that we are using cross-env NODE_ENV=test environment variable for testing purpose
//only. This environment variable will be set for us by default in production on heroku cloud
//hosting service, we don't need it in development mode.

//- open webpack.config.js file to setup the environment variable.
//- let create two environment files in the root of the application; one for testing and
//the second for the development purpose. The files name are .env.test and .env.development.
//The environment config for production wil be setup on heroku later.
//- copy all the properties and values inside firebaseConfig object onto the two files like this
// apiKey: "AIzaSyDmkFgQ9tRGIHvig_5wIe2OLMDlFoPb6yo",
//   authDomain: "expensify28102021.firebaseapp.com",
//   databaseURL: "https://expensify28102021-default-rtdb.firebaseio.com",
//   projectId: "expensify28102021",
//   storageBucket: "expensify28102021.appspot.com",
//   messagingSenderId: "69371721834",
//   appId: "1:69371721834:web:9a98ecca16fc85d2753213",
//   measurementId: "G-VJT67FB1TH",
//convert the above to inside .env.development
// FIREBASE_API_KEY=AIzaSyDmkFgQ9tRGIHvig_5wIe2OLMDlFoPb6yo
// FIREBASE_AUTH_DOMAIN=expensify28102021.firebaseapp.com
// FIREBASE_DATABASE_URL=https://expensify28102021-default-rtdb.firebaseio.com
// FIREBASE_PROJECT_ID=expensify28102021
// FIREBASE_STORAGE_BUCKET=expensify28102021.appspot.com
// FIREBASE_MESSAGING_SENDER_ID=69371721834
// FIREBASE_APP_ID=1:69371721834:web:9a98ecca16fc85d2753213
// FIREBASE_MEASUREMENT_ID=G-VJT67FB1TH
//- copy the content of .env.development file onto .env.test file then change the properties
//values to point to different database.
//- go to firebase.google.com to create a new firebase database for testing purpose.
//- go to firebase Home Page by clicking on Firbase on the sidebar then click on Add Project
//- after creating db, click on Realtime Database, click on Create Database.
//- click on Rules tab to grant access to all users by changing read and write properties to
//true then click on Publish button.
//- go back to firebase Home Page by click on Firebase then click on </> web inorder to copy
//firebase configuration setting and past it on .env.test and set the value onto the properties
//- install dotenv library to read the environment files like this
//C:\ComputerD\react-course-projects032021\xpensify-app7>yarn add --dev dotenv@4.0.0
//- open webpack.config.js file to use dotenv module like this
// if (process.env.NODE_ENV === "test") {
//   require("dotenv").config({ path: ".env.test" });
// } else if (process.env.NODE_ENV === "development") {
//   require("dotenv").config({ path: ".env.development" });
// }
//- import webpack onto webpack.config.js file like this const webpack = require("webpack");
//- modify plugins property in webpack.config.js file inorder to be able to use the
//firebaseConfig setup in both environment files in bundle.js file like this
// new webpack.DefinePlugin({
//   // 'process.env.FIREBASE_API_KEY': "'process.env.FIREBASE_API_KEY'" //using JSON.stringify() method instead of "''"
//   "process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
//   "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
//   "process.env.FIREBASE_DATABASE_URL": JSON.stringify(process.env.FIREBASE_DATABASE_URL),
//   "process.env.FIREBASE_PROJECT_ID": JSON.stringify(process.env.FIREBASE_PROJECT_ID),
//   "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
//   "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
//   "process.env.FIREBASE_APP_ID": JSON.stringify(process.env.FIREBASE_APP_ID),
//   "process.env.FIREBASE_MEASUREMENT_ID": JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
// }),
//- next is to use the above environmental variable in firebase/firebase.js file like this
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };
//- open tests/setupTests.js for modify inorder to allow our test database to work by adding
//this line of code
//import DotEnv from 'dotenv';
//DotEnv.config({ path: ".env.test" });
//- completely delete both development and test database.
//- startup jest test suit
//- view both db, you will see the test db populated with dummy data while not in the
//development db.

//Heroku Environment Variables
//- We have already setup environment variable on testing and development.
//- next is to setup environment variable in production on heroku command line.
//NODE_ENV is automatically set production on heroku
//- we need to take all the variables setup in .env.development and set it up on heroku for
//production purpose.
//- C:\ComputerD\react-course-projects032021\xpensify-app7>heroku config
//the above command print out all the environment variables on heroku but currently we don't
//have any environment variables, make sure your internet is on while executing the above command.
//- setup firebaseConfig on heroku like this
//C:\ComputerD\react-course-projects032021\xpensify-app7>heroku config:set FIREBASE_API_KEY=AIzaSyDmkFgQ9tRGIHvig_5wIe2OLMDlFoPb6yo
//FIREBASE_AUTH_DOMAIN=expensify28102021.firebaseapp.com
//FIREBASE_DATABASE_URL=https://expensify28102021-default-rtdb.firebaseio.com
//FIREBASE_PROJECT_ID=expensify28102021 FIREBASE_STORAGE_BUCKET=expensify28102021.appspot.com
//FIREBASE_MESSAGING_SENDER_ID=69371721834 FIREBASE_APP_ID=1:69371721834:web:9a98ecca16fc85d2753213
//FIREBASE_MEASUREMENT_ID=G-VJT67FB1TH
//make sure to add space in behind each property and value then press enter when you are done.

//- push to both local and remote github repository
//C:\ComputerD\react-course-projects032021\xpensify-app7>git status
//you will see some files that you don't want to push to github, the .env.test and .env.development.
//open gitignore to ignore those two files from githut, then run git status again.
//C:\ComputerD\react-course-projects032021\xpensify-app6>git commit -am "setup devDependencies and dist folder"
//use the above command where you only have modified files and folder which are not yet committed.
//- C:\ComputerD\react-course-projects032021\xpensify-app6>git push
//the above command will push to remote git repository
//C:\ComputerD\react-course-projects032021\xpensify-app6>git push heroku main
//the above command will redeploy your app to heroku web hosting site
//- C:\ComputerD\react-course-projects032021\xpensify-app6>heroku open
//its will open your web on this url https://react-expensify192021.herokuapp.com/
//- open Network tab in the browser to view that all the assets is server-up from dist folder by hover it.
