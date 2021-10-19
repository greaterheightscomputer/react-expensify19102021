import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  //assertion
  //   expect(action).toBe({
  //     type: "REMOVE_EXPENSE",
  //     id: "123abc",
  //   });
  //using toBe() method on object or array will throw error but it is ok on string

  //toEqual() method will work perfectly on both object and array
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
  const expenseData = {
    description: "Rent",
    amount: 8900,
    createdAt: 120000,
    note: "This was last month rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String), //expect.any() can be a expect.any(Number), expect.any(String) it is use to generate an dynamic number or string
    },
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
