import { jss } from 'components';

const styles = {
  text: {
    textTransform: 'uppercase',
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
