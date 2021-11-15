import * as firebase from "firebase"; //the * as means take all the named export from firebase and store then on variable called firebase becos firebase don't have default export
//for example we can store all the expenses Action Generator Function like this
// import * as expensesAction from '../actions/expenses';
// expensesAction.addExpense

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig); //startup firebase database

//testing our firebase database connection
//- ref() method means reference its give us access to specific aspect of the firebase database.
//- for instance in sql database of difference tables where we store data.
//-in mongodb we have different collections where different data are stored.

// firebase.database().ref().set({
//   name: "Ola Adebola",
// });
//- the create firebase/firebase.js has not being import onto our application, so the firebase line of
//codes will not be execute to make its work let import "./firebase/firebase"; onto app.js file
//- C:\ComputerD\react-course-projects032021\xpensify-app7>npm run dev-server
//- back to firebase.google.com
//- click on Realtime Database to view the data store onto the root of the database

//Writing to the Database
//- firebase can work with different data type like string, boolean, number, object, array

// const database = firebase.database();

// database.ref().set({
//   name: "Ola Adebola",
//   age: 23,
//   isSingle: false,
//   location: {
//     city: "Lagos",
//     country: "Nigeria",
//   },
// });
//- C:\ComputerD\react-course-projects032021\xpensify-app7>npm run dev-server
//- back to firebase.google.com
//- click on Realtime Database to view the data store onto the root of the database

//- set() method can take any data type has an argument and its will over the previous data stored on db
//- ref() using ref() method without any argument will change the root of the database data.
// database.ref().set("this is my data");
// database.ref().set(["Expense 1", "Expense 2", "Expense 3"]);
// database.ref().set(23900);
// database.ref().set(true);
// database.ref().set({ age: 34 });

//updating a specific property
// database.ref("age").set(20);
// database.ref("location/city").set("Ikeja");

//challenge area
//create object attributes with these properties height: 34inches, weight: 20inches
// database.ref("attribute").set({ height: "34inches", weight: "20inches" });

//Promises with Firebase
// const database = firebase.database();

