import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
// import "./playground/promises";

// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );
// ReactDOM.render(jsx, document.getElementById("app"));

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
//C:\ComputerD\react-course-projects032021\xpensify-app7>heroku config:set
//FIREBASE_API_KEY=AIzaSyDmkFgQ9tRGIHvig_5wIe2OLMDlFoPb6yo
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
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git commit -m "Setup test database environment variables"
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git push
//the above command will push to remote git repository
//C:\ComputerD\react-course-projects032021\xpensify-app7>git push heroku main
//the above command will redeploy your app to heroku web hosting site
//- C:\ComputerD\react-course-projects032021\xpensify-app7>heroku open
//its will open your web on this url https://react-expensify192021.herokuapp.com/
//- test your app to make sure that the input data reside in the firebase.
//- startup the development app as well for testing like this
//C:\ComputerD\react-course-projects032021\xpensify-app7>npm run dev-server

//Fetching Expenses: Part I
//- currently if you refresh the browser on the development app and the deployed app the data
//inserted on db will not re-render, that is why we need to fetch data from db for the purpose
//of re-rendering
//- open src/tests/actions/expenses.test.js file inorder to write test case to insert data onto test firebase like this
// beforeEach((done) => {
//   const expensesData = {};
//   expenses.forEach(({ id, description, note, amount, createdAt }) => {
//     expensesData[id] = { description, note, amount, createdAt };
//   });
//   database.ref("expenses").set(expensesData).then(()=> done());
// });
//- the above beforeEach() method will run before each asynchronous test cases.
//- run jest test suite and open your test db immediately to see how the db data changes.
//- you will see that the dummy expenses array object will be inserted first before asynchronous
//test cases.
//- open src/actions/expenses.js for writing code to fetch data from firebase which is
//setExpenses() Action function
//- write test case for setExpenses Action function in tests/actions/expenses.test.js
//- startup jest test suite.
//- open src/reducers/expenses.js file with its test file counterpart to setup setExpenses
//Action function

//Fetching Expenses: Part II
//- open src/actions/expenses.js for writing code to fetch data from firebase which function is
//startSetExpenses() Async Action function
//- import { startAddExpense } from "./actions/expenses"; onto app.js file
//- using startSetExpenses function to fetch data from firebase on app.js file like this
// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

// //render loading on the browser while the data is stall fetching from firebase
// ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

// store.dispatch(startSetExpenses()).then(() => {
//   ReactDOM.render(jsx, document.getElementById("app")); //once the data is fetched the  render the app
// });
//- startup the dev-server
//- add test case for startSetExpenses() function inside tests/actions/expenses.test.js file.
//- {startSetExpenses} from "../../actions/expenses"; onto expenses.test.js file for use.
//- startup jest test suite

//- push to both local and remote github repository
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git status
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git commit -am "Get firebase expenses on start"
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git push
//the above command will push to remote git repository
//C:\ComputerD\react-course-projects032021\xpensify-app7>git push heroku main
//the above command will redeploy your app to heroku web hosting site
//- C:\ComputerD\react-course-projects032021\xpensify-app7>heroku open
//its will open your web on this url https://react-expensify192021.herokuapp.com/
//- refresh the browser to see that it will still render the same data inside the firebase.

//Remove Expense
//- create of startRemoveExpense Async Action Function inside src/actions/expenses.js file.
//- write the test case for startRemoveExpense Asych Action function inside
//tests/actions/expenses.test.js file and import startRemoveExpense onto expenses.test.js
//- starup jest test suite
//- implement startRemoveExpense into the EditExpensePage component by opening EditExpensePage.js
//file using startRemoveExpense Async Action function in place of removeExpense Action function.
//- open tests/components/EditExpensePage.test.js file inorder to use startRemoveExpense
//Asyn Action function in place of removeExpense Action function.
//- startup dev-server inorder to actually delete one data on firebase db.

//- push to both local and remote github repository
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git status
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git commit -am "Setup startRemoveExpense"
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git push
//the above command will push to remote git repository
//C:\ComputerD\react-course-projects032021\xpensify-app7>git push heroku main
//the above command will redeploy your app to heroku web hosting site
//- C:\ComputerD\react-course-projects032021\xpensify-app7>heroku open
//its will open your web on this url https://react-expensify192021.herokuapp.com/

//Update Expense
//- create of startEditExpense Async Action Function inside src/actions/expenses.js file.
//- write the test case for startEditExpense Asych Action function inside
//tests/actions/expenses.test.js file and import startEditExpense onto expenses.test.js
//- starup jest test suite
//- implement startEditExpense into the EditExpensePage component by opening EditExpensePage.js
//file using startEditExpense Async Action function in place of editExpense Action function.
//- open tests/components/EditExpensePage.test.js file inorder to use startEditExpense
//Asyn Action function in place of editExpense Action function.
//- starup jest test suite
//- startup dev-server inorder to actually edit one data on firebase db.

