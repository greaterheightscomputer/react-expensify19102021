import { firebase, googleAuthProvider } from "../firebase/firebase";

//Async Action Generator Function
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

//Redux Action Generator Function
export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const logout = () => ({
  type: "LOGOUT",
});
