//open webpack.config.js file then change the entry point from
//entry: "./src/playground/redux-101.js", to entry: "./src/playground/redux-expensify.js",
//restart the dev-server

//Using Redux on ExpensifyApp
import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//This is the demo state for ExpensifyApp
// const demoState = {
//   expenses: [
//     {
//       id: "oopii233030334dd",
//       description: "January Rent",
//       note: "This was the final payment for that address",
//       amount: 34000,
//       createdAt: 0,
//     },
//   ],
//   filters: {
//     text: "rent",
//     sortBy: "amount", //date or amount
//     startDate: undefined,
//     endDate: undefined,
//   },
// };

//Working with Multiple Reducers
//- Action Generator function for expenses array object are as follows;
//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//- Action Generator function for filters object are as follows;
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//- We are going to create two reducers one to handle expenses array object and the order to
//handle the filter object then combine two reducers to change the redux store.

// //Expenses Reducer
// const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// //store creation
// const store = createStore(expensesReducer);

// //view store on the browser console
// console.log(store.getState());

// //using combineReducers to combine multiple reducers to create a single redux store.
// const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     case "ADD_EXPENSE":
//       return state.concat(action.expense);
//     default:
//       return state;
//   }
// };

// //Filter Reducer
// const filtersReducerDefaultState = {
//   text: "",
//   sortBy: "date",
//   startDate: undefined,
//   endDate: undefined,
// };

// const filterReducer = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// //store creation by pass in combineReducers as an argument
// const store = createStore(
//   //the pass the key value pairs as the property and value onto object pass as an argument to combineReducers function
//   combineReducers({
//     expenses: expensesReducer, //the key is root state name and value is the reducer
//     filters: filterReducer,
//   })
// );

// // //view store on the browser console
// // console.log(store.getState());

// //- installing uuid for generating expense id like this
// //C:\ComputerD\react-course-projects032021\xpensify-app3>yarn add uuid@3.1.0
// //- restart the dev-server
// //- import uuid from 'uuid';

// //Action Generator
// //- Action Generator function for expenses array object are as follows;
// //ADD_EXPENSE
// const addExpense = ({
//   description = "",
//   note = "",
//   amount = 0,
//   createdAt = 0,
// } = {}) => ({
//   type: "ADD_EXPENSE",
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt,
//   },
// });
// //REMOVE_EXPENSE
// //EDIT_EXPENSE
// //- Action Generator function for filters object are as follows;
// //SET_TEXT_FILTER
// //SORT_BY_DATE
// //SORT_BY_AMOUNT
// //SET_START_DATE
// //SET_END_DATE

// //view store on the browser console
// //subscribe function work when you dispatch Action object
// store.subscribe(() => {
//   console.log(store.getState());
// });

// //dispatching Action object to Reducer
// store.dispatch(addExpense({ description: "rent", amount: 100 }));

//Before we start ES6 Spread Operator let play around with adding new item or element on an array without change the array in the browser console.
//- do the following on the browser console
// const name = ["Ade", "Ola"];
// undefined;
// name.push("Jide");
// 3;
// name(3)[("Ade", "Ola", "Jide")]; //its means name state was change and that is not what will want
// name.concat("Peju")(4)[("Ade", "Ola", "Jide", "Peju")];
// name(3)[("Ade", "Ola", "Jide")]; //its mean name state do not change its just return new state object
//using Spread Operator still inside browser console
// [...name] //display or spread the contain of array string name
// (3) ["Ade", "Ola", "Jide"];
// [...name, 'Tade'] //add new string item onto name array of string
// (4) ["Ade", "Ola", "Jide", "Tade"]
// ['Bimbo', ...names, 'Peju'] //add Bimbo item before name array of string then add Peji item after the array of string as well
// (5) ["Bimbo", "Ade", "Ola", "Jide", "Peju"]

// //ES6 Spread Array Operator in Reducers
// //Expenses Reducer
// const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     case "ADD_EXPENSE":
//       return [...state, action.expense];
//     case "REMOVE_EXPENSE":
//       //filter does not change state, it return new state
//       //if filter function return true the object will be kept in the array if its return false the object will be remove from the array
//       // return state.filter(({ id }) => {
//       //   return id !== action.id;
//       // });
//       //shorthand arrow function
//       return state.filter(({ id }) => id !== action.id);
//     default:
//       return state;
//   }
// };

// //Filter Reducer
// const filtersReducerDefaultState = {
//   text: "",
//   sortBy: "date",
//   startDate: undefined,
//   endDate: undefined,
// };

// const filterReducer = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// //store creation
// const store = createStore(
//   combineReducers({
//     expenses: expensesReducer,
//     filters: filterReducer,
//   })
// );

// //Action Generator
// //- Action Generator function for expenses array object are as follows;
// //ADD_EXPENSE
// const addExpense = ({
//   description = "",
//   note = "",
//   amount = 0,
//   createdAt = 0,
// } = {}) => ({
//   type: "ADD_EXPENSE",
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt,
//   },
// });
// //REMOVE_EXPENSE
// const removeExpense = ({ id } = {}) => ({
//   type: "REMOVE_EXPENSE",
//   id,
// });
// //EDIT_EXPENSE
// //- Action Generator function for filters object are as follows;
// //SET_TEXT_FILTER
// //SORT_BY_DATE
// //SORT_BY_AMOUNT
// //SET_START_DATE
// //SET_END_DATE

