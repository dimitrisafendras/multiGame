import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  container: {
    width: '260px',
    paddingBottom: '36px', // TODO -12px
    paddingTop: '25px',
  },
  providerWrapper: {
    width: '260px',
    height: '40px',
    borderRadius: '3px',
    marginBottom: '10px',
  },
  button: {
    zIndex: 3,
    boxShadow: 'none',
    display: 'inline-table',
    color: muiTheme.palette.white,
    fontSize: '13px',
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
