import { jss } from 'components';
import muiTheme from 'styles/customized-mui-theme';

const styles = {
  signature: {
    padding: '6px 20px',
    fontSize: '12px',
    color: muiTheme.palette.primary1Color,
  },
};

export default jss.createStyleSheet(styles).attach();
