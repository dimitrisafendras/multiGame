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
  headerMenuBarMobile: {},
  headerMenuBarButton: {
    height: '60px !important',
    width: '60px !important',
    padding: '6px !important',
    marginLeft: 'auto !important',
    borderLeft: `1px solid ${muiTheme.palette.grey300}`,
  },
  headerMenuBar: {
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
    headerMenuBarButton: {
      height: '68px !important',
      width: '68px !important',
      padding: '10px !important',
      marginLeft: 'auto !important',
    },
    appBarContainer: {
      height: '68px',
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
      // display: 'none !important',
    },
    headerMenuBarMobile: {
      // display: 'none !important',
    },
  },
  '@media (min-width: 1200px)': {
    mainMenuContent: {
      maxWidth: `500px`,
    },
    appBar: {
      container: {
        maxHeight: 78,
      },
    },
  },
};
