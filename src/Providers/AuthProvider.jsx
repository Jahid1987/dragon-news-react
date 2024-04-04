import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
