import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  outerContainer: {
    backgroundColor: muiTheme.palette.grey100,
  },
  outerTitle: {
    marginBottom: '6.1%',
    textAlign: 'center',
  },
  containerWrapper: {
    overflow: 'visible',

    '&:first-child': {
      marginRight: '10px',
    },
    '&:last-child': {
      marginLeft: '10px',
    },
  },
  container: {
    backgroundColor: muiTheme.palette.grey200,
    marginLeft: '10px',
    marginRight: '10px',
    width: '306px',
    height: '515px',
    paddingTop: '35px',
    paddingBottom: '35px',
    paddingLeft: '35px',
    paddingRight: '35px',
    boxSizing: 'border-box',
    '&:hover': {
      boxShadow: '0px 0px 40px 0px rgba(0, 0, 0, 0.3)',
    },
    '&:first-child': {
      marginLeft: '0px',
    },
    '&:last-child': {
      marginRight: '0px',
    },
  },
  imgWrapper: {
    backgroundColor: muiTheme.palette.white,
    height: '180px',
    marginTop: '-35px',
    marginBottom: '0px',
    marginLeft: '-35px',
    marginRight: '-35px',
  },
  img: {
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: muiTheme.palette.blue700,
    fontWeight: '300',
    marginTop: '35px',
  },
  button: {
    marginTop: '6.1%',
  },
  '@media (max-width: 1581px)': {
    containerWrapper: {
      '&:first-child': {
        marginRight: '5px',
        marginLeft: '5px',
        marginBottom: '20px',
      },
      '&:last-child': {
        marginRight: '5px',
        marginLeft: '5px',
      },
    },
  },
  '@media (max-width: 767px)': {
    outerContainer: {
      '& .slick-arrow': {
        display: 'none  !important',
      },
      '& .slick-dots button:before': {
        color: muiTheme.palette.blue700 + ' !important',
      },
    },
    container: {
      paddingLeft: '30px !important',
      paddingRight: '30px !important',
      marginLeft: '5px !important',
      marginRight: '5px !important',

      '&:hover': {
        boxShadow: 'none',
      },
    },
    button: {
      marginTop: 'calc(6.1% + 20px)',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export { styles, classes };