import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  outerContainer: {
    backgroundColor: muiTheme.palette.cyan400,
    color: muiTheme.palette.white,
  },
  outerTitle: {
    marginBottom: '4%',
    textAlign: 'center',
  },
  container: {
    marginLeft: '20px',
    marginRight: '20px',
  },
  subTitle: {
    display: 'none',
    textAlign: 'center',
  },
  innerTitleWrapper: {
    marginBottom: '50px',
  },
  innerTitle: {
    maxWidth: '210px',
    textAlign: 'center',
  },
  divider: {
    width: '50px',
    marginTop: '15px',
    borderBottom: '1px solid white',
  },
  text: {
    marginTop: '30px',
    marginBottom: '10px',
  },
  img: {
    height: '300px',
    width: '300px',
  },
  '@media (max-width: 1096px)': {
    outerTitle: {
      marginBottom: '15px',
    },
    subTitle: {
      display: 'block',
      marginBottom: '7%',
    },
    innerTitleWrapper: {
      display: 'none !important',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export { styles, classes };