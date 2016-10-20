import { jss } from 'components';

const styles = {
  component: {
    paddingTop: '0px',
    zIndex: '2',
    overflow: 'visible',
  },
  container: {
    width: '100%',
    minWidth: '280px',
    maxWidth: '640px',
    marginTop: '-70px',
  },
  form: {
    paddingTop: '40px',
  },
  label: {
    width: '80% !important',
    display: 'block !important',
  },
  button: {
    height: '40px',
    width: '260px',
    marginBottom: '50px',
    marginTop: '50px',
  },
  toast: {
    textAlign: 'center',
  },
  '@media (max-width: 767px)': {
    form: {
      paddingTop: '10px',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export { styles, classes };
