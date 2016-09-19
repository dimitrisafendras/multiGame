import muiTheme from 'styles/customized-mui-theme';

export const style = {
  mainMenu: {
    position: 'fixed',
    top: '0px',
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
    background: '#eeeeee',
    textAlign: 'right',
  },
  mainMenuItem: {
    display: 'inline-block',
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
  appBarIconStyleRight: {
    marginTop: 0,
    marginRight: -24,
    marginLeft: 'auto',
  },
  headerMenuBarMobile: {},
  headerMenuBar: {
    button: {
      height: 60,
      width: 60,
      padding: 6,
      borderLeft: `1px solid ${muiTheme.palette.grey300}`,
    },
    icon: {
      height: 48,
      lineHeight: '48px',
      width: 48,
      color: muiTheme.palette.cyan400,
    },
    loggedInIcon: {
      color: muiTheme.palette.blue600,
      notificationBall: {
        width: 6,
        height: 6,
        display: 'block',
        background: muiTheme.palette.cyan400,
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 1000,
        transform: 'translate(2px, -8px)',
        border: `1px solid ${muiTheme.palette.white}`,
      },
    },
    menuIcon: {
      color: muiTheme.palette.blue600,
    },
  },
  '@media (min-width: 768px)': {
    mainMenu: {
      height: '68px'
    },
    appBarContainer: {
      height: '68px'
    },
    appBarTitleStyle: {
      height: '68px',
      maxHeight: '68px',
    },
    appBar: {
      iconStyleRight: {
        display: 'none !important',
      },
    },
    appBarIconStyleRight: {
      display: 'none !important',
    },
    headerMenuBarMobile: {
        display: 'none !important',
    },
  },
  '@media (min-width: 1200px)': {
    appBar: {
      container: {
        maxHeight: 78,
      },
    },
  },
};
