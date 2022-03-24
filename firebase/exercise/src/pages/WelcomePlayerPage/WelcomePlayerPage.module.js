import { makeStyles } from '@material-ui/core/styles';

import colours from '../../config/colours';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignSelf: 'center',
    height: '100vh',
  },
  content: {
    margin: 'auto',
    textAlign: 'center',
  },
  appBtn: {
    border: `2px solid ${colours.light}`,
    color: `${colours.light}`,
    marginTop: '20px',
    width: '55vh',
    borderRadius: '1em',
    '&:hover': {
      backgroundColor: `${colours.light}`,
      color: `${colours.dark}`
    }
  },
});
