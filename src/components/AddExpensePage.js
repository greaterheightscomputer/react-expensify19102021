// import React from "react";
// import { connect } from "react-redux";
// import ExpenseForm from "./ExpenseForm";
// import { addExpense } from "../actions/expenses";

// export class AddExpensePage extends React.Component {
//   onSubmit = (expense) => {
//     this.props.addExpense(expense);
//     this.props.history.push("/");
//   };
//   render() {
//     return (
//       <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm onSubmitForm={this.onSubmit} />
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   addExpense: (expense) => dispatch(addExpense(expense)),
// });
// export default connect(undefined, mapDispatchToProps)(AddExpensePage);

//changing of addExpense() Action Generator Function to startAddExpense() Asynchronous Action Generator Function
import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmitForm={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
