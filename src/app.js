import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();
// console.log("testing");
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
//- re-run C:\ComputerD\react-course-projects032021\xpensify-app6>git status
//- C:\ComputerD\react-course-projects032021\xpensify-app6>git add src/app.js
//- C:\ComputerD\react-course-projects032021\xpensify-app6>git commit -m "remove dummy expenses data"
//- re-run C:\ComputerD\react-course-projects032021\xpensify-app6>git status
//- C:\ComputerD\react-course-projects032021\xpensify-app6>git log
//the above command will log out the various commit that you have made.
//Press q to return you to command prompt
//- create readme.md to root folder to write up the git command we have learnt.

//Setting up SSH and GitHub
//SSH -> Secure Shell is a network communication protocol that enable us to communicate with
//third party services like Github in a secure manner.
//- go to github.com to either login or sign-up onto remote github
//- click on Repositories New button
// - Repository name: react-expensify19102021
//- click on Create repository button
//- create SSH key
//- right click on desktop to open Git Bash terminal
//- type this command ls -al ~/.ssh
//- google search connect with github with ssh key, click on Connecting to GitHub with SSH,
//click on Generating a new SSH key and adding it to the ssh-agent
//copy ssh-keygen -t rsa -b 4096 -C "greaterheightscomputer@gmail.com" and past on Git Bash
// -t means transaction, -b means bit 4096 size.
//- keep on press enter until it will generate the pubic and private ssh key like this
//SHA256:K8ySJniRi0E6H8yrlLXkLnm7Z/loDUtOsHM5yVb6wBQ greaterheightscomputer@gmail.com
//- re-type this command ls -al ~/.ssh
//its return these line of code
// total 28
// drwxr-xr-x 1 Khadijat 197121    0 Nov 30  2019 ./
// drwxr-xr-x 1 Khadijat 197121    0 Oct 19 14:14 ../
// -rw-r--r-- 1 Khadijat 197121 3401 Oct 19 21:02 id_rsa
// -rw-r--r-- 1 Khadijat 197121  758 Oct 19 21:02 id_rsa.pub
// -rw-r--r-- 1 Khadijat 197121 1588 Oct  3  2020 known_hosts
//id_rsa this is our private ssh key will be on our system like password
//id_rsa.pub this is our public ssh key will be given out to third party services like github
//- the next command will identify us when communicate with the third party services
//$ eval "$(ssh-agent -s)"
//if the over command is run its return Agent pid 13664, if its not run its will start it up.
//the below command provide the path where our private ssh key resident in our system
//$ ssh-add ~/.ssh/id_rsa
//its return this: Identity added: /c/Users/Khadijat/.ssh/id_rsa (greaterheightscomputer@gmail.com)
//- inorder to give our public ssh key to github for secure connection to github
//- open this path /c/Users/Khadijat/.ssh/id_rsa.pub with any text editor on your system then copy the content
//- go back to https://github.com/greaterheightscomputer/react-expensify19102021,
//click on your profile picture dropdown, click on Settings, click on SSH and GPG keys,
//click on New SSH key button
//- Title: Work Window
//- Next input field past what you copy from this path /c/Users/Khadijat/.ssh/id_rsa.pub then
//click Add SSH button
//- using the command below to making ssh communication to the github service
//C:\ComputerD\react-course-projects032021\xpensify-app6>ssh -T git@github.com
//- go back to https://github.com/greaterheightscomputer/react-expensify19102021
//copy the below code from github website and press enter
// git remote add origin git@github.com:greaterheightscomputer/react-expensify19102021.git
// git branch -M main
// git push -u origin main
//- go back to github website and refresh to view your code on remote github

