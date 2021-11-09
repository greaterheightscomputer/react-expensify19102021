import uuid from "uuid";
import database from "../firebase/firebase";

//let recap what we have being doing with Action Generator Function
//1. component calls action generator.
//2. action generator returns object.
//3. component dispatch action object.
//4. redux store changes.

//this is what we will be doing with Asynchronous Action Generator Function
//1. component calls action generator.
//2. action generator returns  function.
//3. component dispatch action function.
//4. function runs (has the ability to change both firebase and redux store).

//Action Generator
//ADD_EXPENSE
// export const addExpense = ({
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

//local Action Generator Function
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

//asynchronous Action Generator Function
export const startAddExpense = (expenseData = {}) => {
  //return a function becos of the middleware thunk we added to store
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    return database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        // console.log(ref);
        dispatch(
          addExpense({
            id: ref.key, //using ref.key which is the id from firebase in place of uuid() the push to redux has the id of individual expense object
            ...expense,
          })
        );
      });
  };
};
//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});
//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

//Fetching data from firebase
//SET_EXPENSES
//dispatch fetch data to redu
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

//fetching data asynchronously
//- we need to do the following inorder inside startSetExpenses() function
//1. Fetch all expense data once
//2. Parse that data into an array
//3. Dispatch SET_EXPENSES to redux store
export const startSetExpenses = () => {
  //return key pass onto database.ref() will allow us to access the data fetch from firebase on
  //app.js store.dispatch(startAddExpense()).then(() => {})
  return (dispatch) => {
    return database
      .ref("expenses")
      .once("value")
      .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
