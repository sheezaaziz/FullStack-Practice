import React, { useContext, useState } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  Button,
  Link,
  Typography,
} from '@material-ui/core';
import { MailOutline, LockOutlined, PersonOutlineOutlined } from '@material-ui/icons';
import { Link as RouterLink, Redirect } from 'react-router-dom';

import { useStyles } from "./SignUpPage.module.js";

import { db, auth, functions } from '../../firebase/firebaseInit';
import { UsersContext } from '../../contexts/UsersContext';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [submitMsg, setSubmitMsg] = useState('');

  const { test, signedIn } = useContext(UsersContext);
  const [stateSignedIn, setStateSignedIn] = signedIn;

  const styles = useStyles();

  console.log(test);

  const handleSignUpSubmit = (evt) => {
    evt.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log('id:', cred.user.uid);
        setStateSignedIn(true);
        return db.collection('users').doc(cred.user.uid).set({
          username: username,
        })
      })
      .catch((err) => {
        console.log(err);
        setStateSignedIn(false);
        setSubmitMsg(err.message);
      })
  }

  return (
    <Box className={styles.root}>
      <form className={styles.form} noValidate autoComplete="off" onSubmit={handleSignUpSubmit}>
        <Typography variant="h4" component="h5" className={styles.header}>
          Get Started
        </Typography>
        {
          stateSignedIn
          ?
          <RouterLink to='/welcome'>
            <p>Pls click here to get started.</p>
          </RouterLink>
          :
          <p>{ submitMsg }</p>
        }
        <TextField
          id="username"
          label="Username"
          name="username"
          onChange={e => setUsername(e.target.value)}
          className={styles.input}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineOutlined />
              </InputAdornment>
            )
          }}
        />
        <TextField
          id="email"
          label="Email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          className={styles.input}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutline />
              </InputAdornment>
            )
          }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
          className={styles.input}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined />
              </InputAdornment>
            )
          }}
        />

        <Button
          classes={{root: styles.appBtn}}
          size="large"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
      <p className={styles.footer}>
        Or, <RouterLink to='signIn' className={styles.link}>Sign In.</RouterLink>
      </p>
    </Box>
  )
}
// <RouterLink to='/welcome' style={{ textDecoration: 'none' }}>
// </RouterLink>
