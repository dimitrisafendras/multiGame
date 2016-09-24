import muiTheme from "styles/customized-mui-theme";

export const style = {
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
    height: '60px !important',
    width: '60px !important',
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
      '&:after': {
        transform: 'translateY(-100%)',
      }
    }
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
      height: '68px',
    },
    mainMenuContent: {
      width: `calc(100% - 320px)`,
    },
    mainMenuItem: {
      height: '68px',
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
      height: '68px !important',
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
    headerMenuBarButtonMenu: {
      display: 'none !important',
    },
    appBarContainer: {
      height: '68px',
    },
    appBarTitleStyle: {
      height: '68px',
      maxHeight: '68px',
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
      maxWidth: `800px`,
    },
    appBar: {
      container: {
        maxHeight: 78,
      },
    },
  },
};
