// react
import React, { useState, useEffect, useContext } from 'react';

// material-ui
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Avatar,
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from '@material-ui/core';

// internal stuff
import { useStyles } from "./PlayerZone.module.js";
import defaultUser from "../../assets/imgs/defaultUser.png";
import colours from "../../config/colours";

import { db, auth, functions } from '../../firebase/firebaseInit';
import { UsersContext } from '../../contexts/UsersContext';

export default function PlayerZone({ children }) {
  const [colour, setColour] = useState(`${colours.light}`);
  const [open, setOpen] = useState(false);

  const { test, signedIn } = useContext(UsersContext);
  const [stateSignedIn, setStateSignedIn] = signedIn;

  const props = {
    backgroundColor: colour
  };

  const styles = useStyles(props);

  const handleChange = (event) => {
    setColour(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Card className={styles.root}>
      <CardContent className={styles.content}>
        <Avatar src={defaultUser} variant="square" className={`${styles.avatar} ${styles.pos}`}/>
        <Typography variant="h5" component="h2" className={styles.pos}>
          Welcome, Player Name!
        </Typography>
        <Typography className={styles.pos} color="textSecondary">
          Please choose a colour.
        </Typography>
        <FormControl className={`${styles.formControl} ${styles.pos}`}>
          <InputLabel id="form-choose-colour">Colour</InputLabel>
          <Select
            labelId="form-choose-colour"
            id="form-colour"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={colour}
            onChange={handleChange}
          >
            <MenuItem value={colours.light}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={colours.red}>Red</MenuItem>
            <MenuItem value={colours.blue}>Blue</MenuItem>
            <MenuItem value={colours.orange}>Orange</MenuItem>
            <MenuItem value={colours.green}>Green</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button size="small" className={styles.button}>Update Picture</Button>
      </CardActions>
    </Card>
  )
}
