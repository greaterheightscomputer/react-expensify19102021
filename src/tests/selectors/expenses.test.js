import moment from "moment";
import selectExpenses from "../../selectors/expenses";
import expenses from "../fixtures/expenses";
// const expenses = [
//   {
//     id: "1",
//     description: "Rice",
//     note: "",
//     amount: 200,
//     createdAt: 0,
//   },
//   {
//     id: "2",
//     description: "Shirt",
//     note: "",
//     amount: 890,
//     createdAt: moment(0).subtract(4, "days").valueOf(),
//   },
//   {
//     id: "3",
//     description: "Rent",
//     note: "",
//     amount: 1500,
//     createdAt: moment(0).add(4, "days").valueOf(),
//   },
// ];

test("should filter by text value", () => {
  //each test case will defined the filter they want to use.
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0), //we need moment instance inorder not to have issue
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, "days"), //filtered out individual expense object that is greater than 2 days
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});