//- push to both local and remote github repository
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git status
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git commit -am "Add startEditExpense"
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git push
//the above command will push to remote git repository
//C:\ComputerD\react-course-projects032021\xpensify-app7>git push heroku main
//the above command will redeploy your app to heroku web hosting site
//- C:\ComputerD\react-course-projects032021\xpensify-app7>heroku open
//its will open your web on this url https://react-expensify192021.herokuapp.com/

//Firebase Authentication
//- we shall use Authentication to make user to login onto the app before they can use the app.
//An expenses created by user A will not be visible by user B.

//Login Page and Google Authentication
//- Challenge area
//1. Create LoginPage component with "Login" button.
//2. Add snapshot test for LoginPage.
//3. Show Login component at root of app -> /
//4. Show ExpenseDashboardPage after login -> /dashboard
//- create LoginPage.js in src/components/ folder and set it up.
//- create LoginPage.test.js in src/tests/components/ folder and set it up.
//- startup jest test suite
//- startup dev-server
//- open routers/AppRouter.js inorder to change the root app from ExpenseDashboardPage component to LoginPage component
//- import { LoginPage } from "../components/LoginPage"; onto routers/AppRouter.js file like this
//<Route path="/" component={LoginPage} exact={true} />
//<Route path="/dashboard" component={ExpenseDashboardPage} exact />
//- refresh the browser to view the Login button
//- go http://localhost:8080/dashboard to view the dashboard page
//- go to firebase.google.com to enable firebase Authentication
//- click on Authentication, click on Get started, click on Sign-in method, click on Google,
//click on Enable.
//- open firebase/firebase.js file to setup Authentication configuration and export it as a
//named export.
//- Tracking of Authentication by import { firebase } from "./firebase/firebase"; onto app.js file
//auth()-> use to geting Authentication related functionalities
//onAuthStateChanged()-> its fired when the state of authencation changes, meaning when user get authenticated its fired and when user is unauthenticated its fired as well.
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log("log in");
//   } else {
//     console.log("log out");
//   }
// });
//- create file auth.js inside src/actions folder for setting up authentication then create
//startLogin Async Action function.
//- iimport {firebase, googleAuthProvider } from "../firebase/firebase" onto actions/auth.js
//- reopen LoginPage.js file to connect the component to redux store and use startLogin() Async Action Function
//- import the following onto LoginPage.js file
// import { connect} from 'react-redux';
// import { startLogin } from "../actions/auth";
//- open AppRouter.js file to change LoginPage from named export to default export like this
//import { LoginPage } from "../components/LoginPage";
//to this
//import LoginPage from "../components/LoginPage"; becos we are importing the connected
//component
//- startup dev-server, refresh the browser and open the browser console you will view log out
//on the browser console.
//- click on Login button, its will render a dialogue box for you to enter email and password
//then it will change the authentication status from log out to log in.
//- if you are seeing the above login on to browser console its means you have already setup
//the authentication but we are not using yet. If you refresh the browser again you will still see login

//Log Out
//- src/components/Header.js to add the LogOut button
//- open src/actions/auth.js file to create startLogout Async Action Function for logging out
//the user from the app.
//- re-open src/components/Header.js inorder to connect the component to redux store and import
//startLogout Async Action function for use.
//- import the following
//import {connect} from 'react-redux';
//import { startLogout } from "../actions/auth";
//- remember to export the Header unconnected component.
//- startup dev-server
//- click on Log out button to logout of the app
//- open tests/components/Header.test.js file for creating test case
//- change the Header import on Header.test.js from default export to named export becos we
//cannot test the Header connected component like this
// from import Header from "../../components/Header";
// to this import {Header} from "../../components/Header";
//- modify the test case in Header.test.js
//- startup jest suite
//- open tests/components/LoginPage.test.js to add new test case with title of
//"should call startLogin on button click".

//Redirecting Login or Logout
//- install history library like this
//C:\ComputerD\react-course-projects032021\xpensify-app7>yarn add history@4.7.2
//the above library will enable us to redirect to any page.
//- import createHistory from "history/createBrowserHistory";  and use it on AppRouter.js file
//lik this by creating
//export const history = createHistory(); we export it for use in other file.
//switching from <BrowserRouter> to <Router history={history}> with history as a props
//- import history onto app.js file for use like this
//import AppRouter, { history } from "./routers/AppRouter";
//- use history inside onAuthStateChanged() method
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log("log in");
//   } else {
//     // console.log("log out");
//     history.push("/"); //"/" is the LoginPage
//   }
// });
//-startup dev-server
//- click on Login, manually go to http://localhost:8080/dashboard then click on Logout button its will take you to Home Page.
//- is to make sure that is already existing users that their is expenses is fetched from db by cutting
// store.dispatch(startSetExpenses()).then(() => {
//   ReactDOM.render(jsx, document.getElementById("app"));
// });
// and pasting it inside if statement of onAuthStateChanged() method
//- cutting ReactDOM.render(jsx, document.getElementById("app")); and past it inside else block
//of onAuthStateChanged() method inorder to render the logout page on logging out else its will
//render loading... only

// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

// ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch(startSetExpenses()).then(() => {
//       ReactDOM.render(jsx, document.getElementById("app"));
//     });
//   } else {
//     ReactDOM.render(jsx, document.getElementById("app"));
//     history.push("/");
//   }
// });

//Avoid duplicate ReactDOM.render(jsx, document.getElementById("app")); code on bothe if and
//else statement of onAuthStateChanged() method by creating renderApp() function
// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById("app"));
//     hasRendered = true;
//   }
// };

// ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch(startSetExpenses()).then(() => {
//       renderApp();
//       //history.location.pathname === "/" means redirect user to dashboard if the user is already on LoginPage
//       if (history.location.pathname === "/") {
//         history.push("/dashboard");
//       }
//     });
//   } else {
//     renderApp();
//     history.push("/");
//   }
// });
//- test your app by startup dev-server

//The Auth Reducer
//- if user logout, the user still have access to Create Expense tab on the app in the browser
//to avoid this we need to store some information related to user authentication to redux store
//inorder to keep track wheither the user is login or not by storing userId onto redux store.
//- We have access to user id from the user argument pass to onAuthStateChanged() method like this
// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById("app"));
//     hasRendered = true;
//   }
// };

// ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log("uid", user.uid);
//     store.dispatch(startSetExpenses()).then(() => {
//       renderApp();
//       if (history.location.pathname === "/") {
//         history.push("/dashboard");
//       }
//     });
//   } else {
//     renderApp();
//     history.push("/");
//   }
// });
//- Login onto app, open browser console to view the user id like this: uid- Z2boILCFbUWevX799y3UoDXFOA92
//we shall use the user id to check wheither user is login or not.
//- create reducer for authentication
//- create auth.js file inside src/reducers/ folder for setting up user authentication
//- create login and logout Action Generator Function onto src/actions/auth.js
//- connect the authReducer to redux store by open src/store/configureStore.js file
//- import authReducer from "../reducers/auth"; onto store/configuerStore.js file for use
//- add authReducer onto combineReducers like this
//combineReducers({
//   expenses: expensesReducer,
//   filters: filtersReducer,
//   auth: authReducer,
//}),
//- let dispatch login and logout Action Generator Function in app.js file
//dispatch login Action Generator when the user login and dispatch logout when the user logout
//on app.js file
//- import { login, logout } from "./actions/auth"; onto app.js file for dispatching to redux
//store like this
const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // console.log("uid", user.uid);
    store.dispatch(login(user.uid)); //dispatching login
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout()); //dispatching logout
    renderApp();
    history.push("/");
  }
});
//let startup dev-server and use Redux dev tool in the browser tab to track the changes.
//- let write test cases for login Action Function, logout Action Function and authReducer function
//- create auth.test.js file inside tests/reducers folder
//- import authReducer from '../../reducers/auth'; onto auth.test.js file
//- setup the test cases
//- startup jest test suite
//- create auth.test.js inside tests/actions/ folder
//- import { login, logout } from "../../actions/auth"; onto tests/actions/auth.test.js file

//Private Only Routes
//- we are going to modify routers/AppRouter.js inorder to allow only those who are login to
//navigate on the routes by using PrivateRoute component.
//- create PrivateRoute.js inside src/routers/ folder
//- setup PrivateRoute.js component
//- open routers/AppRouter.js file for modification
//- import PrivateRoute from "./PrivateRoute"; onto AppRouter.js file
//- using the imported PrivateRoute component, change these Route components from
// <Route path="/dashboard" component={ExpenseDashboardPage} exact />
// <Route path="/create" component={AddExpensePage} exact />
// <Route path="/edit/:id" component={EditExpensePage} exact />
//to these
// <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact />
// <PrivateRoute path="/create" component={AddExpensePage} exact />
// <PrivateRoute path="/edit/:id" component={EditExpensePage} exact />

//- push to both local and remote github repository
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git status
//C:\ComputerD\react-course-projects032021\xpensify-app7>git commit -am "Add private routes"
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git push
//the above command will push to remote git repository
//C:\ComputerD\react-course-projects032021\xpensify-app7>git push heroku main
//the above command will redeploy your app to heroku web hosting site
//- C:\ComputerD\react-course-projects032021\xpensify-app7>heroku open
//its will open your web on this url https://react-expensify192021.herokuapp.com/

