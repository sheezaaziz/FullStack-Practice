import React, { useContext, createContext, useState, useEffect } from 'react';
import { auth, firebase } from '../firebase';

const UserAuthenticationContext = createContext();

export function useAuth() {
  return useContext(UserAuthenticationContext);
}

export function UserAuthenticationProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const signup = (email, password, username) => {
    return auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        const addUsername = firebase.functions().httpsCallable('addUsername');
        return addUsername({ username });
      })
      .catch((err) => setError(err.message));
  }

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
      .catch((err) => setError(err.message));
  }

  const signout = () => {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    })

    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    error,
    signin,
    signup,
    signout,
  }

  return (
    <UserAuthenticationContext.Provider value={value}>
      {!loading && children}
    </UserAuthenticationContext.Provider>
  )
}
