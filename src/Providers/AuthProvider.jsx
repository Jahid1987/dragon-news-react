import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const gitHubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

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

  // sign up with github

  function signUpWithGithub() {
    return signInWithPopup(auth, gitHubProvider);
  }

  // sign up with facebook
  function singUpWithFacebook() {
    return signInWithPopup(auth, facebookProvider);
  }

  //   user log in
  function logInUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // sign Out user
  function signOutUser() {
    return signOut(auth);
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
    signUpWithGithub,
    singUpWithFacebook,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
