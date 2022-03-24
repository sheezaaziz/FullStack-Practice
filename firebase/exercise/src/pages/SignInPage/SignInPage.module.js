import { makeStyles } from '@material-ui/core/styles';

import colours from '../../config/colours';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
  },
  form: {
    margin: 'auto',
    color: `${colours.light}`,
    backgroundColor: `${colours.purple}`,
    boxShadow: `0px 0px 30px -6px ${colours.purple}`,
    width: '60vh',
    height: '60vh',
    borderRadius: '1.2em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    marginTop: 20,
    color: `${colours.dark}`,
  },
  input: {
    margin: '20px 0px 0px 0px',
    width: '350px',
  },
  appBtn: {
    margin: '30px 0px 0px 0px',
    width: '350px',
    backgroundColor: `${colours.dark}`,
    color: `${colours.purple}`,
    borderRadius: '1.2em',
    '&:hover': {
      backgroundColor: `${colours.light}`,
      color: `${colours.purple}`,
      transition: '0.8s',
    }
  },
  link: {
    color: `${colours.dark}`,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  footer: {
    fontSize: 18,
  }
});
