import moment from "moment";

//Get visible expenses
// export default (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses
//     .filter((expense) => {
//       const textMatch = expense.description
//         .toLowerCase()
//         .includes(text.toLowerCase());
//       const startDateMatch =
// typeof startDate !== "number" || expense.createdAt >= startDate;
//       const endDateMatch =
//         typeof endDate !== "number" || expense.createdAt <= endDate;

//       return textMatch && startDateMatch && endDateMatch;
//       //using comparedFunction for sorting array object
//     })
//     .sort((a, b) => {
//       if (sortBy === "date") {
//         return a.createdAt < b.createdAt ? 1 : -1;
//       } else if (sortBy === "amount") {
//         return a.amount < b.amount ? 1 : -1;
//       }
//     });
// };
// export default getVisibleExpenses;

// refactor of selectors/expenses.js file inorder to filter the data on the Dashboard page by
//startDate and endDate by using moment instance to compare two dates
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt); //moment instance
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
