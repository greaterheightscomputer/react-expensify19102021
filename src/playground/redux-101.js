import { createStore } from "redux";

// const store = createStore((state = { count: 0 }) => {
//   console.log("running");
//   return state;
// });

//- How to fetch value from redux store
// console.log(store.getState());

// //- How to dispatch Action object to redux store is like this
// store.dispatch({
//   type: "INCREMENT",
// });

//Passing Actions object as the 2nd argument of the redux store like this
// const store = createStore((state = { count: 0 }, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       count: state.count + 1,
//     };
//   } else {
//     return state;
//   }
// });

// console.log(store.getState());
// store.dispatch({
//   type: "INCREMENT",
// });
// store.dispatch({
//   type: "INCREMENT",
// });
// console.log(store.getState());

//let switch the if statement to switch case
// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + 1,
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - 1,
//       };
//     //challenge area
//     //create action type RESET and set count equal to zero
//     case "RESET":
//       return {
//         count: 0,
//       };
//     default:
//       return state;
//   }
// });

// console.log(store.getState());

// store.dispatch({
//   type: "INCREMENT",
// });

// store.dispatch({
//   type: "INCREMENT",
// });

// store.dispatch({
//   type: "DECREMENT",
// });

// store.dispatch({
//   type: "RESET",
// });

// console.log(store.getState());

//Subscribing and Dynamic Actions
//Subscribe is use to watch for changs in the store.
// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + 1,
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - 1,
//       };
//     case "RESET":
//       return {
//         count: 0,
//       };
//     default:
//       return state;
//   }
// });

// //subcribe function
// // store.subscribe(() => {
// //   console.log(store.getState());
// // });
// // store.dispatch({
// //   type: "INCREMENT",
// // });
// // store.dispatch({
// //   type: "INCREMENT",
// // });
// // store.dispatch({
// //   type: "DECREMENT",
// // });
// // store.dispatch({
// //   type: "RESET",
// // });

// //unsubscribe function its return a function
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({
//   type: "INCREMENT",
// });

// store.dispatch({
//   type: "INCREMENT",
// });

// store.dispatch({
//   type: "DECREMENT",
// });

// unsubscribe();

// store.dispatch({
//   type: "RESET",
// });

//Dispatch Dynamic Actions
// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       const incrementBy =
//         typeof action.incrementBy === "number" ? action.incrementBy : 1;
//       return {
//         count: state.count + incrementBy,
//       };
//     case "DECREMENT":
//       const decrementBy =
//         typeof action.decrementBy === "number" ? action.decrementBy : 1;
//       return {
//         count: state.count - decrementBy,
//       };
//     case "RESET":
//       return {
//         count: 0,
//       };
//     case "SET":
//       return {
//         count: action.count,
//       };
//     default:
//       return state;
//   }
// });

// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });
// store.dispatch({
//   type: "INCREMENT",
// });
// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 1,
// });
// store.dispatch({
//   type: "DECREMENT",
// });
// store.dispatch({
//   type: "RESET",
// });
// store.dispatch({
//   type: "SET",
//   count: 101,
// });

//ES6 Object Destructuring
//ES6 Object Destructuring its will allow us to work with array and object
//- let create another file inside src/playgrounding folder called destructuring.js

//After completing Object and Array Destructuring inside playground/destructuring.js file
//- then let start
//Refactoring and Organizing
//- Action generator -> are functions that returns action objects.
// const incrementCount = ()=>{ //explicitly return object
//   return{
//     type: 'INCREMENT'
//   }
// };
//implicitly return object
// const incrementCount = (payload = {}) => ({
//   type: "INCREMENT",
//   incrementBy:
//     typeof payload.incrementBy === "number" ? payload.incrementBy : 1,
// });

//destructuring Action generator
// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//   type: "INCREMENT",
//   incrementBy,
// });
// //- let use the incrementCount Action generator in place of the below inline Action object that is pass as a argument to dispatch function.

// //Action generator for decrement
// const decrementCount = ({ decrementBy = 1 } = {}) => ({
//   type: "DECREMENT",
//   decrementBy,
// });

// //challenge area
// //create Action generator called them
// //- setCount and resetCount then use it below to replace the inline Action object
// const resetCount = () => ({
//   type: "RESET",
// });
// const setCount = ({ count } = {}) => ({
//   type: "SET",
//   count,
// });

// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + action.incrementBy,
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - action.decrementBy,
//       };
//     case "RESET":
//       return {
//         count: 0,
//       };
//     case "SET":
//       return {
//         count: action.count,
//       };
//     default:
//       return state;
//   }
// });

// store.subscribe(() => {
//   console.log(store.getState());
// });

// //These are inline return of Action object wheneven their is a bug its difficult to detect it.
// // store.dispatch({
// //   type: "INCREMENT",
// //   incrementBy: 5,
// // });
// // store.dispatch({
// //   type: "INCREMENT",
// // });

// //using Action generator as an argument in place of inline Action object
// store.dispatch(incrementCount({ incrementBy: 5 }));
// store.dispatch(incrementCount());

// // store.dispatch({
// //   type: "DECREMENT",
// //   decrementBy: 1,
// // });
// // store.dispatch({
// //   type: "DECREMENT",
// // });
// store.dispatch(decrementCount({ decrementBy: 1 }));
// store.dispatch(decrementCount());

// // store.dispatch({
// //   type: "RESET",
// // });
// store.dispatch(resetCount());

// // store.dispatch({
// //   type: "SET",
// //   count: 101,
// // });
// store.dispatch(setCount({ count: 101 }));

//Reducers
//- let cut the function argument that we pass to store and past it as an argument onto countReducer function
//then pass countReducer function as an argument to store

//Meaning of Reducer
//1. Reducers are pure functions -> they are function which the output depend purely on the input which are state and action, its doesn't use anything outside of its function scope.
//example of non-pure function is this
// let a = 10;
// const add = (b)=>{
//   return a + b;
// }
//2. Never change the state or action -> just want to read the state or action and return new
//object that represent the state.
//3. Reducers use the Action object to manipulate the state object which will lead to returning
//of new state object that will make changes to redux store.

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
};

//Action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});
const resetCount = () => ({
  type: "RESET",
});
const setCount = ({ count } = {}) => ({
  type: "SET",
  count,
});

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrementBy: 1 }));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({ count: 101 }));

//create new file called redux-expensify.js inside playground folder
