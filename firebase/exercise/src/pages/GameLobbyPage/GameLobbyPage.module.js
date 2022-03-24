import { makeStyles } from '@material-ui/core/styles';

import colours from '../../config/colours';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '30%',
    margin: 'auto',
    height: '100vh',
  },
  content: {
    margin: 'auto',
    textAlign: 'center',
  },
  appBtn: {
    border: `2px solid ${colours.light}`,
    color: `${colours.light}`,
    width: '100%',
    marginTop: '20px',
    borderRadius: '1em',
    '&:hover': {
      backgroundColor: `${colours.light}`,
      color: `${colours.dark}`
    }
  }
});
