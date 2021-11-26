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
import LoadingPage from "./components/LoadingPage";
// import "./playground/promises";

//- let delete unnecessary comment on the app.js
//- run dev-server

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

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

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

//Styling Expensify App
//- Styling Login Page
//- copy bg.jpg and loader.gif onto public/images folder
//- next is to style LoginPage component by open it.
//- open styles/styles.scss
//- create _box-layout.scss partial file inside styles/components folder
//- @import "./components/box-layout" onto styles/styles.scss file remember that underscore _
//and extension .scss is excluded when importing your partial file onto styles.scss.
//- add class selector className="box-layout" onto the root div inside LoginPage.js file
//- open _box-layout.scss partial file for setting up.
//- create a nested div inside the root div in LoginPage.js then add h1 and p tags onto the nested div.
//- add this class selector <div className="box-layout__box"> onto the nested div in the LoginPage.js file.
//- open styles/base/_base.scss then add the following properties onto body element
//color: $dark-grey
//line-height: 1.6;
//- go to styles/base/_settings.scss to create $dark-grey: #333333;

//Styling Buttons
//challenge area
//1. Create new files
//2. Setup selector styles
//3. Setup className on login button
//- solution to the challenge
//- create _button.scss partial file inside styles/components/ folder
//- @import "./components/button; onto styles/styles.scss for accessibility
//- use .button class selector on button tags in LoginPage.js file
//- setup _button.scss partial file
//- create variable $blue: #1c88bf; on _settings.scss and use it inside _button.scss
//- create variable $font-size-large: 1.8rem; on _settings.scss and use it inside _button.scss partial file
//- login onto the app inorder to add more style onto the app.
//- open src/components/Header.js component
//- remove create Expense link on Header.js component, switch NavLink tags to Link and modify Header.js component
//- create _header.scss partial file inside styles/components/ folder
//- @import "./components/header"; onto styles/styles.scss file
//- setup _header.scss partial file
//- create color variable $dark-blue: #364061; in _settings.scss file then use it inside _header.scss partial file.
//- create _content-container partial file in styles/components for justify the entire app
//- @import "./components/content-container"; onto styles/styles.scss
//- setup _content-container.scss file
//- add nested div inside header tags in Header.js component then use content-container class selector inside the nested div tags
//- add inner nested div tags inside the nested div with header__content class selector

//Styling SUmmary Area
//- open components/ExpensesSummary.js component for styling.
//- create _page-header.scss partial file inside styles/components folder
//- @import "./components/page-header"; onto styles/styles.scss file
//- add <div className="page-header"> class selector onto root div tags in ExpensesSummary.js
//- create a nested div tags inside the root div tags with a class selector content-container
//for justifying the content.
//- add page-header__title class selector onto h1 tags and add span tags onto h1 tags inorder
//to bolder some dynamic content.
//- import {Link} from 'react-router-dom'; onto components/ExpensesSummary.js component
//and use it to add create expenses like this <Link to="/create">Add Expense</Link>
//- apply className="button button--link" class selector to the button tags in Header.js component

//Styling List Filters
//- open ExpenseListFilters.js component for styling.
//- reuse content-container class selector on ExpenseListFilters.js root div tags
//- create a nested div tags inside the root div tags then add three div tags inside the nested
//div then copy each input field onto the inner nested div tags
//- add <div className="input-group"> class selector onto the nested div tags and
//<div className="input-group__item"> onto each inner nested div tags in ExpenseListFilters.js
//component
//- create _input-group.scss partial file in styles/components folder
//- @import "./components/input-group"; onto styles/styles.scss

//Styling Inputs
//- create _inputs.scss partial file in styles/styles.scss for styling all the input fields
//- use text-input class selector on the input fields in ExpenseListFilters.js file
//- add universal selector on the styles/_base.scss file like this
// * {
//   box-sizing: border-box; //remove all extra size
// }
//- use select class selector on the select dropdown
//- open ExpenseForm.js component for styling of the input fields.
//- apply text-input class selector onto the input fields on ExpenseForm.js component.
//- apply textarea class selector onto the textarea tags on ExpenseForm.js component.

