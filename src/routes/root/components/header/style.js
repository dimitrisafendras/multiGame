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
  logo: {
    marginTop: '10px',
    marginLeft: '40px',
  },
  mobileMenu: {
    display: 'none',
    position: 'fixed',
    right: '0px',
  },
  headerMenuBarButton: {
    height: `${muiTheme.appBar.mobileHeight}px`,
    width: `${muiTheme.appBar.mobileHeight}px`,
    padding: '6px',
    marginLeft: 'auto',
    textTransform: 'uppercase',
    color: muiTheme.palette.cyan400,
  },
  headerMenuBar: {
    button: {
      color: muiTheme.palette.cyan400,
    },
    icon: {
      color: muiTheme.palette.cyan400,
    },
    menuIcon: {
      color: muiTheme.palette.blue600,
    },
  },
  '@media (max-width: 960px)': {
    normalMenu: {
      display: 'none',
    },
    mobileMenu: {
      display: 'block',
    },
    button: {
      marginTop: 'calc(6.1% + 20px)',
    },
  },
  '@media (min-width: 768px)': {
    headerMenuBarButton: {
      height: `${muiTheme.appBar.tabletHeight}px`,
      width: 'auto',
      padding: '10px',
      marginLeft: 'auto',
      borderLeft: `1px solid ${muiTheme.palette.grey300}`,
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
