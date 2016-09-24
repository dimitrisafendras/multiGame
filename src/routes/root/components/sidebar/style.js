import muiTheme from 'styles/customized-mui-theme';

const {
  cyan400,
  cyan500,
  grey400,
  white,
  primary2Color,
  primary1Color,
} = muiTheme.palette;

const style = {
  drawerContainer: {
    width: 320,
  },
  drawerUserButtonHolder: {
    height: 36,
    padding: '12px 6px',
    background: cyan500,
    borderBottom: '1px solid ' + grey400,
    button: {
      color: white,
      hoverColor: cyan500,
      borderRight: `1px solid ${cyan400}`,
    },
    buttonLast: {
      borderRight: 'none',
    },
  },
  closeButton: {
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 500,
    height: 60,
    width: 60,
    padding: 6,
    background: white,
    icon: {
      color: primary2Color,
    },
  },
  divider: {
    borderBottom: '1px solid ' + grey400,
  },
  menuItem: {
    padding: '10px 20px',
    color: primary1Color,
    textTransform: 'uppercase',
    fontSize: 14,
  },
};

export {
  style,
};