//Styling Expense Form
//- open AddExpensePage.js component then add nested div tags on to the root div with class selector page-header
//- open ExpenseForm.js component, move the error message into form tags and remove the root div
//- add form class selector onto form tags and form__error class selector onto p tags in the error message area inside ExpenseForm.js component.
//- create _form.scss partial file in styles/components folder
//- @import "./components/form"; onto styles/styles.scss
//- setup _form.scss partial file
//- add content-container class selector on a div tags, wrap ExpenseForm element onto that div in AddExpensePage.js component
//challenge area
//open EditExpensePage.js component then do the following
//1. Setup page header
//2. Setup content contain for the form and remove button
//3. Add modifier on button and button--secondary (bg of #888888)
//- add nested div onto root div in EditExpensePage.js component with content-container class selector
//- add more style onto EditExpensePage.js component
//- open ExpenseForm.js component to change Add Expense button name to Save Expense
//- change the button name from Remove to Remove Expense on EditExpensePage.js component.

//Styling Expenses List: Part I
//- open ExpenseList.js component
//- add content-container class selector onto ExpenseList.js component
//- add nested div inside the root div with three inner nested div tags one div for mobile view and the two other div tags for desktop view
//- create _visibility.scss partial file for styling ExpenseList.js component
//- @import "./components/visibility"; onto styles/styles.scss file
//- setup _visibility.scss partial file
//- create _list.scss partial file in styles/styles.scss
//- @import "./components/list"; in styles/styles.scss file
//- setup _list.scss file
//- use the class selectors of _list partial file in ExpenseList.js component
//- create color variable $off-white: #f7f7f7 inside styles/settings and use it in _page-header.scss and _list.scss file
//- create color variable $grey: #666666; in styles/settings and use in _list.scss partial file
//- open ExpenseListItem.js component where the individual item on the dashboard live for modification

//Styling Expenses List: Part II
//- create font-size $font-size-small: 1.4rem; inside styles/settings/ folder and use it in _list.scss
//- add list-body class selector to div to wrap the {props.expenses.} in ExpenseList.js
//component inorder not to allow the list data touch the footer of the browser.

//Adding Loader
//- styling of loading screen which will display for a very little time before display the main app.
//- open app.js file where we have our loading rendering then comment
//firebase.auth().onAuthStateChanged((user) => { inorder to mannally work on loading page
//- change this ReactDOM.render(<p>Loading...</p>, document.getElementById("app")); to this
//ReactDOM.render(<LoadingPage/>, document.getElementById("app"));
//- import LoadingPage from "./components/LoadingPage"; onto app.js file
//- create LoadingPage.js file inside components/ folder.
//- setup LoadingPage.js component
//- create _loader.scss partial file onto styles/components folder
//- @import "./components/loader"; onto styles/styles.scss
//- setup _loader.scss partial file
//- uncomment firebase.auth().onAuthStateChanged((user) inorder to render the app on the browser.
//- since we have made alot of changes to the app let run the jest test suit like this
// C:\ComputerD\react-course-projects032021\xpensify-app8>yarn test -- --watch
//- almost all the change are snapshot tests, then press u to update snapshot
//- let create test case for LoadingPage.js component
//- create LoadingPage.test.js file inside tests/components folder
//- setup the test case for LoadingPage.test.js file
//- run the jest test suite.

//Babel Polyfill
//- Babel Polyfill will allow your app to run in wider range of browsers and browser versions.
//- on some browser our app will crash becos we are using some new features like some array
//methods, includes method, and etc
//- install babel polyfill like this
//C:\ComputerD\react-course-projects032021\xpensify-app8>yarn add babel-polyfill@6.26.0
//- open webpack.config.js file for modification of entry point like this
// change entry: "./src/app.js", to entry: ['babel-polyfill', "./src/app.js"],
//with this modification babel polyfill allow wide range of browser to access our app becos all
//the es6 and es7 features that we have being using babel polyfill we give support to low
//version of browser to gain access to our app.
//- startup dev-server

//Final Deployment
//- push to both local and remote github repository
//- C:\ComputerD\react-course-projects032021\xpensify-app8>git status
//- C:\ComputerD\react-course-projects032021\xpensify-app8>git add .
//- C:\ComputerD\react-course-projects032021\xpensify-app8>git commit -m "setup firebase Rule"
//- C:\ComputerD\react-course-projects032021\xpensify-app8>git push
//the above command will push to remote git repository
//C:\ComputerD\react-course-projects032021\xpensify-app8>git push heroku main
//the above command will redeploy your app to heroku web hosting site
//- C:\ComputerD\react-course-projects032021\xpensify-app8>heroku open
//its will open your web on this url https://react-expensify19112021.herokuapp.com/
