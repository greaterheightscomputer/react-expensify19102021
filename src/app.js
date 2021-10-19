import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

//- open all your component one after the order remove all unnecessary comments.
//- startup jest test suite like this
// C:\ComputerD\react-course-projects032021\xpensify-app6>yarn test -- --watch
//- startup dev-server
// C:\ComputerD\react-course-projects032021\xpensify-app6>npm run dev-server

//Deploying your apps
//Installing Git
//- Git is a free and open source distributed version control system designed to handle from
//small to very large projects speed and efficiency.
//- open terminal the run this command
//C:\ComputerD\react-course-projects032021\xpensify-app6>git --version
//- its will return git version 2.21.0.windows.1
//- if you see the above output its mean you have already install git before, if you don't see
//the above output then google search git-scm.com, click on Download button choice based on your
//operating system.
//- after Downloading and installing Git then check the version again like this
//C:\ComputerD\react-course-projects032021\xpensify-app6>git --version

//How GitHub Work
//- Initial our project with Git inorder to create either local or remote repository.
//A repository is a git folder that is created on your project implicitly by initializing git.
//- Untracked Files-> immediately we initalize git on our project, we will have all our files
//converted to untracked files.
//- Staged Changes-> when issue git add. command, its will move all the untracked files to
//Stage changes level.  Staged changes is still not track by git but let you build up your
//stage for saving or commiting.
//- Commits-> when issue git commit -m "project", its permanently save your files to either
//local or remote git repository. Its will generate a code like 1ab49 which mean will have a
//track files
//- Unstaged Changes-> its contain the modify files that git have being tracking. We need to
//use git add . command to move files from unstage changes to stage changes.

//Integrating Git into our Project
//- initialize our project with git from the root of your project like this
// C:\ComputerD\react-course-projects032021\xpensify-app6>git init
//its return this Initialized empty Git repository in C:/ComputerD/react-course-projects032021/xpensify-app6/.git/
//- open your project on the file explore to view the .git folder which is the local repository
//on your system.
//- C:\ComputerD\react-course-projects032021\xpensify-app6>git status
//the above command will move all your project files to untracked files
//- create file called .gitignore in the root folder of your project
//- sometime the file may be created automatically for you by vscode
//- .gitignore file is use to add files or folders that you did not want to push to either
//local or remote github
//- add node_modules/ onto the .gitignore file inorder not to push this folder to github beco's
//its can be easily regenerated.
//re-run C:\ComputerD\react-course-projects032021\xpensify-app6>git status
//to view the untracked files
//- move our files from untracked files to stage changes area by typing this command
//C:\ComputerD\react-course-projects032021\xpensify-app6>git add package.json
//the above command move only one single file to stage changes area
//- re-run C:\ComputerD\react-course-projects032021\xpensify-app6>git status
//C:\ComputerD\react-course-projects032021\xpensify-app6>git add .
//the above command move all untracked files to stage changes area
//- re-run C:\ComputerD\react-course-projects032021\xpensify-app6>git status
//C:\ComputerD\react-course-projects032021\xpensify-app6>git commit -m "initial commit"
//the above command will move all your files and folders from stage changes to commit
//- the -m flag represent message to title your commit or save codes
//- re-run C:\ComputerD\react-course-projects032021\xpensify-app6>git status
//- open app.js then remove all the action generator function dispatch to redux store manually,
//remove state function as well
//- remove the following import as well
//import { addExpense } from "./actions/expenses";
//import { setTextFilter, sortByAmount, sortByDate } from "./actions/filters";
//import getVisibleExpenses from "./selectors/expenses";
//- once you the delete all the above and save app.js file git will detect a change in app.js file
