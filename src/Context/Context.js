import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../FireBase/FireBase.config";

export const authContext = createContext();
const auth = getAuth(app);

const Context = ({ children }) => {
  const [courseData, setCourseData] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // data load useEffect 

  useEffect(() => {
    axios.get("http://localhost:5000/course").then((res) => {
      setCourseData(res.data);
    });
  }, []);

  // user monitor function useEffect

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
        setLoading(false);
      }
    });
  }, []);

  //logout function

  const logOut = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
}

  //sign up function

  const emailSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in function

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  // google sign in

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github sign in

  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }


  // context value 

  const contextValue = {
    courseData,
    emailSignUp,
    logOut,
    user,
    signInUser,
    googleSignIn,
    githubSignIn,
    isLoading,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default Context;
