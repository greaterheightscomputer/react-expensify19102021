//Promise is a predefined javaScript object

// const promise = new Promise((resolve, reject) => {
//   resolve("this is my resolved data");
// });

//then()method is called when a promise resolve or when a promise is a success case
// promise.then((data) => {
//   console.log(data);
// });

//- run dev-server and open the browser console to view the promise output

// //add a delay before the promise runs
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("this is my resolved data");
//     resolve("This is my other resolve data");
//   }, 1500);
// });

// console.log("before");
// promise.then((data) => {
//   console.log(data);
// });
// console.log("after");

// //the first resolve() method will always runs
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("this is my resolved data");
//     resolve("This is my other resolve data");
//   }, 1500);
// });

// console.log("before");
// promise.then((data) => {
//   console.log(data);
// });
// console.log("after");

// //returning reject() method
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Something went wrong");
//   }, 1500);
// });

// console.log("before");
// promise
//   .then((data) => {
//     console.log(data); //its throw Uncaught (in promise) Something went wrong becos the error is not properly catch
//   })
//   .catch((error) => {
//     console.log("error: ", error);
//   });
// console.log("after");

//another way of handling error by passing it as the second argument onto then() method
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong");
  }, 1500);
});

console.log("before");
promise.then(
  (data) => {
    console.log(data); //its throw Uncaught (in promise) Something went wrong becos the error is not properly catch
  },
  (error) => {
    console.log("error: ", error);
  }
);
console.log("after");

//in this project we shall be using then() method of promise to resolve sucess case or
//catch() method of promise to reject fail case

//- comment or remove the use of import "./playground/promises"; on the app.js file