// database
//   .ref()
//   .set({
//     name: "Wasiu Oladele",
//     age: 33,
//     isSingle: true,
//     location: {
//       city: "Lagos",
//       country: "Nigeria",
//     },
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch((e) => {
//     console.log("this failed:", e);
//   });
//- startup the dev-server to view on the browser console either resolve or reject case.
//- let tragger catch block to throw error
//go to the firebase database to change th rule from true to false inorder to deny access to
//the db like this
// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
//to this
// {
//   "rules": {
//     ".read": false,
//     ".write": false
//   }
// }
//- re-run the app to tragger error
//- change the Rules back to true
//- for more information on firebase go to firebase.google.com/docs/, click on REFERENCE Tab

//Challenge area
//- setup then and catch method of promise
//- make sure catch actually works
//- switch rules to true
//- make sure then actually works
// database
//   .ref("attribute")
//   .set({ height: "43inches", weight: "28inches" })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((error) => {
//     console.log("An error: ", error);
//   });

//Removing Data from Firebase
//- remove part of the database data
// const database = firebase.database();

// database
//   .ref()
//   .set({
//     name: "Wasiu Oladele",
//     age: 33,
//     isSingle: true,
//     location: {
//       city: "Lagos",
//       country: "Nigeria",
//     },
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch((e) => {
//     console.log("this failed:", e);
//   });

// //to remove a single property
// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("data was remove");
//   })
//   .catch((e) => {
//     console.log("Did not remove:", e);
//   });

// //remove the whole data in the database
// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("data was remove");
//   })
//   .catch((e) => {
//     console.log("Did not remove:", e);
//   });

//using set() to remove data from database
//- insert the data back to db
// database.ref("isSingle").set(null);

//Updating Data
// const database = firebase.database();

// database
//   .ref()
//   .set({
//     name: "Wasiu Oladele",
//     age: 33,
//     isSingle: true,
//     location: {
//       city: "Lagos",
//       country: "Nigeria",
//     },
//   })
//   .then(() => {
//     console.log("data update");
//   })
//   .catch((e) => {
//     console.log("fail to update:", e);
//   });

//updating existing properties
// database.ref().update({
//   name: "Adenike Peters",
//   age: 45,
// });
//- startup dev-server

//add new property when updating
// database.ref().update({
//   name: "Adenike Peters",
//   age: 45,
//   job: "Manager",
//   isSingle: null,
// });

//update at the root level, its does not update the nested object
// database.ref().update({
//   name: "Adenike Peters",
//   age: 45,
//   job: "Manager",
//   isSingle: null,
//   location: {
//     city: "Ibadan",
//   },
// });

//updating the nested object
// database.ref().update({
//   job: "Software Developer",
//   "location/city": "Ibadan",
// });

//challenge area
// database
//   .ref()
//   .set({
//     name: "Wasiu Oladele",
//     age: 33,
//     isSingle: true,
//     job: {
//       title: "Software Developer",
//       company: "Google",
//     },
//     streetLevel: 6,
//     location: {
//       city: "Lagos",
//       country: "Nigeria",
//     },
//   })
//   .then(() => {
//     console.log("data update");
//   })
//   .catch((e) => {
//     console.log("fail to update:", e);
//   });

// //- change the streetLevel to 9
// //- change job.company to Greater Heights
// //- change location.city to Abuja
// database.ref().update({
//   streetLevel: 9,
//   "location/city": "Abuja",
//   "job/company": "Greate Heights",
// });

//Fetching Data from Firebase
//- we can fetch data
//1. a single time and
//2. by subscribing which mean anytime their is changes in db fetch the data.

// const database = firebase.database();

// //fetching the root data a single time
// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("error: ", e);
//   });

// //fetching specific part of the database data a single time
// database
//   .ref("location")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("error: ", e);
//   });

// //fetching nested object
// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("error: ", e);
//   });

//fetching data on subscribing
// database.ref().on(
//   "value",
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log("Error on fetching data: ", e);
//   }
// );
//- we passing snapshot as an argument on a callback function instead of then() of promise
//beco's we want to run the function anytime changes occur in the db.
//Promise run once when its resolve or reject.
//- go to firebase then manually alter change in the db to see its re-run on your browser.

//its trigger on subscribing fetching of data
// setTimeout(() => {
//   database.ref("age").set(29);
// }, 3500);

// //to unsubscribe
// setTimeout(() => {
//   database.ref().off();
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(35);
// }, 10500);

//challenge area
//setup data sub -> Ola is a Software Developer at Greater Heights
//change the data and make sure it reprints
// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });
//go to firebase then mannually change the data

//Array Data in Firebase: Part I
//Firebase does not support array
//- let delete the data in firebase
// const database = firebase.database();

const notes = [
  {
    id: "12900",
    title: "This is my first note",
    body: "This is my first body note",
  },
  {
    id: "789998",
    title: "This is my second note",
    body: "This is my second body note",
  },
];
//save array of object onto firebase
// database.ref("notes").set(notes);
//we cannot work with the way the above array of object is stored onto db.

// const firebaseNote = {
//   notes: {
//     ispppppssd: {
//       //this key ispppppssd will be the id
//       title: "This is my first note",
//       body: "This is my first body note",
//     },
//     iokkjkkkk: {
//       title: "This is my first note",
//       body: "This is my first body note",
//     },
//   },
// };

//- delete the previous datat in the db
//push() method will store data in the above structure onto the database.
// database.ref("notes").push({
//   title: "This is my first note",
//   body: "This is my first body note",
// });

//accessing and manipulating notes child from db
//- copy the id from firebase
// database.ref("notes/-Mn_JDzP6X-cP3_XlMlh").update({
//   body: "buy rice",
// });

//remove the item from db
// database.ref("notes/-Mn_JDzP6X-cP3_XlMlh").remove();

//using set() method
// database.ref("notes/-Mn_JZTsBRkNBrgAJfvx").set({
//   title: "i am coding",
//   body: "I love coding",
// });
//- remove the data from firebase

//Challenge area
//setup expenses object with three individual objects with the following properties
//description, note, amount, createdAt
// database.ref("expenses").push({
//   description: "shirt",
//   note: "rent for 2021",
//   amount: 30000,
//   createdAt: 899000222200,
// });
// database.ref("expenses").push({
//   description: "bought books",
//   note: "bought books for programing",
//   amount: 15000,
//   createdAt: 329099000,
// });
// database.ref("expenses").push({
//   description: "school fee",
//   note: "make payment for school fee",
//   amount: 35000,
//   createdAt: 23909900009,
// });

//Array Data in Firebase: Part II
//- fetching data from expenses object from the db
//- the value pass as an argument is an event that trigger when you insert a data onto db.
// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     // console.log(snapshot.val());
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

//fetching data from expenses object by subscribing
// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });

//   console.log(expenses);
// });
//-go to firebase then change the data mannually

//child_removed event -> its trigger when we delete any child object inside the firebase
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//- go to firebase db then mannually delete a record then the above code will trigger.

//challenge area
//child_changed event -> its trigger when one of the child data changes
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

//child_added event -> its trigger when we add a new data on db
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//- the above code will trigger for the already existing data in the db
//- its will also re-run for any new inserted expense data.

const database = firebase.database();

//firebase Authentication
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); //AuthProvider provide authentication or identifying that a user is which he/she is. We also have Twitter, Git, Facebase providers as well.

export { firebase, googleAuthProvider, database as default };