// //view store on the browser console
// store.subscribe(() => {
//   console.log(store.getState());
// });

// //dispatching Multiple Action object to Reducer
// // store.dispatch(addExpense({ description: "rent", amount: 100 }));
// // store.dispatch(addExpense({ description: "coffee", amount: 50 }));

// //Fetch data from the store - which return Action object from the redux store
// const expenseOne = store.dispatch(
//   addExpense({ description: "rent", amount: 100 })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: "coffee", amount: 50 })
// );
// console.log(expenseOne);
// console.log(expenseTwo);

// //Remove individual expenses array of object from the redux store
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

//Spreading Objects
const user = {
  name: "Jide",
  age: 23,
};
// console.log({ ...user }); //cloning user object
//- when run this code console.log({ ...user }) its throw SyntaxError beco's we need to do the following
//1. install this library
//C:\ComputerD\react-course-projects032021\xpensify-app3>yarn add babel-plugin-transform-object-rest-spread@6.23.0
//2. open .babelrc file inorder to add the libray "transform-object-rest-spread" install to plugins array of string like this
// "plugins": [
//   "transform-class-properties",
//   "transform-object-rest-spread"
// ]
//- restart the dev-server to see the console.log({ ...user }); printing on the browser console.

//add new property onto user object like this
// console.log({ ...user, location: "Lagos Island" });

//override the existing property like this
// console.log({ ...user, location: "Lagos Island", age: 32 });

//its will not override the existing property like this
// console.log({ age: 32, ...user, location: "Lagos Island" });

//ES6 Spread Object Operator in Reducers
// //Expenses Reducer
// const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     case "ADD_EXPENSE":
//       return [...state, action.expense];
//     case "REMOVE_EXPENSE":
//       return state.filter(({ id }) => id !== action.id);
//     case "EDIT_EXPENSE":
//       return state.map((expense) => {
//         if (expense.id === action.id) {
//           return {
//             ...expense,
//             ...action.updates,
//           };
//         } else {
//           return expense;
//         }
//       });
//     default:
//       return state;
//   }
// };

// //Filter Reducer
// const filtersReducerDefaultState = {
//   text: "",
//   sortBy: "date",
//   startDate: undefined,
//   endDate: undefined,
// };

// const filterReducer = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     case "SET_TEXT_FILTER":
//       return {
//         ...state,
//         text: action.text,
//       };
//     case "SORT_BY_AMOUNT":
//       return {
//         ...state,
//         sortBy: "amount",
//       };
//     case "SORT_BY_DATE":
//       return {
//         ...state,
//         sortBy: "date",
//       };
//     case "SET_START_DATE":
//       return {
//         ...state,
//         startDate: action.startDate,
//       };
//     case "SET_END_DATE":
//       return {
//         ...state,
//         endDate: action.endDate,
//       };
//     default:
//       return state;
//   }
// };

// //store creation
// const store = createStore(
//   combineReducers({
//     expenses: expensesReducer,
//     filters: filterReducer,
//   })
// );

// //Action Generator
// //- Action Generator function for expenses array object are as follows;
// //ADD_EXPENSE
// const addExpense = ({
//   description = "",
//   note = "",
//   amount = 0,
//   createdAt = 0,
// } = {}) => ({
//   type: "ADD_EXPENSE",
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt,
//   },
// });
// //REMOVE_EXPENSE
// const removeExpense = ({ id } = {}) => ({
//   type: "REMOVE_EXPENSE",
//   id,
// });
// //EDIT_EXPENSE
// const editExpense = (id, updates) => ({
//   type: "EDIT_EXPENSE",
//   id,
//   updates,
// });

// //- Action Generator function for filters object are as follows;
// //SET_TEXT_FILTER
// const setTextFilter = (text = "") => ({
//   type: "SET_TEXT_FILTER",
//   text,
// });
// //SORT_BY_DATE
// const sortByDate = () => ({
//   type: "SORT_BY_DATE",
// });
// //SORT_BY_AMOUNT
// const sortByAmount = () => ({
//   type: "SORT_BY_AMOUNT",
// });
// //SET_START_DATE
// const setStartDate = (startDate) => ({
//   type: "SET_START_DATE",
//   startDate,
// });
// //SET_END_DATE
// const setEndDate = (endDate) => ({
//   type: "SET_END_DATE",
//   endDate,
// });

// //view store on the browser console
// store.subscribe(() => {
//   console.log(store.getState());
// });

// //dispatching Multiple Action object to Reducer
// // store.dispatch(addExpense({ description: "rent", amount: 100 }));
// // store.dispatch(addExpense({ description: "coffee", amount: 50 }));

// //Fetch data from the store - which return Action object from the redux store
// //const expenseOne = store.dispatch(
// //   addExpense({ description: "rent", amount: 100 })
// // );
// // const expenseTwo = store.dispatch(
// //   addExpense({ description: "coffee", amount: 50 })
// // );
// // console.log(expenseOne);
// // console.log(expenseTwo);

