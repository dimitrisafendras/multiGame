import { jss } from 'components';
import muiTheme from 'styles/customized-mui-theme';

const styles = {
  signature: {
    padding: '10px 20px',
    fontSize: '12px',
    color: muiTheme.palette.primary1Color,
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;
export {
  classes,
};
