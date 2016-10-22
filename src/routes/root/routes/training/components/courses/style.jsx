import muiTheme from 'styles/customized-mui-theme';
import Image from './images';
import { jss } from 'components';

const styles = {
  outerContainer: {
    height: '1140px',
  },
  backgroundImage: {
    background: `url(${Image}) no-repeat center 100%`,
    backgroundSize: 'cover',
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export { styles, classes };
