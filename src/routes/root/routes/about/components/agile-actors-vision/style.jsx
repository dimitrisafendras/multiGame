import muiTheme from 'styles/customized-mui-theme';
import Images from './images';
import { jss } from 'components';

const styles = {
  component: {
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: muiTheme.appBar.maxWidth,
  },
  container: {
    backgroundColor: 'inherit',
  },
  backgroundImage: {
    position: 'relative',
    backgroundSize: 'auto 100%',
    height: '250px',
    width: '50%',
    marginRight: '5%',
    backgroundImage: Images.Vision,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  title: {
    color: muiTheme.palette.blue700,
  },
  textWrapper: {
    width: '45%',
  },
  text: {
    width: '100%',
    marginTop: '20px',
    maxWidth: '624px',
  },
  '@media (max-width: 1024)': {
    backgroundImage: {
      backgroundSize: '100%',
    },
  },
  '@media (max-width: 767px)': {
    container: {
      flexDirection: 'column !important',
    },
    backgroundImage: {
      width: '100%',
      position: 'relative',
      backgroundSize: 'auto 100%',
      height: '200px',
      marginRight: '0px',
      marginBottom: '10px',
    },
    textWrapper: {
      width: '100%',
    },
    text: {
      width: '100%',
      maxWidth: '100%',
      marginTop: '15px',
    },
  },
  '@media (max-width: 600px)': {
    text: {
      marginTop: '5%',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export { styles, classes };
