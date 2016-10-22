import { jss } from 'components';

const styles = {
  container: {
    height: '360px',
    width: '100%',
    padding: '0px',
  },
  '@media (max-width: 768px)': {
    container: {
      height: '300px',
    },
  },
  '@media (max-width: 320px)': {
    container: {
      height: '240px',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
