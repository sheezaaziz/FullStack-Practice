import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { UsersContextProvider } from '../contexts/UsersContext';
import WelcomePlayerPage from '../pages/WelcomePlayerPage/WelcomePlayerPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import GameLobbyPage from '../pages/GameLobbyPage/GameLobbyPage';

export default function Routes() {
  return (
    <UsersContextProvider>
      <Router>
        <Switch>
          <Route path='/signIn'>
            <SignInPage/>
          </Route>
          <Route path='/signUp'>
            <SignUpPage/>
          </Route>
          <Route path='/welcome'>
            <WelcomePlayerPage/>
          </Route>
          <Route path='/lobby'>
            <GameLobbyPage/>
          </Route>
          <Route path='/'>
            <SignInPage/>
          </Route>
        </Switch>
      </Router>
    </UsersContextProvider>
  )
}
