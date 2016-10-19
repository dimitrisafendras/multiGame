import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  mainMenu: {
    position: 'fixed',
    top: '0px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: muiTheme.appBar.maxWidth,
    zIndex: '100',
  },
  mainMenuContent: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    width: `calc(100% - ${muiTheme.appBar.logoWidth})`,
    height: '100%',
    zIndex: '1200',
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'flex-end',
  },
  mainMenuItem: {
    flexShrink: 1,
  },
  mainMenuItemGrow: {
    flexGrow: 1,
  },
  mainMenuItemMobile: {
    display: 'block',
  },
  mainMenuItemTablet: {
    display: 'none',
  },
  mainMenuIconContainer: {
    borderLeft: `1px solid ${muiTheme.palette.grey300}`,
  },
  appBarContainer: {},
  appBar: {
    boxShadow: 'none',
    overflow: 'hidden',
    height: '100%',
    alignItems: 'center',
  },
  appBarTitleStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    overflow: 'hidden',
    height: 60,
    maxHeight: 60,
  },
  logo: {},
  headerMenuBarButton: {
    height: `${muiTheme.appBar.mobileHeight}px !important`,
    width: `${muiTheme.appBar.mobileHeight}px !important`,
    padding: '6px !important',
    marginLeft: 'auto !important',
    textTransform: 'uppercase',
    color: muiTheme.palette.cyan400,
  },
  headerMenuBarButtonMenu: {
    borderLeft: `1px solid ${muiTheme.palette.grey300} !important`,
  },
  headerMenuBarButtonUserLoggedIn: {
    color: `${muiTheme.palette.blue600} !important`,
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
    mainMenu: {
      height: `${muiTheme.appBar.tabletHeight}px`,
    },
    mainMenuContent: {
      width: `calc(100% - 320px)`,
      maxWidth: `500px`,
    },
    mainMenuItem: {
      height: `${muiTheme.appBar.tabletHeight}px`,
    },
    mainMenuItemMobile: {
      display: 'none',
    },
    mainMenuItemTablet: {
      display: 'block',
    },
    mainMenuIconContainer: {
      borderRight: `1px solid ${muiTheme.palette.grey300}`,
    },
    headerMenuBarButton: {
      height: `${muiTheme.appBar.tabletHeight}px !important`,
      width: 'auto !important',
      padding: '10px !important',
      marginLeft: 'auto !important',
    },
    headerMenuBarButtonLoggedIn: {
      padding: '0px !important',
    },
    headerMenuBarButtonLogout: {
      height: '38px !important',
      width: 'auto !important',
      padding: '0 !important',
      marginTop: '5px !important',
      borderLeft: `1px solid ${muiTheme.palette.grey300} !important`,
    },
    appBarContainer: {
      height: `${muiTheme.appBar.tabletHeight}px`,
    },
    appBarTitleStyle: {
      height: `${muiTheme.appBar.tabletHeight}px`,
      maxHeight: `${muiTheme.appBar.tabletHeight}px`,
    },
    logo: {},
    appBar: {
      iconStyleRight: {
        display: 'none !important',
      },
    },
  },
  '@media (min-width: 1200px)': {
    mainMenuContent: {
      maxWidth: `400px`,
    },
    appBar: {
      container: {
        maxHeight: 78,
      },
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
