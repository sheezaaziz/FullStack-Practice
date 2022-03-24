import { makeStyles } from '@material-ui/core/styles';

import colours from "../../config/colours";

export const useStyles = makeStyles({
  root: {
    width: 375,
    height: 250,
    width: '55vh',
    height: '40vh',
    backgroundColor: props => props.backgroundColor,
    boxShadow: props => `0px 0px 500px 0px ${props.backgroundColor}`,
    borderRadius: '1em',
  },
  content: {
    margin: 'auto',
    textAlign: 'center',
  },
  avatar: {
    margin: 'auto',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 10,
  },
  formControl: {
    margin: '5px',
    minWidth: 120,
  },
  button: {
    margin: 'auto',
  }
});
