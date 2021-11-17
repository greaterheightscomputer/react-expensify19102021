import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

// export const PrivateRoute = (props) => <Route {...props} />;

// const mapStateToProps = (state) => ({
//   isAuthenticated: !!state.auth.uid,
// });

// export default connect(mapStateToProps)(PrivateRoute);
// //- let startup dev-server to see if our app we still work like before.
// //- click on Create Expense tab to view it on the browser, its means our app is working like before.

//conditional rendering PrivateRoute component
export const PrivateRoute = (
  { isAuthenticated, component: Component, ...rest } //component is rename to Component its refer to component={ExpenseDashboardPage} on the AppRoute.js component, ..rest refer to the rest of props like exact, path which was not destructed on AppRouter.js file
) => (
  <div>
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
    {console.log(isAuthenticated)}
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid, //!!state.auth.uid its means converting its to falsy value which means converting non-boolean value to boolean value.
});

export default connect(mapStateToProps)(PrivateRoute);
//- restartup dev-server
//- while still logout, click on Create Expense tab its will not render becos of the
//Create Expense is now PrivateRoute and isAuthenticated is false
//- delete the Header component on AppRouter.js also remove the usage as well.
//- import Header from "../components/Header"; onto PrivateRoute.js file add it to the true part
//of the ternary operator like this
// (
//     <div>
//       <Header />
//       <Component {...props} />
//     </div>
//   )
//- restartup the dev-server to see that the Header component is no more on the LoginPage but
//its still on the other components when you login beco's we have added to the PrivateRoute
//component.
