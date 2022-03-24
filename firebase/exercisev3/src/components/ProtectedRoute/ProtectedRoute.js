import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// contexts
import { useAuth } from '../../contexts/UserAuthenticationContext';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      { ...rest }
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to='/signIn'/>
      }}
    />
  )
}
