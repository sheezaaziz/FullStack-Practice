import React from 'react';
import {
  Box,
  Typography,
  Button,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import GameLobbyTable from "../../components/GameLobbyTable/GameLobbyTable";
import { useStyles } from "./GameLobbyPage.module.js";

export default function GameLobbyPage() {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Box className={styles.content}>
        <Typography variant="h4" component="h1" gutterBottom>
          Game Lobby
        </Typography>
        <GameLobbyTable/>
        <RouterLink to='/welcome' style={{ textDecoration: 'none' }}>
          <Button
            classes={{root: styles.appBtn}}
            size="large"
            variant="outlined"
          >
            👈 Back to Player Edit
          </Button>
        </RouterLink>
      </Box>
    </Box>
  )
}
