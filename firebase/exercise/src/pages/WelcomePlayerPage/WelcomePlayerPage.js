import React, { useContext } from 'react';
import {
  Button
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import PlayerZone from '../../components/PlayerZone/PlayerZone';
import { useStyles } from "./WelcomePlayerPage.module.js";
import styles from './WelcomePlayerPage.module.js';

import { db, auth, functions } from '../../firebase/firebaseInit';
import { UsersContext } from '../../contexts/UsersContext';

export default function WelcomePlayerPage() {
  const styles = useStyles();

  const { test, signedIn } = useContext(UsersContext);
  const [stateSignedIn, setStateSignedIn] = signedIn;

  return (
    <div>
      {
        stateSignedIn
        ?
        <div className={styles.root}>
          <div className={styles.content}>
            <PlayerZone/>
            <RouterLink to='/lobby' style={{ textDecoration: 'none' }}>
              <Button
                classes={{root: styles.appBtn}}
                size="large"
                variant="outlined"
              >
                Move to Lobby 👉
              </Button>
            </RouterLink>
          </div>
        </div>
        :
        <p>You need to sign in to visit this page!</p>
      }
    </div>
  )
}
