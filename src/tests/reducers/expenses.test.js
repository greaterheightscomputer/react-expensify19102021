import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should setup add expense", () => {
  const expense = {
    id: "123abc",
    description: "Laptop",
    amount: 150000,
    note: "bought a new Hp Laptop",
    createdAt: 200000,
  };
  const action = { type: "ADD_EXPENSE", expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should setup edit an expense", () => {
  const amount = 1500;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: { amount },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("should not setup edit expense if id not found", () => {
  const amount = 1500;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-10",
    updates: { amount },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

//test for setExpenses Action function
test("should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]],
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
