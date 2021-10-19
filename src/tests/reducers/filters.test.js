import moment from "moment";
import filterReducer from "../../reducers/filters";

//test case for the default filters object
test("should setup default filter values", () => {
  const state = filterReducer(undefined, { type: "@@INIT" }); //undefined is use in place of state argument while { type: "@@INIT" } is a special action object redux dispatch in the Redux store and it is use in place of action object
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should setup sortBy to amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should setup sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount", //inorder to change the default value from date to amount
    startDate: undefined,
    endDate: undefined,
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const text = "i am coding";
  const action = { type: "SET_TEXT_FILTER", text };
  const state = filterReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("should set startDate filter", () => {
  const startDate = moment();
  const action = { type: "SET_START_DATE", startDate };
  const state = filterReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test("should set endDate filter", () => {
  const endDate = moment();
  const action = { type: "SET_END_DATE", endDate };
  const state = filterReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
