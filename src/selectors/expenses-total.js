// export default (expenses) => {
//   if (expenses.length === 0) {
//     return 0;
//   } else {
//     return expenses
//       .map((expense) => expense.amount)
//       .reduce((sum, value) => sum + value, 0);
//   }
// };

//refactor of our code for the purpose of speed
export default (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0);
};
