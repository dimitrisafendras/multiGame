import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  appBar: {
    position: 'fixed',
    top: '0px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: '68px',
    zIndex: '100',
    background: muiTheme.palette.white,
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2)',
  },
  tabsContainer: {
    marginLeft: 'auto',
    minWidth: '400px',
  },
  logo: {
    marginLeft: '40px',
  },
  mobileMenu: {
    display: 'none',
    position: 'fixed',
    right: '5px',
    top: '10px',
  },
  menuIcon: {
    color: muiTheme.palette.blue600,
  },
  '@media (max-width: 960px)': {
    normalMenu: {
      display: 'none',
    },
    tabsContainer: {
      display: 'none',
    },
    mobileMenu: {
      display: 'block',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
