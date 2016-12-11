import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  headerMenuBarButton: {
    height: `${muiTheme.appBar.mobileHeight}px`,
    padding: '6px',
    textTransform: 'uppercase',
    color: muiTheme.palette.cyan400,
  },
  headerMenuBarButtonLogin: {
    opacity: 0.75,
    '&:hover': {
      opacity: 1,
    },
    '&:hover:after': {
      transform: 'translateY(-100%)',
    },
  },
  headerMenuBarButtonMenu: {
    borderLeft: `1px solid ${muiTheme.palette.grey300}`,
  },
  headerMenuBarButtonUserLoggedIn: {
    color: `${muiTheme.palette.blue600}`,
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
  '@media (min-width: 768px)': {
    headerMenuBarButton: {
      height: `${muiTheme.appBar.tabletHeight}px !important`,
      padding: '10px',
      marginRight: 'auto',
    },
    headerMenuBarButtonLoggedIn: {
      padding: '0px',
    },
    headerMenuBarButtonLogout: {
      height: '38px',
      width: 'auto',
      padding: '0',
      marginTop: '5px',
      borderLeft: `1px solid ${muiTheme.palette.grey300}`,
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
