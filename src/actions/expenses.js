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
// export const addExpense = (expense) => ({
//   type: "ADD_EXPENSE",
//   expense,
// });

// //asynchronous Action Generator Function
// export const startAddExpense = (expenseData = {}) => {
//   //return a function becos of the middleware thunk we added to store
//   return (dispatch) => {
//     const {
//       description = "",
//       note = "",
//       amount = 0,
//       createdAt = 0,
//     } = expenseData;

//     const expense = { description, note, amount, createdAt };
//     //return keyword beside the database means pass the data return in then() promise method to
//     //the test case, without it your test case will not be successfull passed.
//     return database
//       .ref("expenses")
//       .push(expense)
//       .then((ref) => {
//         // console.log(ref);
//         dispatch(
//           addExpense({
//             id: ref.key, //using ref.key which is the id from firebase in place of uuid() the push to redux has the id of individual expense object
//             ...expense,
//           })
//         );
//       });
//   };
// };

// //REMOVE_EXPENSE
// export const removeExpense = ({ id } = {}) => ({
//   type: "REMOVE_EXPENSE",
//   id,
// });

// //Asynchronous REMOVE_EXPENSE Action function
// //- we need to do the following inside startRemoveExpense() function
// //1. Create startRemoveExpense (same call signature as removeExpense)
// //2. Test startRemoveExpense with "should remove expenses from firebase"
// //3. Use startRemoveExpense in EditExpensePage instead of removeExpense
// //4. Adjust EditExpensePage tests
// export const startRemoveExpense = ({ id } = {}) => {
//   return (dispatch) => {
//     return database
//       .ref(`expenses/${id}`)
//       .remove()
//       .then(() => {
//         dispatch(removeExpense({ id }));
//       });
//   };
// };

// //EDIT_EXPENSE
// export const editExpense = (id, updates) => ({
//   type: "EDIT_EXPENSE",
//   id,
//   updates,
// });

// //Asynchronous EDIT_EXPENSE Action function
// //- we need to do the following inside startRemoveExpense() function
// //1. Create startEditExpense (same call signature as editExpense)
// //2. Test startEditExpense with "should edit expenses from firebase"
// //3. Use startEditExpense in EditExpensePage instead of removeExpense
// //4. Adjust EditExpensePage tests

// export const startEditExpense = (id, updates) => {
//   return (dispatch) => {
//     return database
//       .ref(`expenses/${id}`)
//       .update(updates)
//       .then(() => {
//         dispatch(editExpense(id, updates));
//       });
//   };
// };

// //Fetching data from firebase
// //SET_EXPENSES
// //dispatch fetch data to redux store
// export const setExpenses = (expenses) => ({
//   type: "SET_EXPENSES",
//   expenses,
// });

// //fetching data asynchronously
// //- we need to do the following inorder inside startSetExpenses() function
// //1. Fetch all expense data once
// //2. Parse that data into an array
// //3. Dispatch SET_EXPENSES to redux store
// export const startSetExpenses = () => {
//   //return key pass onto database.ref() will allow us to access the data fetch from firebase on
//   //app.js store.dispatch(startAddExpense()).then(() => {})
//   return (dispatch) => {
//     return database
//       .ref("expenses")
//       .once("value")
//       .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//           expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val(),
//           });
//         });
//         dispatch(setExpenses(expenses));
//       });
//   };
// };

//let add user to the root of the ref() to all our Async Action Generator Function

export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

//asynchronous Action Generator Function
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    //getState() method to fetch data from redux store
    const uid = getState().auth.uid; //get the user id from redux store
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    return (
      database
        // .ref("expenses")
        .ref(`users/${uid}/expenses`)
        .push(expense)
        .then((ref) => {
          // console.log(ref);
          dispatch(
            addExpense({
              id: ref.key, //using ref.key which is the id from firebase in place of uuid() the push to redux has the id of individual expense object
              ...expense,
            })
          );
        })
    );
  };
};
//- let test the app by starting the dev-server then insert data to firebase db to view if its
//works.
//- click on Create Expense the Add Expense
//- view firebase to see the structure of the current data
//- you will see the users/Z2boILCFbUWevX799y3UoDXFOA92/expenses/ which is the current data
//structure for every each individual that will be using this app.

//Fetching data
//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return (
      database
        // .ref("expenses")
        .ref(`users/${uid}/expenses`)
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
        })
    );
  };
};
//- the app is fetch data from the right location in firebase db.

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return (
      database
        // .ref(`expenses/${id}`)
        .ref(`users/${uid}/expenses/${id}`)
        .update(updates)
        .then(() => {
          dispatch(editExpense(id, updates));
        })
    );
  };
};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return (
      database
        // .ref(`expenses/${id}`)
        .ref(`users/${uid}/expenses/${id}`)
        .remove()
        .then(() => {
          dispatch(removeExpense({ id }));
        })
    );
  };
};
//- let test the app
