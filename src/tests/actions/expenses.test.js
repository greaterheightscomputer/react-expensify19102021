import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

//setup fake Redux store configuration
const createMockStore = configureMockStore([thunk]);

// //done means execute or run the beforeEach() method first then run the asynchronous test cases later.
// beforeEach((done) => {
//   const expensesData = {};
//   expenses.forEach(({ id, description, note, amount, createdAt }) => {
//     expensesData[id] = { description, note, amount, createdAt };
//   });
//   database
//     .ref("expenses")
//     .set(expensesData)
//     .then(() => done());
// });

// test("should setup remove expense action object", () => {
//   const action = removeExpense({ id: "123abc" });
//   expect(action).toEqual({
//     type: "REMOVE_EXPENSE",
//     id: "123abc",
//   });
// });

// test("should setup edit expense action object", () => {
//   const action = editExpense("123abc", {
//     note: "I bought new core i5 window laptop",
//   });
//   expect(action).toEqual({
//     type: "EDIT_EXPENSE",
//     id: "123abc",
//     updates: { note: "I bought new core i5 window laptop" },
//   });
// });

// test("should setup add expense action object with provided values", () => {
//   //- we are pass expenseData object onto addExpense() Action function without id and firebase
//   //will be generate id then pass it onto addExpense() Action function in actions/expenses.js
//   //file as a result of this we shall use dummy expenses array object becos its had id property.
//   //- comment or delete expenseData object.
//   // const expenseData = {
//   //   description: "Rent",
//   //   amount: 8900,
//   //   createdAt: 120000,
//   //   note: "This was last month rent",
//   // };
//   // const action = addExpense(expenseData);
//   // expect(action).toEqual({
//   //   type: "ADD_EXPENSE",
//   //   expense: {
//   //     ...expenseData,
//   //     id: expect.any(String),
//   //   },
//   // });

//   //pass expenses[2] onto addExpense() Action function as an argument becos of id
//   const action = addExpense(expenses[2]);
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: expenses[2],
//   });
// });
// //- rerun the jest test suit

// // test("should setup add expense action object with default values", () => {
// //   const action = addExpense();
// //   expect(action).toEqual({
// //     type: "ADD_EXPENSE",
// //     expense: {
// //       id: expect.any(String),
// //       description: "",
// //       note: "",
// //       amount: 0,
// //       createdAt: 0,
// //     },
// //   });
// // });
// //- is not the responsibility of above test case to setup default values anymore, its the
// //responsibility of startAddExpense() Async Action function to setup the default value now.

// //setup asynchronous test case
// //we are testing to make sure that data actually store on firebase and redux store.
// //- this below code is what we are actually testing from actions/expenses.js file
// //return database.ref("expenses").push(expense).then((ref) => {
// //     dispatch(addExpense({id: ref.key, ...expense, }));
// //});

// //- install mock or fake redux store like this
// //C:\ComputerD\react-course-projects032021\xpensify-app7>yarn add redux-mock-store@1.2.3
// //- import configureMockStore from "redux-mock-store"; and
// //import thunk from 'redux-thunk'; onto expenses.test.js file and use it
// //- import startAddExpense() Async Action Function
// //- setup fake Redux store configuration like this
// //const createMockStore = configureMockStore([thunk]);

// test("should add expense to database and redux store", (done) => {
//   //- we add done onto callback function as an argument becos its async test case, its will force
//   //the async request to complete before making assertion which is expect() method.
//   //- its means once the done() method is called or consumed or invoked then execute assertion.
//   const store = createMockStore({});
//   const expenseData = {
//     description: "Rent",
//     amount: 8900,
//     createdAt: 120000,
//     note: "This was last month rent",
//   };
//   store
//     .dispatch(startAddExpense(expenseData))
//     .then(() => {
//       const actions = store.getActions(); //return an array of action dispatch to redux store
//       expect(actions[0]).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//           id: expect.any(String),
//           ...expenseData,
//         },
//       });

//       //fetch data from firebase by id
//       //- import  database  from "../../firebase/firebase"; onto this file
//       // database
//       //   .ref(`expenses/${actions[0].expense.id}`)
//       //   .once("value")
//       //   .then((snapshot) => {
//       //     expect(snapshot.val()).toEqual(expenseData);
//       //     done();
//       //   });

