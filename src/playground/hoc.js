//Higher Order Component (HOC) -> A component (HOC) that renders another component.
//- The Goal of HOC
//-* Reuse code
//-* Render hijacking
//-* Prop manipulation
//-* Abstract state

// import React from "react";
// import ReactDOM from "react-dom";

// //Regular React functional component
// const Info = (props) => (
//   <div>
//     <h1>Infor</h1>
//     <p>The infor is: {props.info}</p>
//   </div>
// );
// // ReactDOM.render(
// //     <Info info="There are the details" />,
// //     document.getElementById("app")
// //   );

// //Higher Order Component (HOC)-> is a regular function that pass in component as an argument
//and its return Higher Order Component
// const withAdminWarning = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       {props.isAdmin && <p>This is private info. Please don't share!</p>}
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

// //passin Info React component as an argument to the withAdminWarning function
// //AdminInfo is a component create from withAdminWarning function
// const AdminInfo = withAdminWarning(Info);

// // ReactDOM.render(
// //     <AdminInfo isAdmin={true} info="There are the details" />,
// //     document.getElementById("app")

// //Challenge area
// //create HOC called requireAuthentication(Info);
// const requireAuthentication = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       {props.isAuthenticated ? (
//         <WrappedComponent {...props} />
//       ) : (
//         <p>Please login to view the info</p>
//       )}
//     </div>
//   );
// };

// const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AuthInfo isAuthenticated={false} info="There are the details" />,
//   document.getElementById("app")
// );

//back to app.js file
