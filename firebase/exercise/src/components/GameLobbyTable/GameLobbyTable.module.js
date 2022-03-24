import { makeStyles } from '@material-ui/core/styles';

import colours from '../../config/colours';

export const useStyles = makeStyles({
  table: {
    width: 500,
    margin: 'auto',
    backgroundColor: `${colours.light}`,
  }
});