// //Remove individual expenses array of object from the redux store
// //store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// //Edit individual expenses array object from the redux store
// //we are going to edit expenseTwo since we have remove expenseOne
// //pass in the id and updated individual expense array object
// //store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// //Filter dispatching Action Object
// store.dispatch(setTextFilter("rent"));
// // store.dispatch(setTextFilter());
// //store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// // store.dispatch(setStartDate()); //its return undefined
// store.dispatch(setEndDate(1250));

//Filtering Redux Data
// //Expenses Reducer
// const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     case "ADD_EXPENSE":
//       return [...state, action.expense];
//     case "REMOVE_EXPENSE":
//       return state.filter(({ id }) => id !== action.id);
//     case "EDIT_EXPENSE":
//       return state.map((expense) => {
//         if (expense.id === action.id) {
//           return {
//             ...expense,
//             ...action.updates,
//           };
//         } else {
//           return expense;
//         }
//       });
//     default:
//       return state;
//   }
// };

// //Filter Reducer
// const filtersReducerDefaultState = {
//   text: "",
//   sortBy: "date",
//   startDate: undefined,
//   endDate: undefined,
// };

// const filterReducer = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     case "SET_TEXT_FILTER":
//       return {
//         ...state,
//         text: action.text,
//       };
//     case "SORT_BY_AMOUNT":
//       return {
//         ...state,
//         sortBy: "amount",
//       };
//     case "SORT_BY_DATE":
//       return {
//         ...state,
//         sortBy: "date",
//       };
//     case "SET_START_DATE":
//       return {
//         ...state,
//         startDate: action.startDate,
//       };
//     case "SET_END_DATE":
//       return {
//         ...state,
//         endDate: action.endDate,
//       };
//     default:
//       return state;
//   }
// };

// //store creation
// const store = createStore(
//   combineReducers({
//     expenses: expensesReducer,
//     filters: filterReducer,
//   })
// );

// //Action Generator
// //ADD_EXPENSE
// const addExpense = ({
//   description = "",
//   note = "",
//   amount = 0,
//   createdAt = 0,
// } = {}) => ({
//   type: "ADD_EXPENSE",
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt,
//   },
// });
// //REMOVE_EXPENSE
// const removeExpense = ({ id } = {}) => ({
//   type: "REMOVE_EXPENSE",
//   id,
// });
// //EDIT_EXPENSE
// const editExpense = (id, updates) => ({
//   type: "EDIT_EXPENSE",
//   id,
//   updates,
// });

// //- Action Generator function for filters object are as follows;
// //SET_TEXT_FILTER
// const setTextFilter = (text = "") => ({
//   type: "SET_TEXT_FILTER",
//   text,
// });
// //SORT_BY_DATE
// const sortByDate = () => ({
//   type: "SORT_BY_DATE",
// });
// //SORT_BY_AMOUNT
// const sortByAmount = () => ({
//   type: "SORT_BY_AMOUNT",
// });
// //SET_START_DATE
// const setStartDate = (startDate) => ({
//   type: "SET_START_DATE",
//   startDate,
// });
// //SET_END_DATE
// const setEndDate = (endDate) => ({
//   type: "SET_END_DATE",
//   endDate,
// });

// //view store on the browser console
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

// //Get visible expenses
// // const getVisibleExpenses = (expenses, filters) => {
// //   return expenses;
// // };
// //destructuring filters
// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses.filter((expense) => {
//     const textMatch = expense.description
//       .toLowerCase()
//       .includes(text.toLowerCase());
//     const startDateMatch =
//       typeof startDate !== "number" || expense.createdAt >= startDate;
//     const endDateMatch =
//       typeof endDate !== "number" || expense.createdAt <= endDate;

//     return textMatch && startDateMatch && endDateMatch;
//   });
// };

// store.dispatch(
//   addExpense({ description: "rent", amount: 100, createdAt: 1000 })
// );
// store.dispatch(
//   addExpense({ description: "coffee", amount: 50, createdAt: -1000 })
// );

// //Filter dispatching Action Object
// store.dispatch(setTextFilter("rent"));
// // store.dispatch(setTextFilter());
// // store.dispatch(setStartDate(125));
// // store.dispatch(setStartDate()); //its return undefined
// // store.dispatch(setEndDate(-1000));

//Sorting Already Filter Redux Data
//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//Filter Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

//store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
  })
);

//Action Generator
//ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});
//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

//Action Generator function for filters object are as follows;
//SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
//SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});
//SET_START_DATE
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});
//SET_END_DATE
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});

//view store on the browser console
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;

      return textMatch && startDateMatch && endDateMatch;
      //using comparedFunction for sorting array object
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

store.dispatch(
  addExpense({ description: "rent", amount: 100, createdAt: -21000 })
);
store.dispatch(
  addExpense({ description: "coffee", amount: 250, createdAt: -1000 })
);

//Filter dispatching Action Object
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//copy xpensify-app3 folder into xpensify-app4 folder
