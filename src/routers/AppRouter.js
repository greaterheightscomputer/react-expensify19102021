import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboard";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpExpensePage from "../components/HelpExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

//challenge area
//- create 6 new files for the 6 components inside src/components folder
//- setup imports, stateless component, default export
//- import into AppRouter.js so they can be used

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} exact />
        <Route path="/edit/:id" component={EditExpensePage} exact />
        <Route path="/help" component={HelpExpensePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
