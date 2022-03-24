import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// contexts
import { UserAuthenticationProvider } from '../contexts/UserAuthenticationContext';
import { UsersInfoProvider } from '../contexts/UsersInfoContext';
// components
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
// pages
import SignIn from '../components/UserAuthentication/SignIn';
import SignUp from '../components/UserAuthentication/SignUp';
import Profile from '../components/Profile/Profile';
import Lobby from '../components/Lobby/Lobby';

export default function Routes() {
  return (
    <Router>
      <UserAuthenticationProvider>
        <Switch>
          <Route exact path='/' component={SignIn}>
            <Redirect to='/signin'/>
          </Route>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>
          <UsersInfoProvider>
            <ProtectedRoute exact path='/profile' component={Profile}/>
            <ProtectedRoute exact path='/lobby' component={Lobby}/>
          </UsersInfoProvider>
        </Switch>
      </UserAuthenticationProvider>
    </Router>
  )
}
