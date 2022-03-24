import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import { useStyles } from "./GameLobbyTable.module.js";

export default function GameLobbyTable() {
  const styles = useStyles();

  const rows = [
    {
      'player': 'sheeza',
      'colour': 'red',
    },
    {
      'player': 'tree',
      'colour': 'green',
    },
    {
      'player': 'jb',
      'colour': 'purple',
    },
  ]

  return (
    <TableContainer component={Paper}>
      <Table classes={{root: styles.table}}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Player</TableCell>
            <TableCell align="center">Colour</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.player}>
              <TableCell component="th" scope="row" align="center">
                {row.player}
              </TableCell>
              <TableCell align="center">{row.colour}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