//Production Webpack
//- open package.json file to view how to run webpack in our script object like this "build": "webpack"
//- C:\ComputerD\react-course-projects032021\xpensify-app6>npm run build
//you will see the size of bundle.js file like this
// bundle.js  7.96 MB       0  [emitted]  [big]  main
//- next is to reduce or minify the size of bundle.js file for production purpose.
//- modify script object in package.json from
// "scripts": {
//   "serve": "live-server public/",
//   "build": "webpack",
//   "dev-server": "webpack-dev-server",
//   "test": "jest --config=jest.config.json"
// }
//to this
// "scripts": {
//   "serve": "live-server public/",
//   "build:dev": "webpack",
//   "build:prod": "webpack -p",
//   "dev-server": "webpack-dev-server",
//   "test": "jest --config=jest.config.json"
// },
//- let run webpack like this
//C:\ComputerD\react-course-projects032021\xpensify-app6>npm run build:prod
//- the -p flage has reduce the size of bundle.js
//from bundle.js  7.96 MB       0  [emitted]  [big]  main
//to  bundle.js  5.61 MB       0  [emitted]  [big]  main
//- open webpack.config.js file for modification
//- we are going to return function instead of returning an object becos we want to pass in
//argument onto the function which will be use to setup the environment for production
//- env as an argument onto module.exports() function
//- re-run the build:prod to see the value of env on the terminal
//its return env:  undefined
//- go back to script object in package.json to add --env production like this
//"build:prod": "webpack -p --env production",
//- re-run the build:prod to see the value of env on the terminal
//its return env:  production
//- if we run C:\ComputerD\react-course-projects032021\xpensify-app6>npm run build:dev
//its return env:  undefined which is what we want
//- let continue setup webpack.config.js
//- what is taking up the size of bundle.js is the source-map to reduce the size of bundle.js
//we need source-map that is slow for production
//- modify devtool property in webpack.config.js
//from devtool: "cheap-module-eval-source-map",
//to devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
//source-map is very slow when building an application
//- re-run build for production
//C:\ComputerD\react-course-projects032021\xpensify-app6>npm run build:prod
//after modifying both package.json and webpack.config.js, its will output these two files
//bundle.js and bundle.js.map like this
//bundle.js   970 kB       0  [emitted]  [big]  main
//bundle.js.map  5.33 MB       0  [emitted]         main
//- for regular users who visit your web app they will be using bundle.js file only which is
//for production purpose.
//- bundle.js.map will only be use for development purpose
//- check your public folder in the root folder you will see both files there.
//- let serve-up production mode by run live-server like this
//C:\ComputerD\react-course-projects032021\xpensify-app6>npm run serve
//- remove from Header component
//<NavLink to="/edit" activeClassName="is-active">
// Edit Expense
// </NavLink>
// <NavLink to="/help" activeClassName="is-active">
//   Help
// </NavLink>
//- C:\ComputerD\react-course-projects032021\xpensify-app6>npm run build:prod
//- C:\ComputerD\react-course-projects032021\xpensify-app6>npm run serve
//to view the changes
//- test of source-map
//open app.js file add console.log("testing"); onto the file
//- re-run
//- C:\ComputerD\react-course-projects032021\xpensify-app6>npm run build:prod
//- C:\ComputerD\react-course-projects032021\xpensify-app6>npm run serve
//open browse console to see where console.log("testing"); line is pointing to

//Creating Separate CSS files
//- the following are css files
//import "normalize.css/normalize.css";
//import "./styles/styles.scss";
//import "react-dates/lib/css/_datepicker.css";
//are currently residing inside bundle.js file which add more weight onto bundle.js file and
//these css files will not execute untill the javascript codes runs which take sometime.
//- C:\ComputerD\react-course-projects032021\xpensify-app6>yarn add extract-text-webpack-plugin@3.0.0
//the above library will extract some files out of bundle.js file into a separate file.
//- open webpack.config.js file to import the above library that we just installed like this
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
//- make a new instance of ExtractTextPlugin like this
// const CSSExtract = new ExtractTextPlugin('styles.css');
//the argument styles.css is the name of file we are extracting the css code onto.
//- modify the css section of the webpack.config.js file
//from
//{
//test: /\.s?css$/,
//use: ["style-loader", "css-loader", "sass-loader"],
//}
//to this
// {
//   test: /\.s?css$/,
//   use: CSSExtract.extract({
//     use: ["css-loader", "sass-loader"],
//   }),
// }
//we don't need style-loader beco's its an inline style
//- create new plugins array property like this
//plugins: [CSSExtract],
//- the above modification done to webpack.config.js file will extract css files onto styles.css file.
//- re-run build for production like this
//C:\ComputerD\react-course-projects032021\xpensify-app6>yarn run build:prod
//webpack will output more assets like this
// Asset           Size      Chunks                   Chunk Names
// bundle.js       947 kB       0  [emitted]  [big]  main
// styles.css      17.4 kB      0  [emitted]         main
// bundle.js.map   5.25 MB      0  [emitted]         main
// styles.css.map  87 bytes     0  [emitted]         main
//styles.css is now part of the asset in the public folder
//- when you compare the bundle.js and bundle.js.map files after extracting style.css is smaller in size
//- link the style.css created on the head tags in the index.html file so that the style.css
//file will load first before rendering the bundle.js file which is the javascript file like this
//<link rel="stylesheet" type="text/css" href="./styles.css" />
//- let startup the live-server to see that the css files are still working like this
//C:\ComputerD\react-course-projects032021\xpensify-app6>npm run serve
//- open Network tab on the browser, click on All to see that the styles.css is loading first
//before bundle.js which is the javascript file, click on CSS to view styles.css file
//- source-map for style.css just like the way we use source-map for bundle.js file
//- delete all the assets generate in public folder
//- shutdown live-server and startup dev-server for development like this
// C:\ComputerD\react-course-projects032021\xpensify-app6>npm run dev-server
//- use selector on the browser to click on DateRangePicker component you will see that the
//styles.css is not pointing to the right line of code which.
//- the source-map is working in production mode becos of source-map use in devtool in
//webpack.config.js file
//- the source-map is not working in development mode becos of cheap-module-eval-source-map use
//in devtool property in webpack.config.js file.
//- go to webpack.config.js to switch the development source-map
//from -> devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
//to -> devtool: isProduction ? "source-map" : "inline-source-map", inline-source-map is a
//litter bit lower for development.
//- enable source-map on use: ["css-loader", "sass-loader"], by switch use property with array
//value to array of object like this
// use: [
//   {
//     loader: "css-loader",
//     options: { sourceMap: true },
//   },
//   {
//     loader: "sass-loader",
//     options: { sourceMap: true },
//   },
// ],
//- after the above modification done on webpack.config.js file re-start the dev-server
//- you see that source-map is also working perfectly in development mode as well.
//- push our code to github repository
//- make sure you are not pushing both bundle.js and styles onto github becos they are generated files.
