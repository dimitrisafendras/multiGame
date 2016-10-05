import muiTheme from 'styles/customized-mui-theme';

export const style = {
  appBar: {
    container: {
      boxShadow: 'none',
      overflow: 'hidden',
    },
    titleStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
      overflow: 'hidden',
      height: 60,
      maxHeight: 60,
    },
    iconStyleRight: {
      marginTop: 0,
      marginRight: -24,
      marginLeft: 'auto',
    },
  },
  appBarIconStyleRight: {
    marginTop: 0,
    marginRight: -24,
    marginLeft: 'auto',
  },
  mainMenu: {
    position: 'fixed',
    top: '0px',
    width: '100%',
    maxWidth: muiTheme.appBar.maxWidth,
    zIndex: '100',
  },
  headerMenuBar: {
    mobile: {
      position: 'fixed',
      top: 0,
      right: 60,
      zIndex: 1200,
      height: 60,
    },
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
      color: muiTheme.palette.blue700,
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
      color: muiTheme.palette.blue700,
    },
  },
  '@media (min-width: 768px)': {
    appBar: {
      iconStyleRight: {
        display: 'none !important',
      },
    },
    appBarIconStyleRight: {
      display: 'none !important',
    },
    headerMenuBar: {
      mobile: {
        display: 'none !important',
      },
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
