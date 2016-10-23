import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

//
// Define the CSS styles of the component.
//
const styles = {
  container: {
    height: '360px',
    width: '100%',
    padding: '0px',
    minHeight: '240px',

  },
  textWrapper: {
    width: '240px',
    height: '60px',
    opacity: '0.8',
    backgroundColor: muiTheme.palette.white,
    boxShadow: '0 2px 11px 0 rgba(0, 0, 0, 0.25)',
    padding:'9px 20px 17px 20px',
},
  link: {
    textDecoration: 'none',
    color: muiTheme.palette.textColor,
  },
  title: {
    color: muiTheme.palette.primary1Color,
    fontSize: '15px',
    fontWeight: '600',
    lineHeight: '1.2',
    textDecoration: 'none',
  },
  text: {
    fontSize: '13px',
    fontWeight: 'bold',
    lineHeight: '1.7',
    textDecoration: 'none',
  },
  
  '@media (max-width: 768px)': {
    container: {
      height: '300px',
    },
    textWrapper: {
      width: '196px',
      height: '62px',
      padding:'7px 14px 15px 14px',
    },
  },
  '@media (max-width: 320px)': {
    container: {
      height: '240px',
    },
    textWrapper: {
      width: '165px',
      height: '106x',
      padding: '5px 0 5px 0',
    },
    title: {
      lineHeight : '1',
    },
    text: {
      lineHeight : '1',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