//Public Only Routes
//- After login onto the app we can still navigate back to login page by clicking on Dashboard
//tab on the Dashboard Page which is a bad user experience, let fix it by creating publicRoute
//component like the privateRoute component.
//- create PublicRoute in routers/PublicRoute
//- copy the content of copying PrivateRoute component onto PublicRoute
//- remove the Header component on PublicRoute with it usage and modify the PublicRoute component
//- import PublicRoute from "./PublicRoute"; onto AppRouter.js file.
//- change the component below to PublicRoute
// <Route path="/" component={LoginPage} exact={true} />
//- remove help Route on AppRouter.js file with its usage and delete the component file in
//src/components/HelpExpensePage.js
//- go back to click on Dashboard tab it redirect you to Dashboard page not login page.
//- open components/Header.js component for modification
//- change this on the Header.js component
//<NavLink to="/" activeClassName="is-active" exact={true}>
//   Dashboard
//</NavLink>
//to this
//<NavLink to="/dashboard" activeClassName="is-active">
//   Dashboard
//</NavLink>

//Private Firebase Data
//- its means that each user can create and manage their own data inside firebase db by setting
//the RULES.
//- open firebase.google.com, click Realtime Database to view the current structure of your db.
//- this is how the currect db structure like
// const db = {
//   expenses: {
//     asdd234: {
//       description: "rent",
//       amount: 3445,
//       note: "I paid rent in 2020",
//       createdAt: 23890019292933,
//     },
//   },
// };
//this is how the db structure will be inorder to manage individual user expenses
// const db = {
//   users: {
//     uidspiipp: {
//       expenses: {
//         asdd234: {
//           description: "rent",
//           amount: 3445,
//           note: "I paid rent in 2020",
//           createdAt: 23890019292933,
//         },
//       },

//     },
//   },
// };
//- open src/actions/expenses.js
//- let add user to the root of the ref() to all our Async Action Generator Function
//- open tests/actions/expenses.test.js to modify all the Asyn Action Generator Function to
//write and read data from the right location in the firebase by creating fake uid like this
//const uid = "thisismytestuid"; and use it in the root ref() method
//const defaultAuthState = { auth: { uid } };
//- startup jest test suit
//- the issue now is that the data is not yet private to individual user, its still access to
//all the users.
//- to make the data in db private will need to resetup the firebase RULE do this
// {
//   "rules": {
//     ".read": false,
//     ".write": false,
//       "users":{
//         "$user_id":{
//           ".read": "$user_id === auth.uid",
//             ".write":"$user_id === auth.uid"
//         }
//       }
//   }
// }
//then click on Publish button
//- Rules Playground to test the RULE you setup in firebase db

//- push to both local and remote github repository
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git status
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git add .
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git commit -m "Store user data in user area"
//- C:\ComputerD\react-course-projects032021\xpensify-app7>git push
//the above command will push to remote git repository
//C:\ComputerD\react-course-projects032021\xpensify-app7>git push heroku main
//the above command will redeploy your app to heroku web hosting site
//- C:\ComputerD\react-course-projects032021\xpensify-app7>heroku open
//its will open your web on this url https://react-expensify192021.herokuapp.com/

//Data Validation and Deployment
//- validating the data store in the firebase db.
//- the above object is from firebase RULE setting indicating that you can only write to
//expenses array of object alone.
// "$other":{
//   ".validate": false
// }
//- to test the above validation click on Rules Playground button
//- on the Rules Playground
//- turn on the Authenticated
//- Location: /users/3d0e8f52-8760-456d-b3c8-0dd32cec027d/test
//in the above users means the specfic part of the db the user is using
//3d0e8f52-8760-456d-b3c8-0dd32cec027d is the userId copied UID in the Rule Playground
//test is a fake db area where the data is store and the will lead to returning error
//change Location lable to this
//- Location: /users/3d0e8f52-8760-456d-b3c8-0dd32cec027d/expenses
//the above will pass becos expenses is the real area in db where data is stored.
//- below is the complete RULE setup with the validation of data in the firebase
// {
//   "rules": {
//     ".read": false,
//     ".write": false,
//       "users":{
//         "$user_id":{
//           ".read": "$user_id === auth.uid",
//             ".write":"$user_id === auth.uid",
//               "expenses":{
//                 "$expense_id":{
//                   ".validate": "newData.hasChildren(['description', 'note', 'amount', 'createdAt'])",
//                     "description":{
//                       ".validate": "newData.isString() && newData.val().length > 0"
//                     },
//                     "note":{
//                       ".validate": "newData.isString()"
//                     },
//                     "amount":{
//                       ".validate": "newData.isNumber()"
//                     },
//                     "createdAt":{
//                       ".validate": "newData.isNumber()"
//                     },
//                     "$other":{
//                 			".validate": false
//               			}
//                 }
//               },
//               "$other":{
//                 ".validate": false
//               }
//         }
//       }
//   }
// }
//- click on published button once your done RULE setup.
