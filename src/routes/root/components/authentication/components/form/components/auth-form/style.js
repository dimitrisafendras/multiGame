import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  form: {
    marginBottom: '30px',
  },
  label: {
    lineHeight: '1.5',
  },
  button: {
    textTransform: 'uppercase',
    color: muiTheme.palette.accent1Color,
    backgroundColor: muiTheme.palette.white,
    border: `1px solid ${muiTheme.palette.accent1Color}`,
    borderRadius: '3px',
    height: '40px',
    width: '260px',
    marginTop: '25px',
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
