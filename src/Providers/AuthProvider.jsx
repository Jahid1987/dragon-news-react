import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Register user
  function registerUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // set display name and photo url
  function setDetails(name, url) {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  }

  //   user log in
  function logInUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // observing user here
  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth, (user) => setUser(user));
    return () => {
      unsubScribe();
    };
  }, []);

  const authInfo = {
    user,
    registerUser,
    setDetails,
    logInUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
