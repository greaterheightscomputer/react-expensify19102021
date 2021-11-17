import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = (
  { isAuthenticated, component: Component, ...rest } //component is rename to Component its refer to component={ExpenseDashboardPage} on the AppRoute.js component, ..rest refer to the rest of props like exact, path which was not destructed on AppRouter.js file
) => (
  <div>
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Redirect to="/dashboard" /> //once the user is login and click on Dashboard tab its redirect user to dashboard page
        ) : (
          <Component {...props} /> //if user is not login its will view loginPage
        )
      }
    />
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid, //!!state.auth.uid its means converting its to falsy value which means converting non-boolean value to boolean value.
});

export default connect(mapStateToProps)(PublicRoute);
