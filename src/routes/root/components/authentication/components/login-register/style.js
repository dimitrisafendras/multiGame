import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  formContainer: {
    backgroundColor: muiTheme.palette.white,
    color: muiTheme.palette.grey600,
    boxShadow: '0px 0px 40px 0px rgba(13,71,161,0.3)',
    width: ' 50%',
    zIndex: '2',
    position: 'relative',
    minHeight: '398px', // TODO: when add login/register form
    minWidth: '280px',

    '&.login:after': {
      bottom: '100%',
      left: '23px',
      border: 'solid transparent',
      content: 'close-quote',
      height: '0px',
      width: '0',
      position: 'absolute',
      pointerEvents: 'none',
      borderColor: 'rgba(255, 255, 255, 0)',
      borderBottomColor: '#ffffff',
      borderWidth: '10px',
      marginLeft: '-10px',
    },
    '&.register:after': {
      bottom: '100%',
      left: '110px',
      border: 'solid transparent',
      content: 'close-quote',
      height: '0px',
      width: '0',
      position: 'absolute',
      pointerEvents: 'none',
      borderColor: 'rgba(255, 255, 255, 0)',
      borderBottomColor: '#ffffff',
      borderWidth: '10px',
      marginLeft: '-10px',
    },
  },
  instructions: {
    backgroundColor: '#4B9FEA',
    width: ' 50%',
    paddingTop: 'calc(2% + 100px)',
    paddingBottom: 'calc(2% + 100px)',
    paddingLeft: 'calc(2% + 50px)',
    paddingRight: 'calc(2% + 50px)',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '40px',
    lineHeight: '40px',
    fontWeight: '300',
  },
  text: {
    fontSize: '17px',
    lineHeight: '28px',
    marginTop: '50px',
    marginBottom: '50px',
  },
  button: {
    textTransform: 'uppercase',
    backgroundColor: '#4B9FEA',
    border: '1px solid white',
    borderRadius: '3px',
    height: '40px',
    width: '260px',
  },
  '@media (max-width: 1100px)': {
    instructions: {
      paddingLeft: '3%',
      paddingRight: '3%',
    },
  },
  '@media (max-width: 767px)': {
    formContainer: {
      width: '100% !important',
    },
    instructions: {
      display: 'none !important',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
