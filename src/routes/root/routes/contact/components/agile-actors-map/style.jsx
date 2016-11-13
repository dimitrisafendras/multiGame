import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  mapElement: {
    width: '100%',
    height: '100%',
  },
  container: {
    height: '360px',
    width: '100%',
    padding: '0px',
    minHeight: '240px',
  },
  textWrapper: {
    width: '242px',
    height: '58px',
    padding: '9px 20px 17px 20px',
    backgroundColor: muiTheme.palette.white,
    boxShadow: '0 2px 11px 0 rgba(0, 0, 0, 0.25)',
    opacity: '0.8',
    position: 'absolute',
    top: '-70px',
    left: '30px',
  },
  title: {
    color: muiTheme.palette.primary1Color,
    fontSize: '13px',
    fontWeight: 'bold',
    lineHeight: '1.7',
    textDecoration: 'none',
    marginBottom: '0px',
  },
  text: {
    fontSize: '15px',
    fontWeight: 'normal',
    lineHeight: '1.2',
    textDecoration: 'none',
  },

  '@media (max-width: 768px)': {
    container: {
      height: '300px',
    },
    textWrapper: {
      width: '208px',
      height: '48.3px',
      padding: '7px 14px 14.7px 14px',
    },
    title: {
      lineHeight: '1.4',
    },
    text: {
      fontSize: '14px',
      lineHeight: '1.1',
    },
  },
  '@media (max-width: 320px)': {
    container: {
      height: '240px',
    },
    textWrapper: {
      width: '137px',
      height: '71px',
      padding: '15px 14px 20px 14px',
    },
    title: {
      lineHeight: '1.5',
    },
    text: {
      fontSize: '13px',
      lineHeight: '1.3',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