//       //using promise chaining
//       return database.ref(`expenses/${actions[0].expense.id}`).once("value");
//     })
//     .then((snapshot) => {
//       expect(snapshot.val()).toEqual(expenseData);
//       done();
//     });
// });
// //- startup the jest test suit with internet connection becos it is asynchronous function

// //challenge area
// test("should add expense with default values to database and redux store", (done) => {
//   const store = createMockStore({});
//   const expenseData = {
//     description: "",
//     amount: 0,
//     createdAt: 0,
//     note: "",
//   };
//   store
//     .dispatch(startAddExpense(expenseData))
//     .then(() => {
//       const actions = store.getActions();
//       expect(actions[0]).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//           id: expect.any(String),
//           ...expenseData,
//         },
//       });

//       return database.ref(`expenses/${actions[0].expense.id}`).once("value");
//     })
//     .then((snapshot) => {
//       expect(snapshot.val()).toEqual(expenseData);
//       done();
//     });
// });

// //test case for fetch setExpenses Action function from redux store
// test("should setup setExpense action object with data", () => {
//   const action = setExpenses(expenses);
//   expect(action).toEqual({
//     type: "SET_EXPENSES",
//     expenses,
//   });
// });

// //test case for fetch startSetExpenses Action function from firebase
// //dispatch async action function untill done function is called
// test("should fetch the expenses from firebase", (done) => {
//   const store = createMockStore({});
//   store.dispatch(startSetExpenses()).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: "SET_EXPENSES",
//       expenses,
//     });
//     done();
//   });
// });

// //test case for startRemoveExpense() inorder to remove individual object
// test("should remove expense from firebase", (done) => {
//   const store = createMockStore({});
//   const id = expenses[2].id;
//   store
//     .dispatch(startRemoveExpense({ id }))
//     .then(() => {
//       const actions = store.getActions();
//       expect(actions[0]).toEqual({
//         type: "REMOVE_EXPENSE",
//         id,
//       });
//       return database.ref(`expenses/${id}`).once("value"); //fetch the data back to verified that is the actuall data you want to delete
//     })
//     .then((snapshot) => {
//       // expect(snapshot.val()).toBeFalsy(); //toBeFalsy() === null which means once the data is deleted in the db, its will actually return null as a value
//       expect(snapshot.val()).toBe(null);
//       done();
//     });
// });

// //test case for startEditExpense() inorder to edit individual object
// test("should edit expense from firebase", (done) => {
//   const store = createMockStore({});
//   const id = expenses[0].id;
//   const updates = { amount: 2230 };

//   store
//     .dispatch(startEditExpense(id, updates))
//     .then(() => {
//       const actions = store.getActions();
//       expect(actions[0]).toEqual({
//         type: "EDIT_EXPENSE",
//         id,
//         updates,
//       });
//       return database.ref(`expenses/${id}`).once("value");
//     })
//     .then((snapshot) => {
//       expect(snapshot.val().amount).toBe(updates.amount);
//       done();
//     });
// });

//Modify all the Asyn Action Generator Function
const uid = "thisismytestuid";
const defaultAuthState = { auth: { uid } };

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", {
    note: "I bought new core i5 window laptop",
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "I bought new core i5 window laptop" },
  });
});

test("should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

test("should add expense to database and redux store", (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: "Rent",
    amount: 8900,
    createdAt: 120000,
    note: "This was last month rent",
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with default values to database and redux store", (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: "",
    amount: 0,
    createdAt: 0,
    note: "",
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

//test case for fetch setExpenses Action function from redux store
test("should setup setExpense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

//test case for fetch startSetExpenses Action function from firebase
test("should fetch the expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
    done();
  });
});

//test case for startRemoveExpense() inorder to remove individual object
test("should remove expense from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then((snapshot) => {
      // expect(snapshot.val()).toBeFalsy();
      expect(snapshot.val()).toBe(null);
      done();
    });
});

//test case for startEditExpense() inorder to edit individual object
test("should edit expense from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates = { amount: 2230 };

  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
    });
});
