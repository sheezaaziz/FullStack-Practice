import React from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  Button,
  Link,
  Typography,
} from '@material-ui/core';
import { MailOutline, LockOutlined, PersonOutlineOutlined } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

import { useStyles } from "./SignInPage.module.js";

export default function SignInPage() {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <form className={styles.form} noValidate autoComplete="off">
        <Typography variant="h4" component="h5" className={styles.header}>
          Welcome Back
        </Typography>
        <TextField
          id="email"
          label="Email"
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
          className={styles.input}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined />
              </InputAdornment>
            )
          }}
        />

      <RouterLink to='/welcome' style={{ textDecoration: 'none' }}>
        <Button
          classes={{root: styles.appBtn}}
          size="large"
        >
          Sign In
        </Button>
      </RouterLink>

        <p className={styles.footer}>
          Or, <RouterLink to='/signUp' className={styles.link}>Sign Up.</RouterLink>
        </p>
      </form>
    </Box>
  )
}
