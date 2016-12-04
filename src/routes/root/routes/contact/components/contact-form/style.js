import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  container: {
    backgroundColor: muiTheme.palette.white,
    boxShadow: '0px 0px 40px 0px rgba(0, 0, 0, 0.3)',
    width: '80%',
    height: '558px',
    margin: '0 auto',
    zIndex: '10',
    top: '-50px',
    padding: '0px',
    maxWidth: '640px',
    minWidth: '280px',
  },
  form: {
    paddingTop: '40px',
  },
  label: {
    width: '71% !important',
    display: 'block !important',
    minWidth: '260px',
  },
  textField: {
    boxShadow: 'none',
  },
  button: {
    height: '40px',
    width: '260px',
    marginBottom: '60px',
    marginTop: '60px',
  },
  toast: {
    textAlign: 'center',
  },
  '@media (max-width: 767px)': {
    form: {
      paddingTop: '10px',
    },
  },
  '@media (max-width: 496px)': {
    container: {
      height: '484px',
    },
    button: {
      marginBottom: '30px',
      marginTop: '30px',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export { styles, classes };
