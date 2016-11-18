import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  component: {
    backgroundColor: muiTheme.palette.blue600,
    display: 'flex',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: muiTheme.appBar.maxWidth,
    margin: '0 auto',
  },
  container: {
    color: muiTheme.palette.white,
    backgroundColor: 'inherit',
    minHeight: '300px',
  },
  title: {
    marginTop: '-50px',
  },
  text: {
    marginTop: '-5px',
    textAlign: 'center',
    maxWidth: '750px',
    fontWeight: '300',

    '& strong': {
      fontWeight: '500',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export { styles, classes };
