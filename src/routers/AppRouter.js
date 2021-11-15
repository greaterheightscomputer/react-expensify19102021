import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import ExpenseDashboardPage from "../components/ExpenseDashboard";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpExpensePage from "../components/HelpExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute
          path="/dashboard"
          component={ExpenseDashboardPage}
          exact
        />
        <PrivateRoute path="/create" component={AddExpensePage} exact />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} exact />
        <Route path="/help" component={HelpExpensePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
