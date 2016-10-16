import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  outerTitle: {
    color: muiTheme.palette.blue700,
    marginBottom: '3%',
    textAlign: 'center',
  },
  containerWrapper: {
    '&:first-child': {
      marginRight: '57px',
    },
    '&:last-child': {
      marginLeft: '57px',
    },
  },
  container: {
    marginLeft: '57px',
    marginRight: '57px',
    width: '236px',
    height: '420px',
    paddingTop: '35px',
    paddingBottom: '35px',
    boxSizing: 'border-box',
    '&:first-child': {
      marginLeft: '0px',
    },
    '&:last-child': {
      marginRight: '0px',
    },
  },
  title: {
    color: muiTheme.palette.blue700,
    fontWeight: '300',
  },
  button: {
    marginTop: '4%',
  },
  '@media (max-width: 1583px)': {
    containerWrapper: {
      '&:first-child': {
        marginRight: '52px',
        marginLeft: '52px',
        marginBottom: '20px',
      },
      '&:last-child': {
        marginRight: '52px',
        marginLeft: '52px',
      },
    },
  },
  '@media (max-width: 767px)': {
    container: {
      marginLeft: '0px !important',
      marginRight: '0px !important',
      textAlign: 'center',
      height: 'auto',
      paddingBottom: '20px',
    },
    button: {
      marginTop: 'calc(6.1% + 20px)',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export { styles, classes };
