import React, { useState, createContext } from 'react';

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <UsersContext.Provider value={{
        test: 'hello this is a big test!',
        signedIn: [signedIn, setSignedIn],
    }}>
        {props.children}
    </UsersContext.Provider>
  )
}
