import muiTheme from 'styles/customized-mui-theme';

const {
  palette,
  appBar,
} = muiTheme;

export const style = {
  component: {
    position: 'fixed',
    width: '100%',
    zIndex: '99999',
    backgroundColor: palette.blue700,

    '&.scrollbar': {
      top: appBar.height,
      // bottom: `${0}px`,
      overflowY: 'scroll',
      overflowX: 'hidden',
    },
  },
  container: {
    overflow: 'scroll',
    paddingTop: '30px',
    paddingBottom: 'calc(30px + 2%)',
    paddingLeft: '9.4%',
    paddingRight: '9.4%',
    boxSizing: 'border-box',
    maxWidth: appBar.maxWidth,
  },
  actionsWrapper: {
    color: palette.white,
    marginBottom: '20px',
  },
  action: {
    cursor: 'pointer',
    marginRight: '30px',
  },
  close: {
    cursor: 'pointer',
    fontSize: '30px',
  },
  '@media (min-width: 1600px)': {
    component: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  '@media (max-width: 1100px)': {
    container: {
      paddingLeft: 'calc(1.5% + 15px) !important',
      paddingRight: 'calc(1.5% + 15px) !important',
    },
  },
};

export const appBarHeight = parseInt(appBar.height);
