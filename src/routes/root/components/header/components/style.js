import muiTheme from 'styles/customized-mui-theme';

export const style = {
  logo: {},
  headerMenuBarButton: {
    height: `${muiTheme.appBar.mobileHeight}px !important`,
    width: `${muiTheme.appBar.mobileHeight}px !important`,
    padding: '6px !important',
    marginLeft: 'auto !important',
    textTransform: 'uppercase',
    color: muiTheme.palette.cyan400,
  },
  headerMenuBarButtonLogin: {
    opacity: 0.75,
    '&:after': {
      content: '    ',
      display: 'block',
      position: 'absolute',
      top: '100%',
      width: '100%',
      height: '3px',
      backgroundColor: muiTheme.palette.cyan400,
      transition: '300ms',
    },
    '&:hover': {
      opacity: 1,
    },
    '&:hover:after': {
      transform: 'translateY(-100%)',
    },
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
